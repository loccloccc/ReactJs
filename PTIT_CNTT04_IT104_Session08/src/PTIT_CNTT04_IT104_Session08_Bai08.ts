function partialUpdate<T>(obj:T , update:T):T{
    return {...obj,...update}
}
let obj = {
    name:"Loc",
    age:20,
    job:"Dev"
}
let update = {job : "leader"}
console.log(partialUpdate(obj,update));

