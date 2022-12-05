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
class Sensei extends Ninja{
    constructor(name){
        super(name,200)
        this.speed=10;
        this.strength=10;
        this.wisdom=10   
    }
    speakWisdom(){
        console.log("What one programmer can do in one month,I just cant do");
    }

}

const ninja1 = new Ninja("Hyabusa",10);
ninja1.sayName();
ninja1.showStats();


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
// -> "Name: Master Splinter, Health: 200, Speed: 10, Strength: 10"