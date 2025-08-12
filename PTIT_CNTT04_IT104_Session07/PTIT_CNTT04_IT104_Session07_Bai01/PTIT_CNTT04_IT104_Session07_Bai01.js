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
var Employee = /** @class */ (function () {
    function Employee(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    Employee.prototype.getPhone = function () {
        return this.phone;
    };
    Employee.prototype.printInfo = function () {
        console.log("ten nhan vien : ".concat(this.name, " , ten cong ty : ").concat(this.company, " , sdt : ").concat(this.phone));
    };
    return Employee;
}());
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(name, company, phone, teamSize) {
        var _this = _super.call(this, name, company, phone) || this;
        _this.teamSize = teamSize;
        return _this;
    }
    Manager.prototype.printInfo = function () {
        console.log("ten nhan vien : ".concat(this.name, " , ten cong ty : ").concat(this.company, " , sdt : ").concat(this.getPhone(), " ,so thanh vien : ").concat(this.teamSize));
    };
    return Manager;
}(Employee));
var a = new Manager("Loc", "FPT", "0123456789", 5);
a.printInfo();
