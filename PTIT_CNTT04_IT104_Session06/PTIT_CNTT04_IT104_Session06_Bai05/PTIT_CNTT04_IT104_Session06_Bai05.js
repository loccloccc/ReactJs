var Vehicle = /** @class */ (function () {
    function Vehicle() {
        this.speed = 0;
    }
    Vehicle.prototype.speedUp = function () {
        this.speed += 10;
        console.log("da tang : ".concat(this.speed, " toc do"));
    };
    Vehicle.prototype.slowDown = function () {
        if (this.speed == 0)
            console.log("xe da dung lai");
        else {
            this.speed -= 10;
            console.log("da giam  con : ".concat(this.speed, " toc do"));
        }
    };
    Vehicle.prototype.stop = function () {
        if (this.speed > 0) {
            this.speed = 0;
            console.log("toc do la 0");
        }
        else
            console.log("xe da dung lai");
    };
    return Vehicle;
}());
var vehicle = new Vehicle();
vehicle.speedUp();
vehicle.slowDown();
//vehicle.speedUp();
vehicle.stop();
