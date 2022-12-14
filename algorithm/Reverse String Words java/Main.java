import java.util.*;  
import java.util.regex.*;  
class Main {
  public static void main(String[] args) {
    String text = "Java is a, fun programming language !";
    text.replaceAll(", ", " ,");
    // Regex objAlphaPattern = new Regex();

    Pattern p = Pattern.compile("[^a-zA-Z0-9_@.-]*$");//. represents single character  
    Matcher m = p.matcher(text.substring(text.length()-1));  
    boolean b = m.matches();  
    if(b){
        System.out.println("Matches");
    }


    // split string from space
    String[] result = text.split(" ");



    for (int i =result.length-1;i>0;i--) {
      System.out.print(result[i] + " ");
    }
  }
}
