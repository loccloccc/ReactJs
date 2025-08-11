// abstract method : 
// - chi co khai bao va khong co than ham 
// - phai nam trong abstract class
// - lpo con ghi de va viet code no 
// vi du:
abstract class Animal {
    abstract makeSound(): void;
}

class Dog extends Animal {
    makeSound(): void {
        console.log("Woof!");
    }
}
// Method
// - co than ham
// co the nam trong tat ca cac class
// lop con co the ghi de
//vd : 
class Animal {
    move(): void {
        console.log("Moving...");
    }
}