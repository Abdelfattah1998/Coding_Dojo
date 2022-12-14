class StableArray{
    public static void main(String[] args){
    int[] myArr={1,2,1,3,4,2}
    int x=0;

    ArrayList<Integer> arraylist = new ArrayList<Integer>();
    for(int i=0;i<mayarr.length;i++){
        x = myArr[i];
        boolean doit=false;
        for (int j=0;arraylist.length;j++){
            if (x == arraylist.get(j)){
                doit=true;
            }
        }
        if(doit){
            arraylist.add(x);
        }
    }
    
}
}