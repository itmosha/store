import sys

from rest_framework import viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework import permissions
from rest_framework import mixins
from rest_framework.response import Response
from .serializers import *

from .models import Item


class ItemsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Item.objects.all().filter(is_active=True)
    serializer_class = ItemsSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.BasePermission]


class OrderViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):  # + mixins.CreateModelMixin without state editing and all that stuff
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'unique_uuid'
    permission_classes = [permissions.BasePermission]


@api_view(['POST'])
@permission_classes((permissions.AllowAny,))
def get_items(request):
    headers = request.headers
    body_unicode = request.body.decode('utf-8')
    print(headers)
    print(body_unicode)
    return Response({'status': 'ok'})
