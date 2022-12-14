class Node:
 
    # Function to initialise the node object
    def __init__(self, data):
        self.data = data
        self.next = None
 
class LinkedList:
 
    def __init__(self):
        self.head = None
 
    def push(self, new_data):
        new_node = Node(new_data)
        new_node.next = self.head
        self.head = new_node

    def insert(self,position,data):
        n=0
        x=self.head
        while n!=position :
            if x.next==None:
                new_node = Node(data)
                x.next=new_node
                break
                
            if n+1 == position :
                y=Node(data)
                y.next=x.next
                x.next=y
                break
            else:
                x=x.next
                n+=1



    # def traverse(self):
    #     current=self.head
    #     print(current.data)
    #     while x.next != None:
    #         x=x.next    
    #         print(x.data)


mylinkedlist=LinkedList()
mylinkedlist.push(10)
mylinkedlist.push(8)
mylinkedlist.push(5)
mylinkedlist.push(3)


x=mylinkedlist.head
n=[]

mylinkedlist.insert(2,2)
# while x.next != None:
#     previous=x
#     forward=x.next.next
#     x.next= previous

while x != None:
    n.append(x)
    x=x.next    
  
for x in (n):
    print(x.data)