class Vehicle{

    name : string;
    year:number;
    company:string;
    
    constructor(name:string,year:number,company:string){
        this.name = name;
        this.year = year;
        this.company = company;
    }
    display(){
        console.log(`Ten : ${this.name} , nam san xuat : ${this.year} , hang : ${this.company}`);
    }
}
let car1 = new Vehicle("toyota",2014,"aaaa");
let car2 = new Vehicle("yamaha",2000,"xe may");
car1.display();
car2.display();
