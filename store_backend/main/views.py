from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *

from .models import Item


class ItemsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Item.objects.all().filter(is_active=True)
    serializer_class = ItemsSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.BasePermission]


class BasicAPI(APIView):
    def post(self, request):
        req_data = request.data
        data = {
            'first_name': req_data.get('first_name'),
            'last_name': req_data.get('last_name')
        }
        return Response(data, status=status.HTTP_200_OK)


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'unique_id'
    permission_classes = [permissions.BasePermission]
