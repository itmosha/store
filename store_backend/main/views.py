from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *

from .models import Item


class ItemsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Item.objects.all().filter(is_active=True)
    serializer_class = ItemsSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.BasePermission]


class OrderViewSet(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'unique_id'
    permission_classes = [permissions.BasePermission]
