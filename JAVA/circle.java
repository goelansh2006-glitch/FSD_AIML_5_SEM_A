public class circle {
    private float radius;
    private float area;
    final float pi=3.14f;
    circle(){
        radius=0.0f;
    }
    circle(float r){
        radius=r;

    }
    void display(){
        System.out.println("radius="+radius);
        System.out.println("Area="+area);
    }
    void calcArea(){
        area=pi*radius*radius;
    }

}