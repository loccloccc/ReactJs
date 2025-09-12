
function askForFullNamber(callback) {
    let phone;
    console.log("anh goi cho duy de xin so nhung");
    console.log("doi ti , minh tim so");
    setTimeout(() => {
        console.log("tim thay so roi");
        phone=123456;        
        callback(phone)
    },3000)
}

function processFullNAmeber(sdt){
    console.log(`anh goi cho nhung theo so ${sdt}`);
    
}
askForFullNamber(processFullNAmeber);