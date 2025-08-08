var Vehicle = /** @class */ (function () {
    function Vehicle(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    Vehicle.prototype.display = function () {
        console.log("Ten : ".concat(this.name, " , nam san xuat : ").concat(this.year, " , hang : ").concat(this.company));
    };
    return Vehicle;
}());
var car1 = new Vehicle("toyota", 2014, "aaaa");
var car2 = new Vehicle("yamaha", 2000, "xe may");
car1.display();
car2.display();
