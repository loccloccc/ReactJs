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
        if(this.history.length>0){
             console.log(`lich su giao dich :`);
            this.history.forEach(e => console.log(e))
        }else{
            console.log(`lich su rong`);
        }
    }
}
class SavingAccount extends Account{
    interestRate : number;
    constructor(account:string,balance:number,status:string,interestRate : number){
        super(account,balance,status);
        this.interestRate = interestRate;
    }
}
class CheckingAccount extends Account{
    overdraftLimit:number;
    constructor(account:string,balance:number,status:string,overdraftLimit : number){
        super(account,balance,status);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw2(money:number): void {
        if(money < this.balance){
            if(this.balance-money > this.overdraftLimit ){
                this.balance-=money;
                console.log(`Tai khoan ban da rut thanh cong `);
                console.log(`so du con lai : ${this.balance-=money}`);
                
                this.history.push(`rut thanh cong`)
            }
            else if(this.balance-money == this.overdraftLimit){
                console.log(`khong the ru duoc nua vi da den muc han `);
                this.history.push(`rut khong thanh cong`)
            }
        }
        else{
            console.log("so du tai khoan khong du");
            this.history.push("ban da rut den gioi han , khong the rut duoc nua");
        }
    }
}
let acount = new CheckingAccount("1234",150000,"true",50000);
acount.withdraw2(200000)
acount.showHitory();