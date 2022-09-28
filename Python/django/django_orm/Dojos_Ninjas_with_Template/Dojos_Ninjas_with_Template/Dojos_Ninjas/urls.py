from django.urls import path,include
from . import views
urlpatterns = [
    path('', views.index),
    path('Ninja', views.ninja),
    path('dojo', views.dojo)
]
