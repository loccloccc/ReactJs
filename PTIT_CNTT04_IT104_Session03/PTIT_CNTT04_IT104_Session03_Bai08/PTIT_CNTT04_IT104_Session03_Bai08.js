function sum(a, b) {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return Number(a) + Number(b);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}
function signal(a, b) {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return Number(a) - Number(b);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}
function core(a, b) {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return Number(a) * Number(b);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}
function divide(a, b) {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        if (Number(b) === 0)
            return "Không thể chia cho 0";
        return Number(a) / Number(b);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}
