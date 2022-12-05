class Ninja{
    constructor(name, health){
        this.name=name;
        this.health=health;
        this.speed=3;
        this.strength=3;
    }
    sayName() {
        console.log("My name is",this.name);
    }
    showStats() {
        console.log("My health is "+this.health+",Speed: "+this.speed+",Strength: "+this.strength);
    }
    drinkTea(){
        this.health+=10;
    }
}

const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.showStats();
