
class BankAccount:

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


class User:		# here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account = BankAccount(int_rate=0.02, balance=0)
    # adding the deposit method
    def make_deposit(self, amount):	# takes an argument that is the amount of the deposit
    	self.account.balance.deposit(amount)	# the specific user's account increases by the amount of the value received
    def make_withdrawal(self, amount):
        self.account.balance.withdraw(amount)
    def display_user_balance(self):
        print(self.account.balance)
    def  transfer_money(self, other_user, amount):
        self.account.balance.withdraw(amount)
        other_user.account.balance.deposit(amount)

