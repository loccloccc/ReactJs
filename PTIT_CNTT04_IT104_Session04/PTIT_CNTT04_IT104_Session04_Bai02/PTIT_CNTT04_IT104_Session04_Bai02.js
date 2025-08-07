var soce = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
var sum = soce.reduce(function (a, b) { return a + b; }, 0);
console.log("Diem trung binh : ".concat((sum / soce.length).toFixed(2)));
