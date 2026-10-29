//Using Thread Class
class thread1 extends Thread{
    public void run(){
        for(int i=0 ; i<=10 ; i++){
            System.out.println(Thread.currentThread().getName()+" "+(i*3));
        }
    }
}
public class threadEx{
    public static void main(String args[]){
        for(int i=0 ; i<=10 ; i++){
            System.out.println("Main Thread: "+(i*3));
        }
        thread1 t1 = new thread1();
        t1.start();
        thread1 t2 = new thread1();
        t2.start();
    }
}

/*
OUTPUT - 

Main Thread: 0
Main Thread: 3
Main Thread: 6
Main Thread: 9
Main Thread: 12
Main Thread: 15
Main Thread: 18
Main Thread: 21
Main Thread: 24
Main Thread: 27
Main Thread: 30
Thread-0 0
Thread-1 0
Thread-0 3
Thread-1 3
Thread-0 6
Thread-1 6
Thread-0 9
Thread-1 9
Thread-0 12
Thread-1 12
Thread-0 15
Thread-1 15
Thread-0 18
Thread-1 18
Thread-0 21
Thread-1 21
Thread-0 24
Thread-1 24
Thread-0 27
Thread-1 27
Thread-0 30
Thread-1 30
*/

//Using Runnable Interface
class thread1 implements Runnable{
    public void run(){
        for(int i=0 ; i<=10 ; i++){
            System.out.println(Thread.currentThread().getName()+" "+(i*3));
        }
    }
}
public class threadEx{
    public static void main(String args[]){
        for(int i=0 ; i<=10 ; i++){
            System.out.println("Main Thread: "+(i*3));
        }
        thread1 t1 = new thread1();
        Thread ob=new Thread(t1);
        ob.start();
        thread1 t2 = new thread1();
        Thread ob2=new Thread(t2);
        ob2.start();
    }
}