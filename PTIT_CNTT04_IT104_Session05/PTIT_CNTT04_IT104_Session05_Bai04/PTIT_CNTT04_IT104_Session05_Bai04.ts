class Vehicle{
    public name:string;
    protected year:string;
    private company:string;
    readonly id : number;
    constructor(name:string,year:string,company:string , id:number){
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printInfo():void{
        console.log(`Xe : ${this.name} , san xuat nam ${this.year} , hang : ${this.company} , ma so : ${this.id}`);
    }
}
let car = new Vehicle("Oto","2010","Toyota",1);
car.printInfo();