function PizzaFactory(crustType, sauceType, cheeses, toppings) {
    var Pizza = {};
 Pizza.crustType = crustType;
 Pizza.sauceType = sauceType;
 Pizza.cheeses = cheeses;
 Pizza.toppings = toppings;
    return Pizza;
}
// var s ;
var s0 = PizzaFactory("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var s1 = PizzaFactory("hand tossed", "marina", ["mozzarella","feta"], ["mushrooms", "olives", "onions"]);
var s2= PizzaFactory("Stuffed Crust", "Buffalo", "provolone", ["tomato", "pepperoni", "pepper"]);
var s3 = PizzaFactory("Cheese Crust Pizza", "Garlic Ranch", "Cheddar", ["mushrooms", "fried onions", "tomato","pepper"]);

s=[s0,s1,s2,s3];
s[4]=PizzaFactory(s[Math.ceil((Math.random *3))].crustType, s[Math.ceil((Math.random *3))].sauceType, s[Math.ceil((Math.random *3))].cheeses, s[Math.ceil((Math.random *3))].toppings);
console.log(s[4]);