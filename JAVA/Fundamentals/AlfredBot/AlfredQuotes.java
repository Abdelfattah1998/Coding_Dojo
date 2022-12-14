import java.util.Date;

public class AlfredQuotes {

    //  Note: These greetings are not printed to the console, 
    //        but returned as a String for use in the testing file.

    // Inputs: None
    // Return Type: String
    // Output: Returns some basic generic greeting that Alfred might say to anyone.

    public String basicGreeting() {
        return "Hello, How are you";
    }

    // Inputs: String name, String - assume "morning", "afternoon" or "evening".
    // Return Type: String
    // Output: Returns a greeting alfred might say, 
    //         that includes the person's name in the greeting.
    public String guestGreeting(String name, String dayPeriod) {
        return String.format("Good %s, %s. Lovely to see you.", dayPeriod, name);
    }

    // Inputs: None
    // Return Type: String
    // Output: Returns an announcement of the current date, 
    //         in a polite manner.
    public String dateAnnouncement() {
        return String.format("It is currently %s", new Date());
    }
    
    // Inputs: String (Any phrase)
    // Return Type: String
    // Output: A repsonse (String)
    public String answeringBeforeAlexis(String phrase) {

        if(phrase.indexOf("Alexis") > -1) {
            return "Who's Alexis";
        }

        if (phrase.indexOf("Alfred") > -1) {
            return "Here I am";
        }

        return "Right I agree";
    }

    // NINJA BONUS
    // Write your own AlfredQuote method using any of the String methods you have learned.


}