from django.shortcuts import render,redirect
from .models import Dojo,Ninja
def index(request):
    context={
        'dojos': Dojo.objects.all(),
        'ninjas': Ninja.objects.all()
    }    
    return render(request,"index.html",context)


def ninja(request):
    first = request.POST['first_name']
    last = request.POST['last_name']
    dojo_id = request.POST['dojo']
    dojo=Dojo.objects.get(id=dojo_id)
    Ninja.objects.create(first_name=first,last_name=last,dojo=dojo)
    context={
        
    }
    return redirect("/")


def dojo(request):

    name = request.POST['name']
    city = request.POST['city']
    state = request.POST['state']
    Dojo.objects.create(name=name,city=city,state=state)

    return redirect("/")