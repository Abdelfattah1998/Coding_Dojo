def Count_Positive(mylist):
    count=0
    for x in mylist:
        if x > 0:
            count+=1
    mylist[-1]=count
    return mylist
print(Count_Positive([0,1,5,-6,-9,-4,4]))