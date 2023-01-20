from rest_framework import viewsets
from rest_framework import permissions
from rest_framework import mixins
from .serializers import *

from .models import LegoSet, Minifigure, Part


class LegoSetsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = LegoSet.objects.all().filter(is_active=True)
    serializer_class = LegoSetsSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.BasePermission]

class MinifiguresViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Minifigure.objects.all().filter(is_active=True)
    serializer_class = MinifiguresSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.BasePermission]

class PartsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Part.objects.all().filter(is_active=True)
    serializer_class = PartsSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.BasePermission]


class OrderViewSet(mixins.RetrieveModelMixin, viewsets.GenericViewSet):  # + mixins.CreateModelMixin without state editing and all that stuff
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'unique_uuid'
    permission_classes = [permissions.BasePermission]
