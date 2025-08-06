// Hàm cộng
function sum(a: number | string, b: number | string): number | string {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return Number(a) + Number(b);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}

// Hàm trừ
function signal(a: number | string, b: number | string): number | string {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return Number(a) - Number(b);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}

// Nhân
function core(a: number | string, b: number | string): number | string {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        return Number(a) * Number(b);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}

// Chia
function divide(a: number | string, b: number | string): number | string {
    if (!isNaN(Number(a)) && !isNaN(Number(b))) {
        if (Number(b) === 0) return "Không thể chia cho 0";
        return Number(a) / Number(b);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}

// Lũy thừa
function exponential(a: number | string): number | string {
    if (!isNaN(Number(a))) {
        return Math.pow(Number(a), Number(a));
    }
    return "Dữ liệu nhập vào không hợp lệ";
}

// Căn bậc hai
function sqrt(a: number | string): number | string {
    if (!isNaN(Number(a))) {
        return Math.sqrt(Number(a));
    }
    return "Dữ liệu nhập vào không hợp lệ";
}

// Giai thừa (đệ quy)
function recursive(a: number): number {
    if (a === 0 || a === 1) return 1;
    return a * recursive(a - 1);
}

function factorial(a: number | string): number | string {
    if (!isNaN(Number(a))) {
        const num = Number(a);
        if (num < 0 || !Number(num)) return "Chỉ nhận số nguyên dương";
        return recursive(num);
    }
    return "Dữ liệu nhập vào không hợp lệ";
}

// Hàm xử lý khi bấm nút
function handleClick(choice: string): void {
    const a = (document.getElementById("numb1") as HTMLInputElement).value.trim();
    const b = (document.getElementById("numb2") as HTMLInputElement).value.trim();
    let reslt: number | string = "Lỗi";

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

    const resultDiv = document.getElementsByClassName("resltHTML")[0];
    if (resultDiv) {
        resultDiv.textContent = String(reslt);
    }

    console.log("Kết quả:", reslt);
}

(window as any).click = handleClick;
