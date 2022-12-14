import time
def Trib(x):
    if x==2:
        return 1
    elif x<=1:
        return x
    return Trib(x-3)+Trib(x-2)+Trib(x-1)

def loopTrib(x):
    y0=0
    y1=1
    y2=1
    if x==0:
        return 0
    if x==1:
        return 1
    if x==2:
        return 1
    for i in range(x-2):
        ytop=y0+y1+y2
        y0=y1
        y1=y2
        y2=ytop
    return ytop





t_start = time.time()
print(loopTrib(10))
t_stop = time.time()
print("Elapsed time during the whole program in nano seconds:",t_stop-t_start) 

t_start = time.time()
print(Trib(10))
t_stop = time.time()


print("Elapsed time during the whole program in seconds:",t_stop-t_start) 
