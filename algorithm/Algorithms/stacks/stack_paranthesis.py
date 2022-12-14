stack = []
opens = ['(', '<', '{', '[']
closes = [')', '>', '}', ']']

str = "welcome(())[][)]<>"

for char in str:
    if char in opens:
        stack.append(char)
    elif char in closes:
        position = closes.index(char)
        if stack[len(stack)-1] == opens[position]:
            stack.pop()
        else:
            print("Wrong Order")
            break
if len(stack) == 0:
    print("Correct order")
else:
    print("wrong order")


