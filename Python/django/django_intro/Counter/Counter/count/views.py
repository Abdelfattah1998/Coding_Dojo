from urllib import request
from django.shortcuts import render,redirect


def count(request):
    if 'counter' not in request.session:
        request.session['counter']=0
    else:
        request.session['counter']+=1

    return render(request,"count.html")

 
def destroy(request):
    """Best practice is to add a docstring after function definition """
    del request.session['counter']
    return redirect("/")




# if my_rand not in request.session['my_rand']
#   request.session['my_rand']  =  random()
  