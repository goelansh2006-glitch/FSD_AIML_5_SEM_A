class A{
    int a;
    A(){
        a=0;
    }
    A(int a){
        this.a=a;
    }
    void display(){
        System.out.println("A="+a);
    }
}

class B extends A{
    int b;
    B(){
        super();
        b=0;
    }
    B(int a,int b){
        super(a);
        this.b=b;
    }
    void display(){
        super.display();
        System.out.println("B="+b);
    }
}
class C extends B{
    int c;
    C(){
        super();
        c=0;
    }
    C(int a,int b,int c){
        super(a,b);
        this.c=c;
    }
    void display(){
        super.display();
        System.out.println("C="+c);
    }
}

public class testinheritance {
     public static void main(String[] args) {
        C ob  =new C(10,11,12);
        A ob1 = new A(12);
        B ob2 = new B(13,14);
        A r;
        r=ob;
        r.display();
        r=ob1;
        r.display();
        r=ob2;
        r.display();
        ob.display();
    }

}