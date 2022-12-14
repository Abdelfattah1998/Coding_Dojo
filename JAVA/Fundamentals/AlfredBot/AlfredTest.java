import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class AlfredTest {
    /*
    * This main method will always be the launch point for a Java application
    * For now, we are using the main to test all our 
    * AlfredQuotes methods.
    */
    public static void main(String[] args) {
        // Make an instance of AlfredQuotes to access all its methods.
        AlfredQuotes alfredBot = new AlfredQuotes();
        String currentDayHour= DateTimeFormatter.ofPattern("H").format(LocalTime.now());
        int i=Integer.parseInt(currentDayHour);
        String period;
        if (5<i && i<12){
             period ="Morning";
        }
        else if(12<i && i<17){
             period ="After Noon";
        }
        else if(17<i && i<21){
             period ="Evening";
        }
        else{
             period ="Night";
        }
        // Make some test greetings, providing any necessary data
        String testGreeting = alfredBot.basicGreeting();

        String testGuestGreeting = alfredBot.guestGreeting("Beth Kane", period);
        String testDateAnnouncement = alfredBot.dateAnnouncement();
        
        String alexisTest = alfredBot.answeringBeforeAlexis("Alexis are you here hi alexis.");

        String alfredTest = alfredBot.answeringBeforeAlexis("Alfred are you here i cant find you");

        String notRelevantTest = alfredBot.answeringBeforeAlexis("Maybe that's what Batman is about. Not winning. But failing..");
        
        // Print the greetings to test.
        System.out.println(testGreeting);
        
        // Uncomment these one at a time as you implement each method.
        System.out.println(testGuestGreeting);
        System.out.println(testDateAnnouncement);
        System.out.println(alexisTest);
        System.out.println(alfredTest);
        System.out.println(notRelevantTest);
    }
}