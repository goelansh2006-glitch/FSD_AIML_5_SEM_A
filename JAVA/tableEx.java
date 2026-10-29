class table{
    synchronized void createTable(int n){
        for(int i=1 ; i<=10 ; i++){
            System.out.println(Thread.currentThread().getName()+" "+n+"*"+i+" "+"="+" "+(i*n));
        }
    }
}
class mythread extends Thread{
    table t;
    int n;
    mythread(table t,int n){
        this.t = t;
        this.n = n;
    }
    public void run(){
        t.createTable(n);
    }
}
public class tableEx{
    public static void main(String args[]){
        table t = new table();
        mythread t1 = new mythread(t, 3);
        mythread t2 = new mythread(t, 5);
        mythread t3 = new mythread(t, 7);
        mythread t4 = new mythread(t, 9);
        mythread t5 = new mythread(t, 11);
        t1.start();
        t2.start();
        t3.start();
        t4.start();
        t5.start();
    }
}

//OUTPUT - 

/*
Thread-0 3*1 = 3
Thread-0 3*2 = 6
Thread-0 3*3 = 9
Thread-0 3*4 = 12
Thread-0 3*5 = 15
Thread-0 3*6 = 18
Thread-0 3*7 = 21
Thread-0 3*8 = 24
Thread-0 3*9 = 27
Thread-0 3*10 = 30
Thread-1 5*1 = 5
Thread-1 5*2 = 10
Thread-1 5*3 = 15
Thread-1 5*4 = 20
Thread-1 5*5 = 25
Thread-1 5*6 = 30
Thread-1 5*7 = 35
Thread-1 5*8 = 40
Thread-1 5*9 = 45
Thread-1 5*10 = 50
Thread-2 7*1 = 7
Thread-2 7*2 = 14
Thread-2 7*3 = 21
Thread-2 7*4 = 28
Thread-2 7*5 = 35
Thread-2 7*6 = 42
Thread-2 7*7 = 49
Thread-2 7*8 = 56
Thread-2 7*9 = 63
Thread-2 7*10 = 70
Thread-3 9*1 = 9
Thread-3 9*2 = 18
Thread-3 9*3 = 27
Thread-3 9*4 = 36
Thread-3 9*5 = 45
Thread-3 9*6 = 54
Thread-3 9*7 = 63
Thread-3 9*8 = 72
Thread-3 9*9 = 81
Thread-3 9*10 = 90
Thread-4 11*1 = 11
Thread-4 11*2 = 22
Thread-4 11*3 = 33
Thread-4 11*4 = 44
Thread-4 11*5 = 55
Thread-4 11*6 = 66
Thread-4 11*7 = 77
Thread-4 11*8 = 88
Thread-4 11*9 = 99
Thread-4 11*10 = 110
*/