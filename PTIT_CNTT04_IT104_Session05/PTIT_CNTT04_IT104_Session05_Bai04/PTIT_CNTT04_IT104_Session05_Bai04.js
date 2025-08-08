var Vehicle = /** @class */ (function () {
    function Vehicle(name, year, company, id) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    Vehicle.prototype.printInfo = function () {
        console.log("Xe : ".concat(this.name, " , san xuat nam ").concat(this.year, " , hang : ").concat(this.company, " , ma so : ").concat(this.id));
    };
    return Vehicle;
}());
var car = new Vehicle("Oto", "2010", "Toyota", 1);
car.printInfo();
