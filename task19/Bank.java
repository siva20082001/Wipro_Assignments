package task19;


public abstract class Bank {
    String accNo;
    String custName;
    int custGender;
    String custJob;
    double curBal;

    public Bank(String accNo, String custName, int custGender, String custJob, double curBal) {
        this.accNo = accNo;
        this.custName = custName;
        this.custGender = custGender;
        this.custJob = custJob;
        this.curBal = curBal;
    }

    public abstract double calcBalance();

    public String getAccNo() {
        return accNo;
    }

    @Override
    public String toString() {
        return "Account No: " + accNo + ", Name: " + custName +
               ", Gender: " + (custGender == 1 ? "Male" : "Female") +
               ", Job: " + custJob + ", Balance: RM" + String.format("%.2f", calcBalance());
    }
}

