from typing import Text
from django.shortcuts import render,redirect
from .models import *
from LoginRegistration.models import *
def index(request):
    
    if request.session['fname']:
        context = {
            "messages":Message.objects.order_by("-created_at"),
            "comments":Message.objects.order_by("-created_at"),
            "fname":request.session['fname'],
            "reglog":request.session['reglog'],
            "userid":request.session['userid']
        }
        return render(request,"wall.html",context)
    else:
        redirect("/")

def message(request):

    PostText=request.POST['mymessage']
    ThisUser=user.objects.get(id=request.session['userid'])
    Message.objects.create(Text=PostText,User=ThisUser)
    return redirect("/wall")


def comment(request,message_id):
    ThisUser=user.objects.get(id=request.session['userid'])
    Thismessage=Message.objects.get(id=int(message_id))
    PostText=request.POST['mycomment']
    Comment.objects.create(Text=PostText,User=ThisUser,Message=Thismessage)
    return redirect("/wall")



    