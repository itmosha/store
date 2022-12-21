from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views


router = DefaultRouter()
router.register(r'items', views.ItemsViewSet)


urlpatterns = [
    path('api/', include(router.urls)),
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
]
