class Student {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getInfo(): void {
        console.log(`Ten hoc sinh: ${this.name}`);
    }

    getId(): number {
        return this.id;
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

    addStudent(student: Student): void {
        this.students.push(student);
    }

    filterStudent(id: number): Student | undefined {
        return this.students.find(s => s.getId() === id);
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
}

allStudents.push(new Student(1, "An"));
allStudents.push(new Student(2, "Binh"));
allStudents.push(new Student(3, "Chi"));
allStudents.push(new Student(4, "Dung"));
allStudents.push(new Student(5, "Ha"));
allStudents.push(new Student(6, "Lan"));

const class1 = new Classroom();
const class2 = new Classroom();

class1.addStudentInClass(1);
class1.addStudentInClass(2);
class1.addStudentInClass(3);

class2.addStudentInClass(4);
class2.addStudentInClass(5);
class2.addStudentInClass(6);

console.log("Danh sach lop 1:");
class1.showStudents();

console.log("Danh sach lop 2:");
class2.showStudents();
