# def log(root,number):
#     if number<root:
#         return 0
#     number=number/root
#     return log(root,number)+1

# print(log(2,8))


def pow(root,power):
    if power ==0:
        return 1
    elif power < 0:
        power+=1
        return pow(root,power)/root
    elif power>=1:
        power -=1
        return pow(root,power)*root
print(pow(1,3))