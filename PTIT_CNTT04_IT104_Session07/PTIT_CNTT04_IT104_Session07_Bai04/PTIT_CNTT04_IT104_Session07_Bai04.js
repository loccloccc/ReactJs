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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    ;
    Person.prototype.displayInfo = function () {
        console.log("".concat(this.name));
    };
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, id) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        return _this;
    }
    Student.prototype.displayInfo = function () {
        console.log("ma sinh vien : ".concat(this.id, " ,ten : ").concat(this.name));
    };
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, subject) {
        var _this = _super.call(this, name) || this;
        _this.subject = subject;
        return _this;
    }
    Teacher.prototype.displayInfo = function () {
        console.log("ten giao vien : ".concat(this.name, " , mon hoc giang day : ").concat(this.subject));
    };
    return Teacher;
}(Person));
var stu = new Student("Duong Loc", 1);
var tea = new Teacher("Thay Hai", "IT Reacjs");
stu.displayInfo();
tea.displayInfo();
