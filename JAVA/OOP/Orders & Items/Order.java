import java.util.ArrayList;
        class Order{
            String name;
            double total=0;
            boolean ready=false;
            ArrayList<Item> items=new ArrayList<Item>();
            public double findTotal(){
                double sum=0;
                for(Item pric :this.items){
                    sum += pric.price;
                }
                return sum;
            }
            public void addItem(Item item){
                this.items.add(item);
                this.total += item.price;
            }
            
        } 