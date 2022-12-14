import java.util.ArrayList;
public class TestOrders {
    public static void main(String[] args) {
        // Menu items
        Item item1 =new Item();
        Item item2 =new Item();
        Item item3 =new Item();
        Item item4 =new Item();
        item1.name="mocha";
        item1.price=2.5;
        item2.name="drip coffee";
        item2.price=1.5;
        item3.name="cappuccino";
        item3.price=3.5;
        item4.name="latte";
        item4.price=4.0;

        // Order variables -- order1, order2 etc.
        Order order1 =new Order();
        order1.name="Cindhuri";

        Order order2 =new Order();
        order2.name="Jimmy";
        
        Order order3 =new Order();
        order3.name="Noah";
        
        Order order4 =new Order();
        order4.name="Sam";

        System.out.println(order1);

        order2.addItem(item1);
        order3.addItem(item3);
        order4.addItem(item4);

        order1.ready=true;//Cindhuri's order is now ready. Update her status.

        order4.addItem(item4);//Sam ordered more 2 latte's
        order4.addItem(item4);//Sam ordered more 2 latte's


        order2.ready=true;//Jimmy’s order is now ready. Update his status.

        // Use this example code to test various orders updates
        System.out.printf("Name: %s\n", order1.name);
        System.out.printf("Total: %s\n", order1.total);
        System.out.printf("Ready: %s\n", order1.ready);
    }
}
