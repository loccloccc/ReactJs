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
var Job = /** @class */ (function () {
    function Job(type) {
        this.type = type;
    }
    Job.prototype.printType = function () {
        console.log("cong viec : ".concat(this.type));
    };
    return Job;
}());
var PartimeJob = /** @class */ (function (_super) {
    __extends(PartimeJob, _super);
    function PartimeJob(type, hous) {
        var _this = _super.call(this, type) || this;
        _this.workingHous = hous;
        return _this;
    }
    PartimeJob.prototype.calculateSalary = function () {
        console.log("luong lam part-time : ".concat((300000 * this.workingHous).toLocaleString()));
    };
    return PartimeJob;
}(Job));
var FulltimeJob = /** @class */ (function (_super) {
    __extends(FulltimeJob, _super);
    function FulltimeJob() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FulltimeJob.prototype.calculateSalary = function () {
        console.log("luong full-time la 10.000.000");
    };
    return FulltimeJob;
}(Job));
var partTime = [
    new PartimeJob("Phuc vu", 5),
    new FulltimeJob("Lap trinh web")
];
partTime.forEach(function (e) {
    e.printType();
    e.calculateSalary();
    console.log("------------------");
});
