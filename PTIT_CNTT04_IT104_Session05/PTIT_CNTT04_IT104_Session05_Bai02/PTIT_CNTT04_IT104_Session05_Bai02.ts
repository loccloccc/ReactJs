class Student {
    id : number;
    age : number;
    email:string;
    constructor(id : number , age:number , email:string){
        this.id=id;
        this.age=age;
        this.email=email;
    }
    display(){
        console.log(`id : ${this.id} , tuoi : ${this.age} , email : ${this.email}`);
    }
}
let student: Student[] = [];
let st1 = new Student(1,20,"a@gmail.com");
let st2 = new Student(2,20,"c@gmail.com");
let st3 = new Student(3,21,"b@gmail.com");
student.push(st1,st2,st3);
student.forEach(e => {
    e.display();
})