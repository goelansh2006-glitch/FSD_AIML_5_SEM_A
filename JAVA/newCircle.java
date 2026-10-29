public class newCircle extends circle {
    private float perimeter;
    newCircle(){
        super();
    }
    newCircle(float r){
        super(r);
    }
    void display(){
        super.display();
        System.out.println("Perimeter="+perimeter);

    }

}