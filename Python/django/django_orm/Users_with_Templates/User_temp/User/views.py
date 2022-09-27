from django.shortcuts import render,redirect
from .models import *
def index(request):
    context={
        'user_data': User.objects.all().values()
    }
    return render(request,"users.html",context)
def add(request):
    first_name=request.POST['first_name']
    last_name=request.POST['last_name']
    email=request.POST['email']
    age=request.POST['age']
    User.objects.create(first_name=first_name,last_name=last_name,email_address=email,age=age)
    return redirect("/")