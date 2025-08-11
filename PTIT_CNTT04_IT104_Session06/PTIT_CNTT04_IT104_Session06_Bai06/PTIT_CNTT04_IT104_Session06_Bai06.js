var Student = /** @class */ (function () {
    function Student(id, name) {
        this.id = id;
        this.name = name;
    }
    Student.prototype.getInfo = function () {
        console.log("T\u00EAn h\u1ECDc sinh: ".concat(this.name));
    };
    Student.prototype.getId = function () {
        return this.id;
    };
    return Student;
}());
var allStudents = [];
var Classroom = /** @class */ (function () {
    function Classroom() {
        this.students = [];
    }
    Classroom.prototype.showStudents = function () {
        for (var _i = 0, _a = this.students; _i < _a.length; _i++) {
            var student = _a[_i];
            student.getInfo();
        }
    };
    Classroom.prototype.addStudent = function (student) {
        this.students.push(student);
    };
    Classroom.prototype.filterStudent = function (id) {
        return this.students.find(function (s) { return s.getId() === id; });
    };
    Classroom.prototype.addStudentInClass = function (id) {
        var index = allStudents.findIndex(function (s) { return s.getId() === id; });
        if (index !== -1) {
            var foundStudent = allStudents[index];
            if (foundStudent) {
                this.students.push(foundStudent);
                allStudents.splice(index, 1);
            }
        }
    };
    return Classroom;
}());
allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Bình"));
allStudents.push(new Student(3, "Chi"));
allStudents.push(new Student(4, "Dũng"));
allStudents.push(new Student(5, "Hà"));
allStudents.push(new Student(6, "Lan"));
var class1 = new Classroom();
var class2 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);
console.log("Danh sách lớp 1:");
class1.showStudents();
console.log("Danh sách lớp 2:");
class2.showStudents();
