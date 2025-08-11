var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.calculateArea = function () {
        console.log("chu vi hinh tron : ".concat(2 * 3.14 * this.radius));
    };
    Circle.prototype.calculatePerimeter = function () {
        console.log("dien tich hinh tron : ".concat(3.14 * this.radius * this.radius));
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.calculateArea = function () {
        console.log("chu vi hinh chu nhat : ".concat((this.height + this.width) * 2));
    };
    Rectangle.prototype.calculatePerimeter = function () {
        console.log("dien tich hinh chu nhat ".concat(this.height * this.width));
    };
    return Rectangle;
}());
var circle = new Circle(5);
var rectangle = new Rectangle(3, 4);
circle.calculateArea();
circle.calculatePerimeter();
rectangle.calculateArea();
rectangle.calculatePerimeter();
