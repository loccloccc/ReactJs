var Student = /** @class */ (function () {
    function Student(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
    Student.prototype.display = function () {
        console.log("id : ".concat(this.id, " , tuoi : ").concat(this.age, " , email : ").concat(this.email));
    };
    return Student;
}());
var student = [];
var st1 = new Student(1, 20, "a@gmail.com");
var st2 = new Student(2, 20, "c@gmail.com");
var st3 = new Student(3, 21, "b@gmail.com");
student.push(st1, st2, st3);
console.log(student);
student.forEach(function (e) {
    e.display();
});
// st1.display();
// st2.display();
// st3.display();
