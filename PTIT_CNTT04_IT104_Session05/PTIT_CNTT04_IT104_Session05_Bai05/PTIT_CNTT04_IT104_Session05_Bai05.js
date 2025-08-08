var Rectangle = /** @class */ (function () {
    function Rectangle(a, b) {
        this.width = a;
        this.height = b;
    }
    Rectangle.prototype.acreage = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.perimeter = function () {
        return 2 + (this.width + this.height);
    };
    Rectangle.prototype.disPlay = function () {
        console.log("chieu dai : ".concat(this.height, " , chieu rong : ").concat(this.width, " , co chu vi : ").concat(this.perimeter(), " , dien tich : ").concat(this.acreage()));
    };
    Object.defineProperty(Rectangle.prototype, "updateWidth", {
        set: function (value) {
            if (value < 0)
                console.log("Chieu rong khong dung");
            else
                this.width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "updateHeight", {
        set: function (value) {
            if (value < 0)
                console.log("Chieu rong khong dung");
            else
                this.height = value;
        },
        enumerable: false,
        configurable: true
    });
    return Rectangle;
}());
var a1 = new Rectangle(3, 5);
a1.disPlay();
a1.updateHeight = 8;
a1.disPlay();
