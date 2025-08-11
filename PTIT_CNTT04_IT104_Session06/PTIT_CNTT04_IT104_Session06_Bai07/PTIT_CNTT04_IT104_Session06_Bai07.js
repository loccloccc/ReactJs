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
    Student.prototype.setName = function (newName) {
        this.name = newName;
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
    Classroom.prototype.filterStudent = function (id) {
        return this.students.find(function (s) { return s.getId() === id; });
    };
    Classroom.prototype.removeStudent = function (id) {
        var index = this.students.findIndex(function (s) { return s.getId() === id; });
        if (index !== -1) {
            var removedStudent = this.students[index];
            if (removedStudent) {
                allStudents.push(removedStudent);
                this.students.splice(index, 1);
                console.log("\u0110\u00E3 x\u00F3a h\u1ECDc sinh ID: ".concat(id));
            }
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y h\u1ECDc sinh ID: ".concat(id));
        }
    };
    Classroom.prototype.editStudent = function (id, newName) {
        var student = this.filterStudent(id);
        if (student) {
            student.setName(newName);
            console.log("\u0110\u00E3 \u0111\u1ED5i t\u00EAn h\u1ECDc sinh ID ".concat(id, " th\u00E0nh ").concat(newName));
        }
        else {
            console.log("Kh\u00F4ng t\u00ECm th\u1EA5y h\u1ECDc sinh ID: ".concat(id));
        }
    };
    return Classroom;
}());
// Khởi tạo dữ liệu
allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Bình"));
allStudents.push(new Student(3, "Chi"));
allStudents.push(new Student(4, "Dũng"));
allStudents.push(new Student(5, "Hà"));
allStudents.push(new Student(6, "Lan"));
var class1 = new Classroom();
class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);
console.log("Danh sách lớp 1 ban đầu:");
class1.showStudents();
class1.editStudent(2, "Bình Updated");
class1.removeStudent(1);
console.log("Danh sách lớp 1 sau khi sửa và xóa:");
class1.showStudents();
console.log("Danh sách học sinh chưa vào lớp:");
for (var _i = 0, allStudents_1 = allStudents; _i < allStudents_1.length; _i++) {
    var s = allStudents_1[_i];
    s.getInfo();
}
