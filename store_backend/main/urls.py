from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'lego_sets', views.LegoSetsViewSet)
router.register(r'minifigures', views.MinifiguresViewSet)
router.register(r'parts', views.PartsViewSet)
router.register(r'orders', views.OrderViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
]
