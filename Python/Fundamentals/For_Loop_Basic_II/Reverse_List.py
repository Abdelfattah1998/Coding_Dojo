def Reverse_List(mylist):
    y=[]
    i=0
    for x in range(len(mylist)-1,-1,-1):
            y.append(mylist[x])
    return y
print(Reverse_List([0,1,5,-6,-9,-4,4]))