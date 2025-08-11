interface Geometry{
    calculateArea():void;
    calculatePerimeter():void;
}
class Circle implements Geometry{
    private radius:number;
    constructor(radius:number){
        this.radius = radius
    }
    calculateArea(): void {
        console.log(`chu vi hinh tron : ${2*3.14* this.radius}`);
    }
    calculatePerimeter(): void {
        console.log(`dien tich hinh tron : ${3.14 * this.radius * this.radius}`);
    }
}
class Rectangle implements Geometry{
    private width:number;
    private height:number;
    constructor(width:number,height:number){
        this.width = width;
        this.height = height
    }
    calculateArea(): void {
        console.log(`chu vi hinh chu nhat : ${(this.height+this.width)*2}`);
    }
    calculatePerimeter(): void {
        console.log(`dien tich hinh chu nhat ${this.height * this.width}`);
    }
}
const circle = new  Circle(5);
const rectangle = new Rectangle(3,4);
circle.calculateArea();
circle.calculatePerimeter();
rectangle.calculateArea();
rectangle.calculatePerimeter();