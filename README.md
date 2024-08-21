#ATM Machine System
This project simulates basic ATM operations, allowing users to deposit money, withdraw money, and check their balance. The application is a console-based program written in C++.

Features-->
Deposit Money: Users can deposit money into their account.
Withdraw Money: Users can withdraw money from their account if sufficient funds are available.
Check Balance: Users can check their current balance at any time.




Code Explanation-->
Global Variables:-
float balance_amount: This variable holds the current balance of the user.
int new_transaction: This variable is used to decide if the user wants to perform another transaction.
Function: atm_machine_transaction()
This function is the core of the ATM simulation, providing options to the user and executing their chosen transactions.

Case 1: Deposit money.
The user is prompted to enter the amount they wish to deposit.
The amount is added to the balance_amount.
The user is then asked if they want to perform another transaction.

Case 2: Withdraw money.
The user is prompted to enter the amount they wish to withdraw.
The program checks if the balance_amount is sufficient.
If sufficient, the amount is subtracted from the balance_amount.
If not, the user is informed of insufficient funds and asked if they want to perform another transaction.

Case 3: Check balance.
The current balance (balance_amount) is displayed.
The user is asked if they want to perform another transaction.

Main Function
The main() function starts the simulation by calling the atm_machine_transaction() function.
After the transactions are complete, a "Thank you for the visit!" message is displayed.

Notes-->
This program is a basic simulation and does not involve any real financial transactions.
The program uses recursion for handling multiple transactions, so ensure that the input is provided correctly to avoid infinite loops.
