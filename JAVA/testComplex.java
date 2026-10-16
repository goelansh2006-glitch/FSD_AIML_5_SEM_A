public class testComplex{
    public static void main(String[] arg){
        Complex c1,c2,c3;
        c1 = new Complex();
        System.out.println("Address:"+c1);
        c2 = new Complex(real: 5,imaginary: 6);
        System.out.println("Address:"+c2);
        c3 = new Complex(c2);
        System.out.println("Address:"+c3);
        c1.display();
        c2.display();
        c3.display();
        c1.addComplex(c2,c3);
        System.out.println("AFTER ADDItION: ");
        c1.display();
        c1.mulComplex(c2,c3);
        System.out.println("AFTER MULTIPLICAtION: ");
        c1.display();
    }
}