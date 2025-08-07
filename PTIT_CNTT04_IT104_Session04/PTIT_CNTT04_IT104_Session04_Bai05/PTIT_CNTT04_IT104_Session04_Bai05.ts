type Person = {
    name : string,
    age:number
}
type Employee = {
    employee:string,
    department:string
}
type StaffMenber = Person & Employee;
const MemberUser : StaffMenber = {
    name : "Nguyen Van A",
    age : 20,
    employee : "EMP001",
    department : "Ke toan"
}
function printStaffMember(staff:StaffMenber):void{
    console.log(`Nhan vien : ${staff.name} (${staff.age} tuoi ) , Ma nhan vien : ${staff.employee} - Phong : ${staff.department}`);
}
printStaffMember(MemberUser);