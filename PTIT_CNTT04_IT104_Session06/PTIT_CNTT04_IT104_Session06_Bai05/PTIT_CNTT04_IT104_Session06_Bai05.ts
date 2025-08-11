interface changeSpeed{
    speedUp():void;
    slowDown():void;
    stop():void;
}
class Vehicle implements changeSpeed{
    private speed:number;
    constructor(){this.speed=0}
    speedUp(): void {
        this.speed+=10;
        console.log(`da tang : ${this.speed} toc do`);
    }
    slowDown(): void {
        if(this.speed==0) console.log(`xe da dung lai`);
        else {
            this.speed-=10;
        console.log(`da giam  con : ${this.speed} toc do`);
        }
    }
    stop(): void {
        if(this.speed>0){
            this.speed = 0;
            console.log("toc do la 0");
        }else console.log("xe da dung lai");
    }
}
const vehicle = new Vehicle();
vehicle.speedUp();
vehicle.slowDown();
//vehicle.speedUp();
vehicle.stop();