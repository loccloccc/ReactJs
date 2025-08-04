const user = {
    name : "John",
    age : 25,
    location : {
        city : "HaNoi",
        country : "VietNam"
    },
    contact : {
        email:"john@example.com",
        phone : "0123456789"
    },
    job : {
        title : "Developer",
        company : "Tech Corp"
    }
}
function displayUser(...user){
    user.forEach(e => {
        if(!("contact" in e)){
            e.contact = {
                email : "unknown",
                phone : "unknown"
            }
        }
        if(!("job" in e)){
            e.job = {
                title : "unknown",
                company : "unknown"
            }
        }
        console.log(`${e.name} is ${e.age} years old , lives in ${e.location.city} , ${e.location.country} , works as ${e.job.title} at ${e.job.company} and can be concacted via ${e.contact.email} or ${e.contact.phone}`);
    });
}
displayUser(user)
displayUser({ name: "Anna", age: 30, location: { city: "Da Nang", country: "Vietnam" } });