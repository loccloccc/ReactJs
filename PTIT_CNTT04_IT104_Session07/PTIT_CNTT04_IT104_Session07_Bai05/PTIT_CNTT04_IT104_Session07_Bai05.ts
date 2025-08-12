class Account {
    id:number;
    userName:string;
    private password:string;
    isLogin:boolean;
    role:string;
    constructor(id:number,user:string,pass:string,isLogin:boolean,role:string){
        this.id = id;
        this.userName = user;
        this.password = pass;
        this.isLogin = isLogin;
        this.role = role;
    }
    logIn():void{
        if(this.isLogin==false){
            console.log("dang nhap thanh cong");
        };
    };
    logOut():void{
        if(this.isLogin==true){
            this.isLogin = false;
            console.log(`Dang xuat thanh cong`);
        }
    }
}
class userAcc extends Account{
    status:string;
    constructor(id:number,user:string,pass:string,isLogin:boolean,role:string,status:string){
        super(id,user,pass,isLogin,role);
        this.status = status
    }
    logIn1(): void {
        if(this.status=="active"){
            this.logIn();
            this.isLogin = false;
        }else if(this.status=="banned"){
            console.log("tai khoan bi khoa");
        };
    }
}
let user = new userAcc(1,"duong loc","123456",false,"user","active")
user.logIn1();