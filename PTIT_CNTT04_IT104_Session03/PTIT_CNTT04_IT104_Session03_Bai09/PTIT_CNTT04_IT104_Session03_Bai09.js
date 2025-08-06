// Hàm cộng
function sum(a, b) {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return Number(a) + Number(b);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}
// Hàm trừ
function signal(a, b) {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return Number(a) - Number(b);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}
// Nhân
function core(a, b) {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return Number(a) * Number(b);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}
// Chia
function divide(a, b) {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        if (Number(b) === 0)
            return "Không thể chia cho 0";
        return Number(a) / Number(b);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}
// Lũy thừa
function exponential(a) {
    if (!isNaN(Number(a))) {
        return Math.pow(Number(a), Number(a));
    }
    return "Dữ liệu nhập vào không hợp lệ";
}
// Căn bậc hai
function sqrt(a) {
    if (!isNaN(Number(a))) {
        return Math.sqrt(Number(a));
    }
    return "Dữ liệu nhập vào không hợp lệ";
}
// Giai thừa (đệ quy)
function recursive(a) {
    if (a === 0 || a === 1)
        return 1;
    return a * recursive(a - 1);
}
function factorial(a) {
    if (!isNaN(Number(a))) {
        var num = Number(a);
        if (num < 0 || !Number(num))
            return "Chỉ nhận số nguyên dương";
        return recursive(num);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}
// Hàm xử lý khi bấm nút
function handleClick(choice) {
    var a = document.getElementById("numb1").value.trim();
    var b = document.getElementById("numb2").value.trim();
    var reslt = "Lỗi";
    switch (choice) {
        case "+":
            reslt = sum(a, b);
            break;
        case "-":
            reslt = signal(a, b);
            break;
        case "*":
            reslt = core(a, b);
            break;
        case "/":
            reslt = divide(a, b);
            break;
        case "^":
            reslt = exponential(a);
            break;
        case "√":
            reslt = sqrt(a);
            break;
        case "!":
            reslt = factorial(a);
            break;
        default:
            reslt = "Không có phép tính này";
            break;
    }
    var resultDiv = document.getElementsByClassName("resltHTML")[0];
    if (resultDiv) {
        resultDiv.textContent = String(reslt);
    }
    console.log("Kết quả:", reslt);
}
window.click = handleClick;
