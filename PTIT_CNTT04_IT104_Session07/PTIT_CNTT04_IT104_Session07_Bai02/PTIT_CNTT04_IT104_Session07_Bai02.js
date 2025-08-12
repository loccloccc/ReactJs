var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    Vehicle.prototype.slowDown = function (slow) {
        return;
    };
    Vehicle.prototype.speedUp = function (speed) {
        return;
    };
    Vehicle.prototype.showSpeed = function () {
        console.log("toc do hien tai : ".concat(this.speed));
    };
    return Vehicle;
}());
var Bicycle = /** @class */ (function (_super) {
    __extends(Bicycle, _super);
    function Bicycle(name, speed, id, gear) {
        var _this = _super.call(this, name, speed, id) || this;
        _this.gear = gear;
        return _this;
    }
    Bicycle.prototype.showInfo = function () {
        _super.prototype.showSpeed.call(this);
        console.log("banh xe : ".concat(this.gear));
    };
    Bicycle.prototype.slowDown = function (slow) {
        if (this.speed > 0) {
            this.speed -= slow;
            if (this.speed <= 0) {
                this.speed = 0;
                console.log("xe da dung lai");
            }
            else {
                console.log("toc do xe con : ".concat(this.speed));
            }
        }
        else {
            console.log("xe da dung lai");
        }
    };
    Bicycle.prototype.speedUp = function (speed) {
        console.log("toc do xe tang la :".concat(this.speed += speed, " "));
    };
    Bicycle.prototype.showSpeed = function () {
        console.log("toc do hien tai : ".concat(this.speed));
    };
    return Bicycle;
}(Vehicle));
var a = new Bicycle("yamada", 10, 1, 4);
a.showSpeed();
a.slowDown(10);
a.speedUp(10);
a.showInfo();
