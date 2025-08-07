type Person = {
    name:string,
    age:number,
    email:string
}
let Student : Person = {
    name:"Nguyen Van A",
    age : 20,
    email:"a@gmail.com"
}
function render(s:Person):void{
    console.log(`Ten toi la ${s.name} , toi${s.age} tuoi , email ${s.email}`);
}
render(Student);