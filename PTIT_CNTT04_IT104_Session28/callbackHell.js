function getDataForAPI1(callback){
    setTimeout(() => {
        console.log("Lay API1 thanh cong");
        callback();
    },1000)
}
function getDataForAPI2(callback){
    setTimeout(() => {
        console.log("API2 thanh cong");
        callback();
    },1000)
}
function getDataForAPI3(callback){
    setTimeout(() => {
        console.log("lay du lieu API3 thanh cong");
        console.log("lay tat ca du lieu thanh cong");
    },1000)
}

function runAllTask() {
    getDataForAPI1(()=> {
        getDataForAPI2(() => {
            getDataForAPI3()
        })
    })
}
runAllTask()