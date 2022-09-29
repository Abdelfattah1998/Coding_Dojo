from urllib import request
from django.shortcuts import render,HttpResponse,redirect
from .models import *


def index(request):
    context={
        'books': Book.objects.all()
    }  
    return render(request,'index.html',context)


def authors(request):
    context={
        'authors': Publisher.objects.all()
    }  
    return render(request,'authors.html',context)


def addbook(request):
    title = request.POST['title']
    description = request.POST['description']
    Book.objects.create(title=title,description=description)
    return redirect("/")


def addauthor(request):
    first_name = request.POST['firstname']
    last_name = request.POST['lastname']
    notes = request.POST['notes']
    Publisher.objects.create(first_name=first_name,last_name=last_name,notes=notes)
    return redirect("/authors")


def viewbook(request,book_id):

    context={
        'thisbook' :Book.objects.get(id=int(book_id)),
        'publishers': Publisher.objects.all()
    }  
    return render(request,'bookpage.html',context)


def viewauthor(request,author_id):

    context={
        'thisauthor' :Publisher.objects.get(id=int(author_id)),
        'books': Book.objects.all()
    }  
    return render(request,'author.html',context)


def linkauthor(request):
    author_id=request.POST['author']
    book_id=request.POST['thisbook']
    this_book = Book.objects.get(id=book_id)
    this_author = Publisher.objects.get(id=author_id)
    this_author.books.add(this_book)
    return redirect(f"/action/{book_id}")


def linkbook(request):
    author_id=request.POST['thisauthor']
    book_id=request.POST['book']
    this_book = Book.objects.get(id=book_id)
    this_author = Publisher.objects.get(id=author_id)
    this_book.Publishers.add(this_author)
    return redirect(f"/authors/{author_id}")
