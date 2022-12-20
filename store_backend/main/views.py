import json
from django.shortcuts import render
from django.http import HttpResponse
from .models import Item


def index(request):
    return render(request, 'main/index.html')


def about(request):
    return render(request, 'main/about.html')


def get_items(request):
    items_from_db = Item.objects.all()
    items_response = []
    for item in items_from_db:
        items_response.append({
            'image': item.image.url,
            'title': item.title,
            'slug': item.slug,
            'price': item.price,
            'description': item.description,
        })
    return HttpResponse(json.dumps(items_response), content_type="application/json")


def get_item(request, slug):
    item_from_db = Item.objects.get(slug=slug)
    item_response = {
        'image': item_from_db.image.url,
        'title': item_from_db.title,
        'slug': item_from_db.slug,
        'price': item_from_db.price,
        'description': item_from_db.description,
        'quantity_in_stock': item_from_db.quantity_in_stock,
    }
    return HttpResponse(json.dumps(item_response), content_type="application/json")
