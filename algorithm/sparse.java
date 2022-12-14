
import java.util.HashMap;
class sparse{
    public static void main(String[] args){
        String[] inputs ={"ab","ab","abc"};
        String[] queries ={"ab","abc","bc"};
        int[] counts ={0,0,0};
        HashMap<String, Integer> sparsing = new HashMap<String, Integer>();
        sparsing.put("ab", 0);
        sparsing.put("abc", 1);
        sparsing.put("bc", 2);
        for (String x:inputs){

                    counts[sparsing.get(x)] ++;

            }

        for(int i =0;i<3;i++){
        System.out.print(counts[i]+" ");
        }
    }
    
}