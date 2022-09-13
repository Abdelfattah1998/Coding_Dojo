def FirstPlusLength(list):
    if len(list)<2:
        return("False")
    arr=[]
    for x in range(0,len(list),1):
        if list[x]>list[1]:
            arr.append(list[x])

    print(len(arr))
    return(arr)

    
print(FirstPlusLength([5,4]))