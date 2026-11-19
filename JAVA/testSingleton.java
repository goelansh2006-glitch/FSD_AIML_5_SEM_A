class student{
    private String name;
    private int age;
    private static student obj;
    private student(){
        name="abc";
        age=0;
    }
    private student(String name , int age){
        this.name = name;
        this.age = age;
    }
    static student getObject(String name, int age){
        obj = new student(name,age);
        return obj;
    }
}
public class testSingleton {
    public static void main(String[] args){
        student s1 ,s2;
         // s1=new student();
        // s2=new student(name: "Ansh", age: 20);
        s1 = student.getObject(name:"Ansh",age:20);
        s2 = student.getObject();
        System.out.println("s1="+s1);
        System.out.println("s2="+s2);
        if(s1==s2){
            System.out.println("Both objects are same");
        }
        else{
            System.out.println("Both Objects are different");
        }
    }
}
