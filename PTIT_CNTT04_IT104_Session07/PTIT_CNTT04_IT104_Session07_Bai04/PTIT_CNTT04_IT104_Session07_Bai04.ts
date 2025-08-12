abstract class Person{
    name:string;
    constructor(name:string){this.name=name};
    displayInfo():void{
        console.log(`${this.name}`);
    }
}
class Student extends Person{
    id:number;
    constructor(name:string,id:number){
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`ma sinh vien : ${this.id} ,ten : ${this.name}`);
    }
}
class Teacher extends Person{
    subject:string;
    constructor(name:string,subject:string){
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`ten giao vien : ${this.name} , mon hoc giang day : ${this.subject}`);
    }
}
let stu = new Student("Duong Loc",1);
let tea = new Teacher("Thay Hai","IT Reacjs")
stu.displayInfo();
tea.displayInfo();