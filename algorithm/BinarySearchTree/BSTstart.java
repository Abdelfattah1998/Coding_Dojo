public class BSTstart {
    public static void main(String args) {
        BST newBST =new BST(5);
        newBST.add(3);
        newBST.add(4);
        newBST.add(7);
        newBST.add(2);
        newBST.add(5);
        System.out.println(newBST.findit(3));
}
}
