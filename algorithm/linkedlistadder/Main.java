class DoublyLinkedList {    
    class Node{  
        int item;  
        Node previous;  
        Node next;  
   
        public Node(int item) {  
            this.item = item;  
        }  
    }  
    //Initially, heade and tail is set to null
    Node head, tail = null;  
    //add a node to the list  
    public void addNode(int item) {  
        //Create a new node  
        Node newNode = new Node(item);
        //if list is empty, head and tail points to newNode  
        if(head == null) {  
            head = tail = newNode;  
            head.previous = null;  
            head.next = null;  
        }  
        else {  
            //add newNode to the end of list. tail->next set to newNode  
            tail.next = newNode;  //add to tail
            newNode.previous = tail;  
            tail = newNode;  
            tail.next = null;  
        }  
    }  

    public void deleteNode(){

        if(tail.previous !=null){
            Node x=tail.previous;
            x.next=null;
            tail=tail.previous;
        }
        else if(tail !=null ){
            tail=head=null;
        }
        else{
            System.out.println("Doubly linked list is empty");
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
    // ########################################
    public int addNodes() {  
        //Node current will point to head  
        Node current = head; 
        int num=0; 
        int mul=1;
        if(head == null) {  
            return 0;  
        }  
        System.out.println("Nodes of doubly linked list: ");  
        while(current != null) {  
            //Print each node and then go to next.  
            num += mul*current.item;
            mul=mul*10;
            current = current.next;  
        }  
        return num;  

    }  
    // ##########################################################################


    public void reverse() {  
        Node current=head;
        Node temp=null ;
        while(current != null) {  
            temp=current.next;
            current.next=current.previous;
            current.previous=temp;
            current = current.previous;  
        }  
        temp=head ;
        head=tail;
        tail=temp;
    }  


    public void printreverse() {  
        //Node current will point to head  
        Node current = tail;  
        if(tail == null) {  
            System.out.println("Doubly linked list is empty");  
            return;  
        }  
        System.out.println("Nodes of doubly linked list: ");  
        while(current != null) {  
            //Print each node and then go to next.  
            System.out.print(current.item + " ");  
            current = current.previous;  
        }  
            System.out.println("");  
    }  
}


class Main{
    public static void main(String[] args) {  
        //create a DoublyLinkedList object
        DoublyLinkedList dl_List = new DoublyLinkedList();  
        DoublyLinkedList d2_List = new DoublyLinkedList();  
        //Add nodes to the list  
        dl_List.addNode(1);  
        dl_List.addNode(2);  
        dl_List.addNode(3);  
       

        d2_List.addNode(1);  
        d2_List.addNode(7);  
         

        System.out.println((d2_List.addNodes()+dl_List.addNodes()));   
        
   
        //print the nodes of DoublyLinkedList  
        dl_List.printNodes();  
        dl_List.reverse();  
        dl_List.printNodes();  

        if (dl_List.tail.next !=null)
        {
            System.out.println(true);
        }
        else{
            System.out.println(false);
        }
    }  
}
