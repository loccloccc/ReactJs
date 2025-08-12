class Account {
    constructor(id, user, pass, isLogin, role) {
        this.id = id;
        this.userName = user;
        this.password = pass;
        this.isLogin = isLogin;
        this.role = role;
    }
    logIn() {
        if (this.isLogin == false) {
            console.log("dang nhap thanh cong");
        }
        ;
    }
    ;
    logOut() {
        if (this.isLogin == true) {
            this.isLogin = false;
            console.log(`Dang xuat thanh cong`);
        }
    }
}
class userAcc extends Account {
    constructor(id, user, pass, isLogin, role, status) {
        super(id, user, pass, isLogin, role);
        this.status = status;
    }
    logIn1() {
        if (this.status == "active") {
            this.logIn();
            this.isLogin = false;
        }
        else if (this.status == "banned") {
            console.log("tai khoan bi khoa");
        }
        ;
    }
}
let user = new userAcc(1, "duong loc", "123456", false, "user", "active");
user.logIn1();
