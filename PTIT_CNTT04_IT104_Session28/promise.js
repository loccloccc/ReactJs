const { error } = require("console");

function getDataFormAPI1() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`lay du lieu tu API 1 tai len giao dien thanh cong`);
            resolve()
        },2000)
    })
}
function getDataFormAPI2() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`lay du lieu tu API 2 tai len giao dien thanh cong`);
            resolve()
        },2000)
    })
}
function getDataFormAPI3() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log(`lay du lieu tu API 3 tai len giao dien thanh cong`);
            resolve()
        },2000)
    })
}
function runAllTask() {
    getDataFormAPI1()
    .then(() => getDataFormAPI2())
    .then(() => getDataFormAPI3())
    .then(() => {console.log("Tat ca da duoc hoan thanh");})
    .catch((error) => {console.log(`loi : ${error}`);})
}
runAllTask();
