import json
from django.shortcuts import render
from django.http import Http404
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import ItemsSerializer

from django.db.models import Q
import operator
from functools import reduce
from django.shortcuts import get_object_or_404

from .models import Item


def index(request):
    return render(request, 'main/index.html')


def about(request):
    return render(request, 'main/about.html')


class ItemsViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemsSerializer
    lookup_field = 'slug'
    permission_classes = [permissions.BasePermission]
