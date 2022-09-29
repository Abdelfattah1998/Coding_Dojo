from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('authors', views.authors),
    path('addbook', views.addbook),
    path('addauthor', views.addauthor),
    path('linkauthor', views.linkauthor),
    path('linkbook', views.linkbook),
    path('action/<book_id>', views.viewbook),
    path('authors/<author_id>', views.viewauthor),

]