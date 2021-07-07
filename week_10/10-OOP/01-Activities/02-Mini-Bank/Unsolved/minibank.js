// =============================================================
// PART 1

function MiniBank(balance) {
  this.balance = balance;

  this.getBalance = function() {
    return this.balance;
  };
    // Add a `setBalance()` function
    // YOUR CODE HERE
    //
  this.setBalance = function(value){
    this.balance = value;
  };
    // Add a `deposit()` function
    // YOUR CODE HERE
    //
  this.deposit = function(value){
    let newBalance = value + this.getBalance();
    this.setBalance(newBalance);
    console.log(`deposit`,value)
  };
    // Add a `withdraw()` function
    // YOUR CODE HERE
  this.withdraw = function(value){
    let postWithdrawBalance = this.getBalance() - value;
    this.setBalance(postWithdrawBalance);
    console.log(`Withdraw`, value)
  };

    this.printBalance = function() {
      console.log(`Balance: ${this.getBalance()}`);
    };
}

// =============================================================
// PART 2

// Create a new `bank` object
let bank = new MiniBank(0);
console.log(bank);

// Print the `bank` balance
bank.printBalance();

// Deposit some money and then print the `bank` balance
bank.deposit(50)
bank.printBalance();
// Withdraw some money and then print the `bank` balance
bank.withdraw(20);
bank.printBalance();