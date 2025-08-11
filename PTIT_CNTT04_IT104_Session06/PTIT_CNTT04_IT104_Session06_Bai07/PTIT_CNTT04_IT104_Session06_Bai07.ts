class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getInfo(): void {
        console.log(`Tên học sinh: ${this.name}`);
    }

    getId(): number {
        return this.id;
    }

    setName(newName: string): void {
        this.name = newName;
    }
}

let allStudents: Student[] = [];

class Classroom {
    students: Student[] = [];

    showStudents(): void {
        for (let student of this.students) {
            student.getInfo();
        }
    }

    addStudentInClass(id: number): void {
        let index = allStudents.findIndex(s => s.getId() === id);
        if (index !== -1) {
            let foundStudent = allStudents[index];
            if (foundStudent) {
                this.students.push(foundStudent);
                allStudents.splice(index, 1);
            }
        }
    }

    filterStudent(id: number): Student | undefined {
        return this.students.find(s => s.getId() === id);
    }

    removeStudent(id: number): void {
        let index = this.students.findIndex(s => s.getId() === id);
        if (index !== -1) {
            let removedStudent = this.students[index];
            
            if(removedStudent){
                allStudents.push(removedStudent);
                this.students.splice(index, 1);
                console.log(`Đã xóa học sinh ID: ${id}`);
            }
        } else {
            console.log(`Không tìm thấy học sinh ID: ${id}`);
        }
    }

    editStudent(id: number, newName: string): void {
        let student = this.filterStudent(id);
        if (student) {
            student.setName(newName);
            console.log(`Đã đổi tên học sinh ID ${id} thành ${newName}`);
        } else {
            console.log(`Không tìm thấy học sinh ID: ${id}`);
        }
    }
}

allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Bình"));
allStudents.push(new Student(3, "Chi"));
allStudents.push(new Student(4, "Dũng"));
allStudents.push(new Student(5, "Hà"));
allStudents.push(new Student(6, "Lan"));

const class1 = new Classroom();

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
for (let s of allStudents) {
    s.getInfo();
}


