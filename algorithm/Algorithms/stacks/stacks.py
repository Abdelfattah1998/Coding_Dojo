string="w(a{t}s[o(n{c}o)m]e)h[e{r}e]!"
# string="d(i{a}l[t]o)n{e"
# string="a(1)s[O(n]0{t)0}k"
y=[]
# z=[]
# a=[]
for x in string:
    if x=="{":
        y.append(x)
    if x=="(":
        y.append(x)
    if x=="[":
        y.append(x)

    if x=="}" and y[-1]=="{":
        y.pop()
    elif x=="}" :
        y.append("False")
        break

    if x==")" and y[-1]=="(":
        y.pop()
    elif x==")" :
        y.append("False")
        break

    if x=="]" and y[-1]=="[":
        y.pop()
    elif x=="]":
        y.append("False")
        break




if not y :
    print("true")
else:
    print("false")