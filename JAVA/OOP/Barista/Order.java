import java.util.ArrayList;
        class Order{
            private String name;
            private boolean ready;
            private ArrayList<Item> items=new ArrayList<Item>();
 
            public Order(){
                name="Guest";
                ready=false;
            }

            public Order(String name){
                this.name=name;
            }

            public double getOrderTotal(){
                double sum=0;
                for(Item pric :this.items){
                    sum += pric.priceget();
                }
                return sum;
            }

            public void addItem(Item item){
                this.items.add(item);
            }

            public void getStatusMessage(){
                if(ready){
                    System.out.println("Your order is ready");
                }
                else{
                    System.out.println("Thank you for waiting. Your order will be ready soon.");              
                }
            }

            public String getname(){
                return name;
            }
            public boolean isready(){
                return ready;
            }
            public ArrayList<Item> getitems(){
                return items;
            }


            public void setname(String name){
                this.name=name;
            }
            public void setready(boolean ready){
                this.ready=ready;
            }

            public void display(){
                System.out.println("Customer Name:"+name);
                for(Item pric :this.items){
                    System.out.println(pric.nameget() +" - "+ pric.priceget());
                }
                System.out.println("Total:"+ getOrderTotal());
            }

        } 