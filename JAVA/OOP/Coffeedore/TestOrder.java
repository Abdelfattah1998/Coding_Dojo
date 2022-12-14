import java.util.ArrayList;
public class TestOrder {
    public static void main(String[] args) {
        OrderKiosk kiosk = new OrderKiosk();
        kiosk.addMenuItem("Tea",2.0);
        kiosk.addMenuItem("Milk",4.0);
        kiosk.addMenuItem("mocha",1.5);
        kiosk.addMenuItem("coffee",2.0);
        kiosk.addMenuItem("latte",8);
        kiosk.newOrder();
     }
}