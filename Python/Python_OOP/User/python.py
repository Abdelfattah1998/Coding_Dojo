class User:		# here's what we have so far
    def __init__(self, name, email):
        self.name = name
        self.email = email
        self.account_balance = 0
    # adding the deposit method
    def make_deposit(self, amount):	# takes an argument that is the amount of the deposit
    	self.account_balance += amount	# the specific user's account increases by the amount of the value received

    def make_withdrawal(self, amount):
        self.account_balance -= amount
    def display_user_balance(self):
        print(self.account_balance)
    def  transfer_money(self, other_user, amount):
        self.account_balance -= amount
        other_user.account_balance +=amount

guido = User("Guido van Rossum", "guido@python.com")
monty = User("Monty Python", "monty@python.com")
Abdelfattah=User(email="aaaa.a@a",name="abboud")
# print(guido.name)	# output: Guido van Rossum
# print(monty.name)	# output: Monty Python
Abdelfattah.make_deposit(5)

guido.transfer_money( Abdelfattah, 300)

guido.make_deposit(100)
guido.make_deposit(200)
# monty.make_deposit(50)
# print(guido.account_balance)	# output: 300
# print(monty.account_balance)	# output: 50

# guido.make_withdrawal(250)
# monty.make_withdrawal(10)
guido.display_user_balance()	# output: 50
Abdelfattah.display_user_balance()	# output: 50