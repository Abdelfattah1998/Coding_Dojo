class queue:
    def __init__(self) :
        self.myqueue=[]
    
    def enqueue(self,value):
        self.myqueue.append(value)


    def dequeue(self):
        self.myqueue.pop(0)

queue1=queue()

queue1.enqueue(10)
queue1.enqueue(1)
queue1.enqueue(75)
queue1.enqueue(85)
queue1.enqueue(24)
queue1.enqueue(46)
queue1.dequeue()
queue1.dequeue()
queue1.dequeue()


print(queue1.myqueue)