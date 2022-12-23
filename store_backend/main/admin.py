from django.contrib import admin
from .models import *


@admin.action(description='Make selected items active')
def make_item_active(modeladmin, request, queryset):
    queryset.update(is_active=True)


@admin.action(description='Make selected items inactive')
def make_item_inactive(modeladmin, request, queryset):
    queryset.update(is_active=False)


class ItemAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'slug', 'price', 'quantity_in_stock', 'quantity_sold']
    ordering = ['date_created']
    actions = [make_item_active, make_item_inactive]


admin.site.register(Item, ItemAdmin)
admin.site.register(ItemImage)
admin.site.register(Order)
admin.site.register(OrderItem)
