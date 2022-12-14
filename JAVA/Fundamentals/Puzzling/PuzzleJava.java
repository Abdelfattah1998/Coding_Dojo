import java.util.Random;
import java.util.ArrayList;
import java.lang.StringBuffer;

public class PuzzleJava{
    Random randMachine = new Random();


    ArrayList<Integer> getTenRolls(){
        ArrayList<Integer> randlist = new ArrayList<Integer>();
        for(int i =0;i<10;i++){
        randlist.add(randMachine.nextInt(20));
        }
        return randlist;
    }


    char getRandomLetter(){
        char[] charlist={'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        return(charlist[randMachine.nextInt(26)]);
    }


    StringBuffer generatePassword(){
        char[] charlist={'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        StringBuffer newString= new StringBuffer();
        for (int i=0;i<8;i++){
             newString.append((charlist[randMachine.nextInt(26)]));
        }
        return newString;
    }


    ArrayList<StringBuffer> getNewPasswordSet(){
        char[] charlist={'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};
        ArrayList<StringBuffer> passwordlist = new ArrayList<StringBuffer>();
        for(int i =0;i<10;i++){
            StringBuffer newString= new StringBuffer();
            for (int j=0;i<8;i++){
                newString.append((charlist[randMachine.nextInt(26)]));
            }
        passwordlist.add(newString);
        }
        return passwordlist;
    }

} 

