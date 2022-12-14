import java.util.Arrays;
import java.util.ArrayList;
import java.util.stream.Stream;
import java.util.List;
import java.util.Collections;
    class Nth_Largest{
       public static void main(String[] args){
        Integer[] Array={3,4,5,6,10,200};
        Arrays.sort(Array);
        List<Integer> list = new ArrayList<Integer>();
        Collections.addAll(list, Array);

        for(int i=0;i<list.size();i++){
            for(int j=i+1;j<list.size();j++){
                if(list.get(i)==list.get(j)){
                    list.remove(j);
                    j--;
                }
            }
        }        
        System.out.println(list);

        int num=list.get(list.size()-3);
        System.out.println(num);


       } 
    }