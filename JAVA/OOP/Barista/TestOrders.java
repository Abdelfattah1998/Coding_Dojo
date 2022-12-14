import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
        // Menu items
        Item item2 =new Item("mocha",2.5);
        Item item3 =new Item("drip coffee",1.5);
        Item item4 =new Item("cappuccino",3.5);
        Item item1 =new Item("latte",4.0);


        // Order variables -- order1, order2 etc.
        Order order1 =new Order();
        order1.setname("Cindhuri");

        Order order2 =new Order();
        order2.setname("Jimmy");
        
        Order order3 =new Order();
        order3.setname("Noah");
        
        Order order4 =new Order("Sam");


        Order order5 =new Order("Sami");




        order2.addItem(item1);
        order3.addItem(item3);
        order4.addItem(item4);



        order4.addItem(item4);//Sam ordered more 2 latte's
        order4.addItem(item4);//Sam ordered more 2 latte's



        // Use this example code to test various orders updates
        System.out.printf("Name: %s\n", order4.getname());
        System.out.printf("Total: %s\n", order3.getOrderTotal());
        System.out.printf("Ready: %s\n", order1.isready());
    }
}
