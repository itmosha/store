from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('items', views.get_items, name='items'),
    path('item/<slug:slug>', views.get_item, name='item'),
]
