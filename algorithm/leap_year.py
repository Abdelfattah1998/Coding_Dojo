
def leap_year(x):
    y=False
    if x%400==0 or (x%4==0 and x%100 !=0):
        y=True
    return(y)
print(leap_year(2000))
