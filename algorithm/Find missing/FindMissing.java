import java.util.Arrays;
import java.util.ArrayList;
import java.util.stream.Stream;
import java.util.List;
import java.util.Collections;

class FindMissing{
       public static void main(String[] args){
        Integer[] Array={0,1,2,3,4,5,6,8,9};
        Arrays.sort(Array);
        // List<Integer> list = new ArrayList<Integer>();
        // Collections.addAll(list, Array);
        int upper=Array.length-1;
        int lower=0;
        int x= upper/2;
        for (int i= 0; i<upper;i++){
            if(Array[x] == x){
                lower=x;
                x += (upper-lower)/2;
            }
            else{
                upper=x;
                if((upper-lower)==1){
                    System.out.println(lower+1);
                    break;
                }
                x -= (upper-lower)/2;
            }
        }
        
       }
       }