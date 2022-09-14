def Sum_Total(mylist):
    max=mylist[0]
    for x in mylist:
            if x>max:
                max=x
    return max
print(Sum_Total([37,2,1,-9]))