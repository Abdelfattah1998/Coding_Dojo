def This_Length_That_Value(length,Value):
    output=[]
    for x in range(0,length,1):
        output.append(Value)
    return output

print(This_Length_That_Value(5,3))