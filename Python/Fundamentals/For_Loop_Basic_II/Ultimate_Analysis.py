def Sum_Total(mylist):
    sum=0
    length=0
    min=mylist[0]
    max=mylist[0]
    for x in mylist:
            length+=1
            sum+=x
            if x<min:
                min=x
            if x>max:
                max=x
    avg=sum/length
    return [length,avg,max,min,sum]
print(Sum_Total([37,2,1,-9]))