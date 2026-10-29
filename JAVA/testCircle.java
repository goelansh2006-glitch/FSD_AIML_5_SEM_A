public class testCircle {
     public static void main(String[] args) {
        circle c1 = new circle();
        c1.calcArea();
        c1.display();
        circle c2 = new circle(2.0f);
        c2.calcArea();
        c2.display();
    }
}