// mang chua danh sach sinh vien 
let student = [];
// tao ham them thong ten sinh vien
function add(id, name, age, subject) {
    const newStudent = {
        id: id,
        name: name,
        age: age,
        subject: subject,
    };
    student.push(newStudent);
}
add(1, "loc", 20, [{ subname: "C", score: 5 }, { subname: "D", score: 6 }]);
// ham hien thi thong tin sinh vien
function printS() {
    for (let i = 0; i < student.length; i++) {
        console.log(`${student[i].name}`);
    }
}
printS();
// ham cap nhat sinh vien
function update(id) {
    // kiem tra xem id co ton tai khong
    let checkId = student.forEach((e) => e.id === id);
}
// ham xoa sinh vien
function dele(id) {
    // kiem tra id co ton tai khong roi xac nhan xoa
}
