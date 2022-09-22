from django.shortcuts import render,HttpResponse,redirect

import random 	            # import the random module




def index(request):
    request.session['random']=random.randint(1, 100) 		# random number between 1-100

    return render(request,"NumGame.html")

def guess(request):
        if request.method == "POST":
            print(request.POST)
            context = {
    	    "Guess" :int(request.POST["number"])
            }
        return render(request,"NumGame.html",context)


# Create your views here.
