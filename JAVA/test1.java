import java.util.Scanner;

public class test1{
    public static void main(String arg[]){
        int a,b,c;
        Scanner sc;
        sc=new Scanner(System.in);
        System.out.println("Enter the first number: ");
        a=sc.nextInt();
        System.out.println("Enter the second number: ");
        b=sc.nextInt();
        //math m1 = new math();
        System.out.println("Sum: "+math.add(a,b));
        System.out.println("Sum: "+math.sub(a,b));
        System.out.println("Sum: "+math.mul(a,b));
        System.out.println("Sum: "+math.div(a,b));
    }
}
