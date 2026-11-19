class  Account{
    constructor(name, accNo, balance){
        this.name = name;
        this.account_number = accNo;
        this.balance = balance;
    }

    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        if (amount>this.balance){
            console.log("Insufficient balance")
        }
        else {
            this.balance -= amount;
        }

    }
    printDetails(){
        console.log(`${this.name} ${this.account_number} USD ${this.balance} `)
    }
}//objects
let acc1 = new Account("Doe", "555", 345678);
let acc2 = new Account("Anna", "556", 905678);

acc1.deposit(9000)
acc1.printDetails()
acc2.withdraw(18000)
acc2.printDetails()