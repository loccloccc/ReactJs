abstract class Job{
    type:string;
    constructor(type:string){this.type=type}
    printType():void{
        console.log(`cong viec : ${this.type}`);
    }
    abstract calculateSalary():void;
}
class PartimeJob extends Job{
    workingHous:number;
    constructor(type:string,hous:number){
        super(type)
        this.workingHous = hous
    }
    calculateSalary(): void {
        console.log(`luong lam part-time : ${(300000*this.workingHous).toLocaleString()}`);
    }
}
class FulltimeJob extends Job{
    calculateSalary(): void {
        console.log(`luong full-time la 10.000.000`);
    }
}
const partTime:Job[] = [
    new PartimeJob("Phuc vu",5),
    new FulltimeJob("Lap trinh web")
]
partTime.forEach(e => {
    e.printType();
    e.calculateSalary();
    console.log("------------------");
    
})
