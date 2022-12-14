import java.util.ArrayList ;

public class CafeUtil{
    int getStreakGoal(int numWeeks){
        int sum=0;
        for(int i=0;i< numWeeks;i++){
            sum += i ;
        }
        return sum ;
    }

    double getOrderTotal(double[] prices){
        int sum =0;
        for (int i=0;i< prices.length;i++){
            sum += prices[0];
        }
        return sum;
    }

    void displayMenu(ArrayList<String> menuItems){
        int count =0;
        for (String item: menuItems){
            System.out.println(count+"."+menuItems);
            count ++;
        }
    }

    void addCustomer(ArrayList<String> myArray){
        System.out.println("Please enter your name:");
        String userName = System.console().readLine();
        myArray.add(userName); // to add an item to an ArrayList
        System.out.println("Hello,"+ userName + "!");
        System.out.println("There are"+ myArray.size() +"people in front of you");
        for(String name:myArray){
            System.out.println(name);
        }
    }
    }
