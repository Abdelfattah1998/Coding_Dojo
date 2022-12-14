class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }
    add(key,value)
{
    // creates a new node
    var node = new Node(key,value);
 
    // to store current node
    var current;
 
    // if list is Empty add the
    // value and make it head
    if (this.head == null)
        this.head = node;
    else {
        current = this.head;
 
        // iterate to the end of the
        // list
        while (current.next) {
            current = current.next;
        }
 
        // add node
        current.next = node;
    }
    this.size++;


}
    find(key){
        var current=this.head;
        while(current.key != key && current.next!=null){
            current=current.next;
        }
        if(current.key!=key ){
            return "not found"
        }
        return current.value
    }
}
class Node {
    // constructor
    constructor(key,value)
    
    {
        this.value = value;
        this.key = key;
        this.next = null;
    }
}

class hash{
    constructor(){
        this.arr=[]

    }
    add(key,value){
        if(this.arr[key.length%16]==null ||s.arr[key.length%16]==undefined){
            var l=new LinkedList();
            l.add(key,value);
            this.arr[key.length%16]=l;
        }
        else{
            this.arr[key.length%16].add(key,value);
        }

    }
    printH(key){
   
        console.log(this.arr[key.length%16].find(key))
    }
}
g= new hash()
g.add("jj","5")
g.printH("jj")