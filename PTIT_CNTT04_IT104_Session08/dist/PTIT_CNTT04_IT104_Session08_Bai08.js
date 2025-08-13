function partialUpdate(obj, update) {
    return Object.assign(Object.assign({}, obj), update);
}
let obj = {
    name: "Loc",
    age: 20,
    job: "Dev"
};
let update = { job: "leader" };
console.log(partialUpdate(obj, update));
