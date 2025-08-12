class Account{
    accountNumber:string;
    protected balance:number;
    protected history:string[];
    protected status:string;
    constructor(account:string,balance:number,status:string){
        this.accountNumber = account;
        this.balance = balance;
        this.history = [];
        this.status =status
    }
    deposit(money:number):void{
        this.balance += money;
        console.log(`nap thanh cong ${money}`);
        console.log(`tai khoang ${this.balance}`);
        this.history.push(`them ${money.toLocaleString()} vao tai khoan`)
    }
    withdraw(money:number):void{
        if(money>this.balance){
            console.log(`so du trong tai khoan cua ban khong du`);
        }else{
            if(this.balance-money==0){
                console.log(`tai khoan ban con 0 VND`);
                this.history.push(`tai khoan con 0 dong`)
            }else{
                console.log(`rut thanh cong ${money.toLocaleString()}`);
                console.log(`so du con lai trong tai khoan ban : ${(this.balance-=money).toLocaleString()}`);
                this.history.push(`rut ${money.toLocaleString()} ra tai khoan`)
            }
        }
    } 
    showHitory():void{
        console.log(`lich su giao dich :`);
        this.history.forEach(e => console.log(e))
    }
}
class SavingAccount extends Account{
    interestRate : number;
    constructor(account:string,balance:number,status:string,interestRate : number){
        super(account,balance,status);
        this.interestRate = interestRate;
    }
}
let acount = new SavingAccount("011",100000,"true",1)
acount.deposit(200000);
acount.withdraw(150000);
acount.showHitory();