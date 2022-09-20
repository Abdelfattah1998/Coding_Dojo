from django.shortcuts import render, HttpResponse,redirect
from django.http import JsonResponse
def root(request):
    return redirect("/blogs")

def destroy(request,number):
    return redirect("/blogs")

def create(request):
    return redirect('/')

def index(request):
    return HttpResponse("placeholder to later display a list of all blogs")

def new(request):
    return HttpResponse("placeholder to display a new form to create a new blog")

def show(request, number):
    return HttpResponse(f"placeholder to display blog number: {number}")

def edit(request, number):
    return HttpResponse(f"placeholder to edit blog {number}")

def json(request):
    return JsonResponse({"key ": "value"})