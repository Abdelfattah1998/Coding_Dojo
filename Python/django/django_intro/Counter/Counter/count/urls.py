from django.urls import path     
from . import views

#Best practice to take a space
urlpatterns = [
    path('', views.count),	
    path('destroy',views.destroy)
]
