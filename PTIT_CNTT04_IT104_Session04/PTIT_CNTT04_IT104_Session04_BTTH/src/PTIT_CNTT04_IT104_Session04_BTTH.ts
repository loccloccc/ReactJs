// thong tin diem 1 mon hoc
type Subject = {
    subname:string,
    score: number|string,
}
//thong tin cua 1 sinh vie
type Student = {
    id : number,
    name : string,
    age : number,
    subject:Subject[]
}
// mang chua danh sach sinh vien 
let student: Student[] = [];
// tao ham them thong ten sinh vien
function add(id:number,name:string,age:number,subject:Subject[]){
    const newStudent = {
        id:id,
        name:name,
        age:age,
        subject:subject,
    }
    student.push(newStudent);
}
add(1,"loc",20,[{subname:"C",score:5},{subname:"D",score:6}])
// ham hien thi thong tin sinh vien
function printS():void{
    for(let i = 0 ; i < student.length ; i++){
        console.log(`${student[i].name}`);
    }
}
printS();
// ham cap nhat sinh vien
function update(id:number){
    // kiem tra xem id co ton tai khong
    let checkId = student.forEach((e) => e.id === id);
    
    
}
// ham xoa sinh vien
function dele(id:number){
    // kiem tra id co ton tai khong roi xac nhan xoa
}