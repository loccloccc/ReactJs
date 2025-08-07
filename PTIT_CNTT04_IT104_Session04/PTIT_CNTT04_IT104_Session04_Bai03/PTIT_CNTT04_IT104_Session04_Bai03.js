var Student = {
    name: "Nguyen Van A",
    age: 20,
    email: "a@gmail.com"
};
function render(s) {
    console.log("Ten toi la ".concat(s.name, " , toi").concat(s.age, " tuoi , email ").concat(s.email));
}
render(Student);
