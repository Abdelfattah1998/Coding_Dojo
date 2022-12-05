class Card{
    constructor(name,cost){
        this.name=name;
        this.cost=cost;
    }
}

class Unit extends Card{
    constructor(name,cost,magnitude,power){
        super(name,cost)
        this.magnitude=magnitude;
        this.power=power;
    }
    attack(target){
        if( target instanceof Unit ) {
            target.res-=this.power;
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

class Effect extends Card{
    constructor(name,cost,magnitude,stat){
        super(name,cost)
        this.magnitude=magnitude;
        this.stat=stat;
        if(magnitude>0){
            this.text="increase target's "+ stat+" by"+magnitude;
        }
        else{
            this.text="decrease target's "+stat+" by"+ (magnitude*-1);
        }
    }
    attack(target){
        if( target instanceof Unit ) {
            if (this.stat=="resilience"){
                target.res-=this.magnitude;
                console.log(this.text);
            }
            else if(this.stat=="power"){
                target.power-=this.magnitude;
                console.log(this.text);
            }
        } else {
            throw new Error( "Target must be a unit!" );
        }
    }
}

const Red=new Unit("Red Belt Ninja",3,3,4);
const black=new Unit("Black Belt Ninja",4,5,4);
const Algorithm=new Effect("Hard Algorithm",2,3,"resilience");
    Algorithm.attack(Red);
const Rejection=new Effect("Unhandled Promise Rejection",1,-2,"resilience");
    Rejection.attack(Red);
const Pair=new Effect("Pair Programming",3,2,"power");
    Pair.attack(Red);
    black.attack(red);

