class BankAccount{
    private double checkingbalance;
    private double savingsbalance;
    private static total=0;
    private static count=0;
    public BankAccount(double checkingbalance,double savingsbalance){
        this.count++;
        this.checkingbalance=checkingbalance;
        this.savingsbalance=savingsbalance;
        this.total += savingsbalance+checkingbalance;
    }

    public double getcheckingbalance(){
        return(checkingbalance);
    }


    public double getsavingsbalance(){
        return(savingsbalance);
    }


    public void setcheckingbalance(double checkingbalance){
        this.checkingbalance=checkingbalance;
    }


    public void setsavingsbalance(double savingsbalance){
        this.savingsbalance=savingsbalance;
    }

    public void addtobalance(double amount,boolean checking ){
        if(checking){
            this.checkingbalance += amount;
        }
        else{
            this.savingsbalance += amount;
        }
        total += amount;
    }

    public void withdrawbalance(double amount,boolean checking ){
        if(checking){
            if(this.checkingbalance > amount){
                this.checkingbalance -= amount;
            }
            else{
                System.out.println("Insufficient funds");
            }
        }
        else{
            if(this.savingsbalance > amount){
                this.savingsbalance -= amount;
            }
            else{
                System.out.println("Insufficient funds");
            }
            
        }
        this.total += amount;

    }

    public double getsavingsbalance(){
        return((savingsbalance+checkingbalance));
    }    

    
}