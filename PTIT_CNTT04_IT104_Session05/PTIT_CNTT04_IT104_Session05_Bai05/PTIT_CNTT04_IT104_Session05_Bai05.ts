class Rectangle{
    private width:number;
    private height:number;
    constructor(a:number,b:number){
        this.width = a;
        this.height = b;
    }
    acreage():number{
        return this.width * this.height;
    }
    perimeter():number{
        return 2 + (this.width+ this.height);
    }
    disPlay():void{
        console.log(`chieu dai : ${this.height} , chieu rong : ${this.width} , co chu vi : ${this.perimeter()} , dien tich : ${this.acreage()}`);
    }
    set updateWidth(value:number){
        if(value<0) console.log("Chieu rong khong dung");
        else this.width = value;
    }
    set updateHeight(value:number){
        if(value<0) console.log("Chieu rong khong dung");
        else this.height = value;
    }
}
let a1 = new Rectangle(3,5);
a1.disPlay();
a1.updateHeight = 8;
a1.disPlay();