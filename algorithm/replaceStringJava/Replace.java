import java.util.ArrayList;
class Replace{
            static String replacecracks(String x, ArrayList<String> cracklist){
            for (String S:cracklist){
                String X="";
                for (int i=0;i<S.length();i++){
                    X=X+"x";
                }
                x=x.replace(S, X);
            }
            return x;
            }
    public static void main(String[] args){
        String Myparagraph="Snap crackle pop nincompoop";
        ArrayList<String> cracks=new ArrayList<String>();
        cracks.add("crack");
        cracks.add("poop");
        System.out.println(replacecracks(Myparagraph ,cracks));
    }
}