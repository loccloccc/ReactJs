var MemberUser = {
    name: "Nguyen Van A",
    age: 20,
    employee: "EMP001",
    department: "Ke toan"
};
function printStaffMember(staff) {
    console.log("Nhan vien : ".concat(staff.name, " (").concat(staff.age, " tuoi ) , Ma nhan vien : ").concat(staff.employee, " - Phong : ").concat(staff.department));
}
printStaffMember(MemberUser);
