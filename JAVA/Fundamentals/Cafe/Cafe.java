public class Cafe{
    public static void main(String[] args) {
    // APP VARIABLES
    // Lines of text that will appear in the app. 
    String generalGreeting = "Welcome to Cafe Java, ";
    String pendingMessage = ", your order will be ready shortly";
    String readyMessage = ", your order is ready";
    String displayTotalMessage = "Your total is $";
    
    // Menu variables (add yours below)
    double mochaPrice = 3.5;
    double dripCoffee = 2;
    double latte = 4;
    double cappuccino = 4.5;

    // Customer name variables (add yours below)
    String customer1 = "Cindhuri";
    String customer2 = "Sami";
    String customer3 = "Jimmy";
    String customer4 = "Noah";

    // Order completions (add yours below)
    boolean isReadyOrder1 = true;
    boolean isReadyOrder2 = true;
    boolean isReadyOrder3 = true;
    boolean isReadyOrder4 = true;

    // APP INTERACTION SIMULATION (Add your code for the challenges below)
    // Example:
    System.out.println(generalGreeting + customer1); // Displays "Welcome to Cafe Java, Cindhuri"

    if (isReadyOrder1){
        System.out.println(readyMessage);// Displays ", your order is ready"
        System.out.println(displayTotalMessage + dripCoffee);// Displays ", your order is ready"

    }
    else{
        System.out.println(pendingMessage); // Displays "your order will be ready shortly"
    }




    System.out.println(generalGreeting + customer2); // Displays "Welcome to Cafe Java, Cindhuri"

    if (isReadyOrder2){
        System.out.println(readyMessage);// Displays ", your order is ready"
        System.out.println(displayTotalMessage + latte * 2);// Displays ", your order is ready"

    }
    else{
        System.out.println(pendingMessage); // Displays "your order will be ready shortly"
    }
    System.out.println(generalGreeting + customer3); // Displays "Welcome to Cafe Java, Cindhuri"

    if (isReadyOrder3){
        System.out.println(readyMessage);// Displays ", your order is ready"
        System.out.println(displayTotalMessage + (latte-dripCoffee));// Displays ", your order is ready"

    }
    else{
        System.out.println(pendingMessage); // Displays "your order will be ready shortly"
    }


 
 
    System.out.println(generalGreeting + customer4); // Displays "Welcome to Cafe Java, Cindhuri"

    if (isReadyOrder4){
        System.out.println(readyMessage);// Displays ", your order is ready"
        System.out.println(displayTotalMessage + cappuccino);// Displays ", your order is ready"

    }
    else{
        System.out.println(pendingMessage); // Displays "your order will be ready shortly"
    }

}
}
