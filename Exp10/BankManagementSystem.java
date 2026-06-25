

abstract class BankAccount {
    // Encapsulation: private data members
    private int accountNumber;
    private String accountHolderName;
    private double balance;
    // Constructor
    public BankAccount(int accountNumber, String accountHolderName, double balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    // Getters and Setters
    public int getAccountNumber() {
        return accountNumber;
    }
    public void setAccountNumber(int accountNumber) {
        this.accountNumber = accountNumber;
    }
    public String getAccountHolderName() {
        return accountHolderName;
    }
    public void setAccountHolderName(String accountHolderName) {
        this.accountHolderName = accountHolderName;
    }
    public double getBalance() {
        return balance;
    }
    public void setBalance(double balance) {
        this.balance = balance;
    }
    // Deposit Method
    public void deposit(double amount) {
        balance += amount;
        System.out.println(amount + " deposited successfully.");
    }
    // Display Account Details
    public void displayDetails() {
        System.out.println("Account Number : " + accountNumber);
        System.out.println("Account Holder : " + accountHolderName);
        System.out.println("Balance        : " + balance);
    }
    // Abstract Method (Abstraction)
    abstract void calculateInterest();
}
// SavingsAccount Class
class SavingsAccount extends BankAccount {
    private double interestRate = 5.0;
    // Constructor
    public SavingsAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }
    // Implement abstract method
    @Override
    void calculateInterest() {
        double interest = (getBalance() * interestRate) / 100;
        System.out.println("Savings Account Interest : " + interest);
    }
}
// CurrentAccount Class
class CurrentAccount extends BankAccount {
    private double interestRate = 2.0;
    // Constructor
    public CurrentAccount(int accountNumber, String accountHolderName, double balance) {
        super(accountNumber, accountHolderName, balance);
    }
    // Implement abstract method
    @Override
    void calculateInterest() {
        double interest = (getBalance() * interestRate) / 100;
        System.out.println("Current Account Interest : " + interest);
    }
}
// Main Class
public class BankManagementSystem {
    public static void main(String[] args) {
        // Create Savings Account Object
        SavingsAccount sa = new SavingsAccount(987654321, "Ranjan", 500000);
        System.out.println("\n\n");
        System.out.println("----- Savings Account -----");
        sa.displayDetails();
        sa.deposit(2000);
        System.out.println("Updated Details:");
        sa.displayDetails();
        sa.calculateInterest();
        // Create Current Account Object
        CurrentAccount ca = new CurrentAccount(987564321, "Prahallad", 1000000);
        System.out.println("\n----- Current Account -----");
        ca.displayDetails();
        ca.deposit(3000);
        System.out.println("Updated Details:");
        ca.displayDetails();
        ca.calculateInterest();
        System.out.println("\n\n");
    }
}