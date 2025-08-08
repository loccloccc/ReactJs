var Book = /** @class */ (function () {
    function Book(a, b) {
        this.title = a;
        this.author = b;
    }
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    return Book;
}());
var Libray = /** @class */ (function () {
    function Libray(a) {
        this.book = a;
    }
    Libray.prototype.display = function () {
        this.book.forEach(function (e) { return console.log("Ten : ".concat(e.getTitle(), " , tac gia : ").concat(e.getAuthor())); });
    };
    return Libray;
}());
var b1 = new Book("a", "a");
var b2 = new Book("b", "b");
var b3 = new Book("c", "c");
var b4 = new Book("d", "d");
var b5 = new Book("e", "e");
var libray = new Libray([b1, b2, b3, b4, b5]);
libray.display();
