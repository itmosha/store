from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'items', views.ItemsViewSet)
router.register(r'orders', views.OrderViewSet)


urlpatterns = [
    path('api/payment', views.get_items),
    path('api/', include(router.urls)),
]
