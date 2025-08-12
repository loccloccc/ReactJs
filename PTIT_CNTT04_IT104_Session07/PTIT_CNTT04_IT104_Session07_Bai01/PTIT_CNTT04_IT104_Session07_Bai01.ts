class Employee {
    name:string;
    protected company:string;
    private phone:string;
    constructor(name:string,company:string,phone:string){
        this.name= name;
        this.company = company;
        this.phone = phone;
    }
    getPhone():string{
        return this.phone;
    }
    printInfo():void{
        console.log(`ten nhan vien : ${this.name} , ten cong ty : ${this.company} , sdt : ${this.phone}`);
    }
}
class Manager extends Employee{
    teamSize:number;
    constructor(name:string,company:string,phone:string,teamSize:number){
        super(name,company,phone);
        this.teamSize = teamSize;
    }
    printInfo(): void {
        console.log(`ten nhan vien : ${this.name} , ten cong ty : ${this.company} , sdt : ${this.getPhone()} ,so thanh vien : ${this.teamSize}`);
    }
}
let a = new Manager("Loc","FPT","0123456789",5);
a.printInfo();