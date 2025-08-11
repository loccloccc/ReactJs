var Book = /** @class */ (function () {
    function Book(id, title, author, stock, status) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.stock = stock;
        this.status = status;
    }
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(id, name, contact, status) {
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBook = [];
        this.status = status;
    }
    return Member;
}());
var LendedBook = /** @class */ (function () {
    function LendedBook(memberId, bookId, dueDate) {
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate = dueDate;
    }
    return LendedBook;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("them thanh cong");
    };
    Library.prototype.showBooks = function () {
        if (this.books.length === 0) {
            console.log("thu vien rong");
            return;
        }
        this.books.forEach(function (e) {
            console.log(" ".concat(e.id, ". Ten tac pham ").concat(e.title, "  Tac gia: ").concat(e.author, " | SL: ").concat(e.stock, " | Trang thai: ").concat(e.status));
        });
    };
    return Library;
}());
var library = new Library();
library.addBook(new Book(1, "De Men", "To Hoai", 3, true));
library.addBook(new Book(2, "Harry Potter", "J.K. Rowling", 5, false));
library.showBooks();
