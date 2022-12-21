from django.shortcuts import render
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *

from .models import Item


def index(request):
    return render(request, 'main/index.html')


def about(request):
    return render(request, 'main/about.html')


class ItemsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Item.objects.all()
    queryset = queryset.filter(is_active=True)
    serializer_class = ItemsSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.BasePermission]
