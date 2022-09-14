def Average(mylist):
    count=0
    for x in mylist:
            count+=x
    return count/len(mylist)
print(Average([1,2,3,4]))