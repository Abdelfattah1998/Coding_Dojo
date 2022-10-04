from django.urls import path,include
from . import views

urlpatterns = [
    path('wall', views.index),
    path('message', views.message),
    path('comment/<message_id>', views.comment)
]