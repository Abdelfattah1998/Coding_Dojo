from django.shortcuts import render,HttpResponse

def index(request):
    return render(request,"form.html")

def result(request):
    name_from_form = request.POST['text'],
    location_from_form = request.POST['location'],
    language_from_form = request.POST['language'],
    comment_from_form=  request.POST['comment']
    context={
    'name_from_form' :name_from_form ,
    'location_from_form' : location_from_form,
    'language_from_form' : language_from_form,
    'comment_from_form' : comment_from_form
    }
    return render(request,"results.html",context)
