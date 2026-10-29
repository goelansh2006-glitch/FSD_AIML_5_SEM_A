class bank{
    float balance = 10000.0f;
    synchronized void withdraw(float amount){
        System.out.println(Thread.currentThread().getName()+" Currently withdrawing money = "+ amount);
        if(balance>=amount){
            balance=balance-amount;
            System.out.println(Thread.currentThread().getName()+" Current Balance = "+(balance-amount));
        }
        else{
            System.out.println(Thread.currentThread().getName()+" insufficient Balance");
        }
    } 
}
class Mythread extends Thread{
    bank b;
    float amount;
    Mythread(bank b,float amount,String name){
        super(name);
        this.b = b;
        this.amount = amount;
    }
    @Override
    public void run(){
        b.withdraw(amount);
    }
}
public class bankEx{
    public static void main(String args[]){
        bank b = new bank();
        Mythread t1 = new Mythread(b,7000.0f,"A");
        Mythread t2 = new Mythread(b,6000.0f,"B");
        t1.start();
        t2.start();
    }
}

//OUTPUT - 

/*
A Currently withdrawing money = 7000.0
A Current Balance = -4000.0
B Currently withdrawing money = 6000.0
B insufficient Balance
*/