var Employee = /** @class */ (function () {
    function Employee(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    Employee.prototype.printInfo = function () {
        console.log("Nhan vien : ".concat(this.name, " lam viec tai cong ty : ").concat(this.company, " co SDT : ").concat(this.phone));
    };
    return Employee;
}());
var member = new Employee("Dung", "A", "0123456789");
member.printInfo();
