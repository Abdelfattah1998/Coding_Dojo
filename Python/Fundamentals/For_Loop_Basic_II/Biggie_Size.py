def Biggie_Size(mylist):
    for x in range(0,len(mylist),1):
        if mylist[x] > 0:
            mylist[x]="big"
    return mylist
print(Biggie_Size([0,1,5,-6,-9,-4,4]))