let phoneBooks = [];
function addCancact(phoneBooks = []) {
    let name;
    do{
        name = prompt("nhap ten :");
    }while(name === "");
    let phone;
    do{
        phone = prompt("nhap so dien thoai : ");
    }while(phone === "" || isNaN(phone) || phone[0] !== "0" || phone.length !== 10);
    let email;
    do{
        email = prompt("nhap email :");
    }while(email === "" || !email.endsWith(".com") || !email.includes("@"));
    phoneBooks.push({name,phone,email});
}
function displayConcact(phoneBooks = [] ) {
    phoneBooks.forEach((element) =>{
        console.log(`ten : ${element.name} , sdt : ${element.phone} , email : ${element.email}`);
    })
}
addCancact(phoneBooks);
displayConcact(phoneBooks)