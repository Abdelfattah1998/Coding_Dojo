class BankAccount:
    # don't forget to add some default values for these parameters!


    def __init__(self, int_rate=0.01, balance=0):
        self.int_rate = int_rate
        self.balance = balance
         

    def deposit(self, amount):
        self.balance += amount
        return self 


    def withdraw(self, amount):
        self.balance -= amount
        return self 


    def display_account_info(self):
        print(self.balance)
        return self 


    def yield_interest(self):
        self.balance += self.balance*self.int_rate
        return self 

account1=BankAccount().deposit(1000).deposit(5000).deposit(5300).withdraw(8000).yield_interest().display_account_info()
account2=BankAccount().deposit(8000).deposit(1000).withdraw(1000).withdraw(1000).withdraw(1000).withdraw(1000).yield_interest().display_account_info()


