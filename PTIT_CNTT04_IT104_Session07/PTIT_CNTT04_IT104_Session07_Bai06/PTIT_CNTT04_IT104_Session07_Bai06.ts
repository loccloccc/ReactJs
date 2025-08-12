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
class adminAcc extends Account{
    constructor(id:number,user:string,pass:string,isLogin:boolean,role:string){
        super(id,user,pass,isLogin,role);
    }
    banUser(a:userAcc[] , id:number):void{
        let searchId = a.find(e => e.id === id);
        if(searchId){
            searchId.status = "banned";
            console.log(`tai khoan ${searchId.userName} da bi khoa`);
        }
    }
}
let user1 = new userAcc(1,"duong loc","123456",false,"user","active")
let user2 = new userAcc(2,"dung anh","123456",false,"user","active")
let user3 = new userAcc(3,"hoang long","123456",false,"user","active")
let admin = new adminAcc(99,"admin","admin123",false,"admin")
let userAll = [user1,user2,user3];
user2.logIn1();
admin.banUser(userAll,2);
user2.logIn1();