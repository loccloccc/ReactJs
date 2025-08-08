var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
    }
    Book.prototype.getId = function () {
        return this.id;
    };
    Book.prototype.getTitle = function () {
        return this.title;
    };
    Book.prototype.getAuthor = function () {
        return this.author;
    };
    Book.prototype.setTitle = function (value) {
        if (!value || value.trim() === "") {
            console.log("ten sach khong duoc de trong");
            return;
        }
        this.title = value;
    };
    Book.prototype.setAuthor = function (value) {
        if (!value || value.trim() === "") {
            console.log("ten sach khong duoc de trong");
            return;
        }
        this.author = value;
    };
    return Book;
}());
var Libray = /** @class */ (function () {
    function Libray(book) {
        this.book = book;
    }
    Libray.prototype.display = function () {
        this.book.forEach(function (e) { return console.log("ma : ".concat(e.getId(), ",Ten : ").concat(e.getTitle(), " , tac gia : ").concat(e.getAuthor())); });
    };
    return Libray;
}());
var b1 = new Book(1, "a", "a");
var b2 = new Book(2, "b", "b");
var b3 = new Book(3, "c", "c");
var b4 = new Book(4, "d", "d");
var b5 = new Book(5, "e", "e");
var libray = new Libray([b1, b2, b3, b4, b5]);
libray.display();
function deleteBook(id, libray) {
    var index = libray.book.findIndex(function (e) { return e.getId() === id; });
    if (index !== -1) {
        libray.book.splice(index, 1);
        console.log("xoa thanh cong");
    }
    else
        console.log("khong tim thay id : ".concat(id));
}
var id = Number(prompt("nhap id ban muon xoa : "));
deleteBook(id, libray);
console.log("sach sau khi xoa:");
libray.display();
