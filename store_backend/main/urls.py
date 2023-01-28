from django.urls import path
from rest_framework.urlpatterns import format_suffix_patterns
from . import views


urlpatterns = [
    path('api/orders/', views.OrderListView.as_view()),
    path('api/orders/<str:unique_uuid>/', views.OrderDetailView.as_view()),
    path('api/lego_sets/', views.LegoSetListView.as_view()),
    path('api/lego_sets/<str:slug>/', views.LegoSetDetailView.as_view()),
    path('api/parts/', views.PartListView.as_view()),
    path('api/parts/<str:slug>/', views.PartDetailView.as_view()),
    path('api/minifigures/', views.MinifigureListView.as_view()),
    path('api/minifigures/<str:slug>/', views.MinifigureDetailView.as_view()),
    path('api/series/', views.SeriesListView.as_view()),
    path('api/series/<str:slug>/', views.SeriesDetailView.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)