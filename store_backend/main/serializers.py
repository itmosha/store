from rest_framework import serializers
from .models import Item


class ItemsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Item
        exclude = ['quantity_sold']
        lookup_field = 'slug'
        extra_kwargs = {
            'url': {'lookup_field': 'slug'}
        }
