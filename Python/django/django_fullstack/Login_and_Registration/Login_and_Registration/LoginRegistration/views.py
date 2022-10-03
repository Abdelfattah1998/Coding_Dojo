from gzip import FNAME
from multiprocessing import context
from django.shortcuts import render,HttpResponse,redirect
from django.contrib import messages
from .models import *

def index(request):
    
    return render(request,"LoginRegistration.html")


def login(request):

    email=request.POST['email']
    password=request.POST['password']
    if user.objects.filter(email = email):
        User=user.objects.get(email = email)
        if User.password == password:
            request.session['fname']=User.fname
            request.session['reglog']=False
            return redirect("/success")
        else:
            messages.error("password is not valid")
    else:
        messages.error("email is not found")


    return redirect("/")
    # return render(request,"LoginRegistration.html")


def register(request):

    errors = user.objects.basic_validator(request.POST)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect("/")

    firstname=request.POST['firstname']
    lastname=request.POST['lastname']
    email=request.POST['email']
    password=request.POST['password']  
    request.session['fname']= firstname
    request.session['reglog']= True
    user.objects.create(fname=firstname,lname=lastname,email=email,password=password)
    return redirect("/success")
    # return render(request,"LoginRegistration.html")

def success(request):
    context = {
        "fname":request.session['fname'],
        "reglog":request.session['reglog']
    }
    return render(request,"success.html",context)

def logout(request):
    request.session['fname']=None
    request.session['reglog']=None
    return redirect("/")
