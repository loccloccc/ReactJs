abstract class Shape{
    name:string;
    constructor(name:string){this.name=name}
    getName():void{
        console.log(`ten : ${this.name}`);
    }
    abstract getSize():void;
}
class Rectangle extends Shape{
    width:number;
    height:number;
    constructor(name:string,width:number,height:number){
        super(name)
        this.width =width,
        this.height = height
    }
    getSize(): void {
        console.log(`ket qua : ${this.height * this.width}`);
    }
}
const a = new Rectangle("Loc",2,3)
a.getName()
a.getSize()