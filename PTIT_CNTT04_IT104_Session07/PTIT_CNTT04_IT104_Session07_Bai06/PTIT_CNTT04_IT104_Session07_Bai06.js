var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Account = /** @class */ (function () {
    function Account(id, user, pass, isLogin, role) {
        this.id = id;
        this.userName = user;
        this.password = pass;
        this.isLogin = isLogin;
        this.role = role;
    }
    Account.prototype.logIn = function () {
        if (this.isLogin == false) {
            console.log("dang nhap thanh cong");
        }
        ;
    };
    ;
    Account.prototype.logOut = function () {
        if (this.isLogin == true) {
            this.isLogin = false;
            console.log("Dang xuat thanh cong");
        }
    };
    return Account;
}());
var userAcc = /** @class */ (function (_super) {
    __extends(userAcc, _super);
    function userAcc(id, user, pass, isLogin, role, status) {
        var _this = _super.call(this, id, user, pass, isLogin, role) || this;
        _this.status = status;
        return _this;
    }
    userAcc.prototype.logIn1 = function () {
        if (this.status == "active") {
            this.logIn();
            this.isLogin = false;
        }
        else if (this.status == "banned") {
            console.log("tai khoan bi khoa");
        }
        ;
    };
    return userAcc;
}(Account));
var adminAcc = /** @class */ (function (_super) {
    __extends(adminAcc, _super);
    function adminAcc(id, user, pass, isLogin, role) {
        return _super.call(this, id, user, pass, isLogin, role) || this;
    }
    adminAcc.prototype.banUser = function (a, id) {
        var searchId = a.find(function (e) { return e.id === id; });
        if (searchId) {
            searchId.status = "banned";
            console.log("tai khoan ".concat(searchId.userName, " da bi khoa"));
        }
    };
    return adminAcc;
}(Account));
var user1 = new userAcc(1, "duong loc", "123456", false, "user", "active");
var user2 = new userAcc(2, "dung anh", "123456", false, "user", "active");
var user3 = new userAcc(3, "hoang long", "123456", false, "user", "active");
var admin = new adminAcc(99, "admin", "admin123", false, "admin");
var userAll = [user1, user2, user3];
user2.logIn1();
admin.banUser(userAll, 2);
user2.logIn1();
