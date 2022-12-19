public class BST {
    public Node root;
    public BST(int x){
        this.root=addnode(root,x);
    }
    public BST(){
        this.root=null;
    }
    public Node addnode(Node root,int x){
        if (root== null ){
            root = new Node(x);
        }
        else if(root.data>=x){
            root.right=addnode(root.right,x);
        }
        else{
            root.left=addnode(root.left,x);
        }
        return root;
    }

    public void add(int x){
        addnode(this.root,x);
    }

    public Node find(Node root,int x){
        if (root== null ){
            return null;
        }
        if (root.data== x ){
            return root;
        }
        else if(root.data>=x){
            return  find(root.right,x);
        }
        else{
            return  find(root.left,x);
        }
    }

    public Node findit(int x){
        return find(this.root,x);
    }

    
}
