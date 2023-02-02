from rest_framework.response import Response
from rest_framework import permissions
from rest_framework import generics
from .serializers import *
from .models import LegoSet, Minifigure, Part, Series



class LegoSetListView(generics.ListAPIView):
    queryset = LegoSet.objects.all().filter(is_active=True)
    serializer_class = LegoSetsSerializer
    lookup_field = 'slug'
    permission_classes = [ permissions.BasePermission ]

class LegoSetDetailView(generics.RetrieveUpdateAPIView):
    queryset = LegoSet.objects.all()
    serializer_class = LegoSetsSerializer
    lookup_field = 'slug'
    permission_classes = [ permissions.BasePermission ]

    def perform_update(self, serializer):
        serializer.save()
        return Response(serializer.data)


class MinifigureListView(generics.ListAPIView):
    queryset = Minifigure.objects.all().filter(is_active=True)
    serializer_class = MinifiguresSerializer
    lookup_field = 'slug'
    permission_classes = [ permissions.BasePermission ]

class MinifigureDetailView(generics.RetrieveUpdateAPIView):
    queryset = Minifigure.objects.all()
    serializer_class = MinifiguresSerializer
    lookup_field = 'slug'
    permission_classes = [ permissions.BasePermission ]

    def perform_update(self, serializer):
        serializer.save()
        return Response(serializer.data)


class PartListView(generics.ListAPIView):
    queryset = Part.objects.all().filter(is_active=True)
    serializer_class = PartsSerializer
    lookup_field = 'slug'
    permission_classes = [ permissions.BasePermission ]

class PartDetailView(generics.RetrieveUpdateAPIView):
    queryset = Part.objects.all()
    serializer_class = PartsSerializer
    lookup_field = 'slug'
    permission_classes = [ permissions.BasePermission ]

    def perform_update(self, serializer):
        serializer.save()
        return Response(serializer.data)


class SeriesListView(generics.ListAPIView):
    queryset = Series.objects.all()
    serializer_class = SeriesSerializer
    lookup_field = 'slug'
    permission_classes = [ permissions.BasePermission ]

class SeriesDetailView(generics.RetrieveAPIView):
    queryset = Series.objects.all()
    serializer_class = SeriesSerializer
    lookup_field = 'slug'
    permission_classes = [ permissions.BasePermission ]


class OrderListView(generics.ListCreateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'unique_uuid'
    permission_classes = [ permissions.BasePermission ]

    def perform_create(self, serializer):
        serializer.save()
        return Response(serializer.data)

class OrderDetailView(generics.RetrieveUpdateAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer
    lookup_field = 'unique_uuid'
    permission_classes = [ permissions.BasePermission ]

    def perform_update(self, serializer):
        serializer.save()
        return Response(serializer.data)