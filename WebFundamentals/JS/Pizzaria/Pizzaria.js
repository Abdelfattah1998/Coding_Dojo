function PizzaFactory(crustType, sauceType, cheeses, toppings) {
    var Pizza = {};
 Pizza.crustType = crustType;
 Pizza.sauceType = sauceType;
 Pizza.cheeses = cheeses;
 Pizza.toppings = toppings;
    return Pizza;
}
var s =[0,1,2,3];
 s[0] = PizzaFactory("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
 s[1] = PizzaFactory("hand tossed", "marina", ["mozzarella","feta"], ["mushrooms", "olives", "onions"]);
 s[2]= PizzaFactory("Stuffed Crust", "Buffalo", "provolone", ["tomato", "pepperoni", "pepper"]);
 s[3]= PizzaFactory("Cheese Crust Pizza", "Garlic Ranch", "Cheddar", ["mushrooms", "fried onions", "tomato","pepper"]);

s[4]=PizzaFactory(s[Math.ceil((Math.random() *3))].crustType, s[Math.ceil((Math.random() *3))].sauceType, s[Math.ceil((Math.random() *3))].cheeses, s[Math.ceil((Math.random() *3))].toppings);
console.log(s[4]);