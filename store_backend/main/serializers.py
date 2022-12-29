from rest_framework import serializers
from .models import *


class ItemImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ItemImage
        fields = ['ordering', 'image']


class ItemsSerializer(serializers.HyperlinkedModelSerializer):
    images = ItemImageSerializer(many=True, read_only=True)

    class Meta:
        model = Item
        exclude = ['quantity_sold', 'is_active']
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'},
        }


class OrderSerializer(serializers.HyperlinkedModelSerializer):
    items = serializers.HyperlinkedRelatedField(
        view_name='item-detail',
        lookup_field='slug',
        many=True,
        read_only=True
    )
    
    class Meta:
        model = Order
        fields = '__all__'
        lookup_field = 'unique_uuid'
        extra_kwargs = {
            'url': {'lookup_field': 'unique_uuid'},
        }
