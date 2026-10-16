public class Complex{
    int real;
    int imaginary;
    Complex(){
        real=0;
        imaginary=0;
    }
    Complex(int real,int imaginary){
        this.real=real;
        this.imaginary = imaginary;
    }
    Complex(Complex c){
        real = c.real;
        imaginary = c.imaginary;
    }
    void display(){
        System.out.println(real+"+i"+imaginary);
    }
    void addComplex(Complex c1,Complex c2){
        real = c1.real + c2.real;
        imaginary = c1.imaginary + c2.imaginary;
    }
    void mulComplex(Complex c1, Complex c2){
        real = c1.real*c2.real - c1.imaginary*c2.imaginary;
        imaginary = c1.real*c2.imaginary + c2.real*c1.imaginary;
    }
}