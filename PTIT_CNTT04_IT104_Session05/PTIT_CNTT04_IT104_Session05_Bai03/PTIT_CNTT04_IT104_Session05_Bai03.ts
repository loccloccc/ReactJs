class Employee{
    public name : string;
    protected company:string;
    private phone:string;
    constructor(name:string,company:string,phone:string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo():void{
        console.log(`Nhan vien : ${this.name} lam viec tai cong ty : ${this.company} co SDT : ${this.phone}`);
    }
}
let member = new Employee("Dung","A","0123456789");
member.printInfo();