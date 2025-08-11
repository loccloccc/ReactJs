class Book{
    id:number;
    title:string;
    author:string;
    stock:number;
    status:boolean;
    constructor(id:number,title:string,author:string,stock:number,status:boolean){
        this.id = id;
        this.title =title;
        this.author = author;
        this.stock =stock;
        this.status = status
    }
}
class Member{
    id:number;
    name:string;
    contact:string;
    lendedBook:string[];
    status:boolean;
    constructor(id:number,name:string,contact:string,status:boolean){
        this.id = id;
        this.name = name;
        this.contact = contact;
        this.lendedBook = [];
        this.status = status;
    }
}
class LendedBook{
    memberId:number;
    bookId:number;
    dueDate:string;
    constructor(memberId:number,bookId:number,dueDate:string){
        this.memberId = memberId;
        this.bookId = bookId;
        this.dueDate=dueDate
    }
}
class Library{
    books :Book[]= [];
    members : Member[] = [];
    addBook(book:Book):void{
        this.books.push(book);
        console.log("them thanh cong");
    }
    showBooks():void{
        if(this.books.length ===0 ) {
            console.log("thu vien rong");
            return;
        }
        this.books.forEach(e => {
            console.log(` ${e.id}. Ten tac pham ${e.title}  Tac gia: ${e.author} | SL: ${e.stock} | Trang thai: ${e.status}`);
        })
    }
}
let library = new Library();
library.addBook(new Book(1, "De Men", "To Hoai", 3, true));
library.addBook(new Book(2, "Harry Potter", "J.K. Rowling", 5, false));
library.showBooks();