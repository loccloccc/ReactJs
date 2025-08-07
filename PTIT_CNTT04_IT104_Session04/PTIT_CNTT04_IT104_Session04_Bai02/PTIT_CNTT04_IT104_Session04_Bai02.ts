let soce:number[] = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3]
let sum = soce.reduce((a,b)=>a+b,0)
console.log(`Diem trung binh : ${(sum/soce.length).toFixed(2)}`);
