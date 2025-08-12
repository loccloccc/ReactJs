class Vehicle{
    protected name:string;
    protected speed:number;
    protected id : number;
    constructor(name:string,speed:number,id:number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(slow:number):void{
        return ;
    }
    speedUp(speed:number):void{
        return;
    }
    showSpeed():void{
        console.log(`toc do hien tai : ${this.speed}`);
    }
}
class Bicycle extends Vehicle{
    private gear:number;
    constructor(name:string,speed:number,id:number,gear:number){
        super(name,speed,id);
        this.gear = gear;
    }
    showInfo():void{
        super.showSpeed();
        console.log(`banh xe : ${this.gear}`);
    }
    slowDown(slow:number): void{
        if(this.speed>0){
                this.speed -= slow;
                if(this.speed<=0){
                    this.speed = 0;
                    console.log(`xe da dung lai`);
                }else{
                    console.log(`toc do xe con : ${this.speed}`);
                }
        }else{
            console.log(`xe da dung lai`);
        }
    }
    speedUp(speed:number): void {
        console.log(`toc do xe tang la :${this.speed+=speed} `);
    }
    showSpeed():void{
        console.log(`toc do hien tai : ${this.speed}`);
    }
}
let a = new Bicycle("yamada",10,1,4)
a.showSpeed();
a.slowDown(10);
a.speedUp(10);
a.showInfo();