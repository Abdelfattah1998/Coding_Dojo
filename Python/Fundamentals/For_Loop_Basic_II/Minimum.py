def Sum_Total(mylist):
    min=mylist[0]
    for x in mylist:
            if x<min:
                min=x
    return min
print(Sum_Total([37,2,1,-9]))