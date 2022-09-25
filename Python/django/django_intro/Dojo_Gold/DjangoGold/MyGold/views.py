from django.shortcuts import render, HttpResponse,redirect
import random
from time import gmtime, strftime
def index(request):

    return render(request,"Golden.html")

def submit(request):
    time=strftime("%Y-%m-%d %H:%M %p", gmtime())
    if 'Gold' not in request.session:
        request.session['Gold']= 0
        request.session['log']=[]
    elif  request.POST['EarnLose'] == 'Farm':
        rand=random.randint(0, 20)
        request.session['Gold'] += rand
        request.session['log'].insert(0,(f"you entered a {request.POST['EarnLose']} and earned {rand} gold :{time}"))
        request.session['color'].insert(0,('green'))
    elif  request.POST['EarnLose'] == 'Cave':
        rand=random.randint(0, 20)
        request.session['Gold'] += rand
        request.session['log'].insert(0,(f"you entered a {request.POST['EarnLose']} and earned {rand} gold :{time}"))
        request.session['color'].insert(0,('green'))
    elif  request.POST['EarnLose'] == 'House':
        rand=random.randint(0, 20)
        request.session['Gold'] += rand
        request.session['log'].insert(0,(f"you entered a {request.POST['EarnLose']} and earned {rand} gold :{time}"))
        request.session['color'].insert(0,('green'))
    elif request.POST['EarnLose'] =='Quest':
        rand=random.randint(-50, 50)
        request.session['Gold'] += rand
        if rand>=0:
            request.session['log'].insert(0,(f"you entered a {request.POST['EarnLose']} and earned {rand} gold :{time}"))
            request.session['color'].insert(0,('green'))
        else:
            request.session['log'].insert(0,(f"you entered a {request.POST['EarnLose']} and lost {rand} gold :{time}"))
            


    return redirect("/")