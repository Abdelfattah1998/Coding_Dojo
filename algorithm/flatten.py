from collections.abc import Iterable  

x=[1,[2,3],4,[]]
i=0
while i < (len(x)):
    if isinstance(x[i], Iterable)  :
        if not len(x[i])==0:
            for j in x[i]:
                x.append(j)
        x.pop(0)  
        i -=1  
    else:
        x.append(x[i])
        x.pop(0)
        i -=1 
    i+=1
print(x)