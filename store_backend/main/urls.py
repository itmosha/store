from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views
from django.conf import settings

router = DefaultRouter()
router.register(r'items', views.ItemsViewSet)
router.register(r'orders', views.OrderViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
]
