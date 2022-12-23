from rest_framework import serializers
from .models import Item


class ItemsSerializer(serializers.HyperlinkedModelSerializer):
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
        lookup_field = 'unique_id'
        extra_kwargs = {
            'url': {'lookup_field': 'unique_id'},
        }
