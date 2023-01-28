from rest_framework import serializers
from .models import *


class LegoSetImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegoSetImage
        fields = ['ordering', 'image']

class MinifigureImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = MinifigureImage
        fields = ['ordering', 'image']

class PartImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = PartImage
        fields = ['ordering', 'image']

class SeriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Series
        fields = '__all__'
        lookup_field = 'slug'
        extra_kwargs = {
            'url' : { 'lookup_field': 'slug' },
        }

class LegoSetsSerializer(serializers.ModelSerializer):
    images = LegoSetImageSerializer(many=True, read_only=True)

    class Meta:
        model = LegoSet
        exclude = ['quantity_sold', 'is_active']
        lookup_field = 'slug'
        extra_kwargs = {
            'url': { 'lookup_field': 'slug' },
        }

class MinifiguresSerializer(serializers.ModelSerializer):
    images = MinifigureImageSerializer(many=True, read_only=True)

    class Meta:
        model = Minifigure
        exclude = ['quantity_sold', 'is_active']
        lookup_field = 'slug'
        extra_kwargs = {
            'url': { 'lookup_field': 'slug' },
        }

class PartsSerializer(serializers.ModelSerializer):
    images = PartImageSerializer(many=True, read_only=True)

    class Meta:
        model = Part
        exclude = ['quantity_sold', 'is_active']
        lookup_field = 'slug'
        extra_kwargs = {
            'url': { 'lookup_field': 'slug' },
        }


class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('state', 'unique_uuid', 'items_slugs', 'items_quantities' , 'items_price', 'delivery_price', 'delivery_type', 'total_price', 'created', 'updated',
                  'first_name', 'last_name', 'middle_name', 'email', 'phone', 'address', 'postal_code')
        lookup_field = 'unique_uuid'
        extra_kwargs = {
            'url': {'lookup_field': 'unique_uuid'},
        }
