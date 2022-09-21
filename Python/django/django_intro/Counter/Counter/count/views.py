from django.shortcuts import render,redirect
def count(request):
    if 'counter' not in request.session:
        request.session['counter']=1
    else:
        request.session['counter']+=1

    return render(request,"count.html")
def destroy(request):
    request.session['counter']=0
    return redirect("/")
