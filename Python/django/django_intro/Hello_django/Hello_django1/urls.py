from django.urls import path     
from . import views
urlpatterns = [
        path('', views.root),                        # would only match localhost:8000/bears
        path('blogs', views.index),                        # would only match localhost:8000/bears
        path('new', views.new),                        # would only match localhost:8000/bears
        path('blogs/create', views.create),                        # would only match localhost:8000/bears
        path('blogs/<int:number>', views.show),                        # would only match localhost:8000/bears
        path('blogs/<int:number>/edit', views.edit),                        # would only match localhost:8000/bears
        path('blogs/<int:number>/delete', views.destroy),                        # would only match localhost:8000/bears
        path('blogs/json', views.json),                        # would only match localhost:8000/bears

]

