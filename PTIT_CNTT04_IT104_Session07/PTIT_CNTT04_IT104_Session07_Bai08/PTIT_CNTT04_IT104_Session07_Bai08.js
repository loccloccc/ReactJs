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
    function Account(account, balance, status) {
        this.accountNumber = account;
        this.balance = balance;
        this.history = [];
        this.status = status;
    }
    Account.prototype.deposit = function (money) {
        this.balance += money;
        console.log("nap thanh cong ".concat(money));
        console.log("tai khoang ".concat(this.balance));
        this.history.push("them ".concat(money.toLocaleString(), " vao tai khoan"));
    };
    Account.prototype.withdraw = function (money) {
        if (money > this.balance) {
            console.log("so du trong tai khoan cua ban khong du");
        }
        else {
            if (this.balance - money == 0) {
                console.log("tai khoan ban con 0 VND");
                this.history.push("tai khoan con 0 dong");
            }
            else {
                console.log("rut thanh cong ".concat(money.toLocaleString()));
                console.log("so du con lai trong tai khoan ban : ".concat((this.balance -= money).toLocaleString()));
                this.history.push("rut ".concat(money.toLocaleString(), " ra tai khoan"));
            }
        }
    };
    Account.prototype.showHitory = function () {
        if (this.history.length > 0) {
            console.log("lich su giao dich :");
            this.history.forEach(function (e) { return console.log(e); });
        }
        else {
            console.log("lich su rong");
        }
    };
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(account, balance, status, interestRate) {
        var _this = _super.call(this, account, balance, status) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    return SavingAccount;
}(Account));
var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount(account, balance, status, overdraftLimit) {
        var _this = _super.call(this, account, balance, status) || this;
        _this.overdraftLimit = overdraftLimit;
        return _this;
    }
    CheckingAccount.prototype.withdraw2 = function (money) {
        if (money < this.balance) {
            if (this.balance - money > this.overdraftLimit) {
                this.balance -= money;
                console.log("Tai khoan ban da rut thanh cong ");
                console.log("so du con lai : ".concat(this.balance -= money));
                this.history.push("rut thanh cong");
            }
            else if (this.balance - money == this.overdraftLimit) {
                console.log("khong the ru duoc nua vi da den muc han ");
                this.history.push("rut khong thanh cong");
            }
        }
        else {
            console.log("so du tai khoan khong du");
            this.history.push("ban da rut den gioi han , khong the rut duoc nua");
        }
    };
    return CheckingAccount;
}(Account));
var acount = new CheckingAccount("1234", 150000, "true", 50000);
acount.withdraw2(200000);
acount.showHitory();
