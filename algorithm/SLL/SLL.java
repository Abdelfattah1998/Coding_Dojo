class SLL {    
    class Node{  
        int item;  
        Node next;  
   
        public Node(int item) {  
            this.item = item;  
        }  
    }  
    //Initially, heade and tail is set to null
    Node head, tail = null;  
    //add a node to the list  
    public void add(int item) {  
        //Create a new node  
        Node newNode = new Node(item);
        //if list is empty, head and tail points to newNode  
        if(head == null) {  
            head = tail = newNode;   
            head.next = null;  
        }  
        else {  
            //add newNode to the end of list. tail->next set to newNode  
            head.next = newNode;  //add to tail
            tail = newNode;  
            tail.next = null;  
        }  
    }  

    public void removeFront(){

        if(head !=null && head.next != null){
            Node second_last = head;
            while (second_last.next.next != null){
                second_last = second_last.next;
            }
     
            // Change next of second last
            second_last.next = null;
        }
        else if(head.next != null ){
            head.next = null;
        }
        else if(tail !=null ){
            tail=head=null;
        }
    }
   
//print all the nodes of doubly linked list  
    public void printNodes() {  
        //Node current will point to head  
        Node current = head;  
        if(head == null) {  
            System.out.println("Doubly linked list is empty");  
            return;  
        }  
        System.out.println("Nodes of doubly linked list: ");  
        while(current != null) {  
            //Print each node and then go to next.  
            System.out.print(current.item + " ");  
            current = current.next;  
        }  
        System.out.println("");  

    }  
}
 



