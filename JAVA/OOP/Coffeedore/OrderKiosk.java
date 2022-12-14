import java.util.ArrayList;
public class OrderKiosk {
    public ArrayList<Items> menu = new ArrayList<Items>();
    public ArrayList<Orders> orders = new ArrayList<Orders>();

    public OrderKiosk(){
        this.menu = new ArrayList<Items>();
        this.orders = new ArrayList<Orders>();
    }

    public void addMenuItem(String name,double price){
        Items item = new Items(name,price);
        this.menu.add(item);
        item.setIndex(menu.indexOf(item));

        

    }
    public void displayMenu(){
       for (Items i :menu){
        System.out.println(i.getIndex() +" "+i.getName() +" -- "+ " $"+i.getPrice() );
       }
    }
    public void newOrder() {
        
        System.out.println("Please enter customer name for new order:");
        String name = System.console().readLine();
        Orders order = new Orders(name);
        this.orders.add(order);
        displayMenu();
        System.out.println("Please enter a menu item index or q to quit:");
        String itemNumber = System.console().readLine();
        while(!itemNumber.equals("q")) {
                    int itemIndex = Integer.parseInt(itemNumber);
                    Items yourOrder = this.menu.get(itemIndex);
                    order.addItems(yourOrder);
                    System.out.println("Please enter a menu item index or q to quit:");
                    itemNumber = System.console().readLine();
         }
         order.display();
        
    }

}