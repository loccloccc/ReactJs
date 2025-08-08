class Book{
    private id:number;
    private title:string;
    private author:string;
    constructor(id:number,title:string,author:string){
        this.id = id;
        this.title = title;
        this.author = author;
    }
    getId():number{
        return this.id;
    }
    getTitle():string{
        return this.title;
    }
    getAuthor():string{
        return this.author;
    }
    setTitle(value:string|null){
        if(!value || value.trim() === ""){
            console.log("ten sach khong duoc de trong"); 
            return;
        } 
        this.title = value;
    }
        setAuthor(value:string|null){
        if(!value || value.trim() === ""){
            console.log("ten sach khong duoc de trong"); 
            return;
        }
        this.author = value;
    }
}
class Libray{
    book : Book[];
    constructor(book:Book[]){
        this.book = book;
    }
    display():void{
        this.book.forEach(e => console.log(`ma : ${e.getId()},Ten : ${e.getTitle()} , tac gia : ${e.getAuthor()}`));
    }
}
let b1 = new Book(1,"a","a");
let b2 = new Book(2,"b","b");
let b3 = new Book(3,"c","c");
let b4 = new Book(4,"d","d");
let b5 = new Book(5,"e","e");
let libray = new Libray([b1,b2,b3,b4,b5]);
libray.display();
function updateBook(id:number, libray:Libray):void{
    libray.book.forEach(e => {
            if(e.getId() === id){
                let title:string|null = prompt("nhap ten sach moi");
                e.setTitle(title);
                let author:string|null = prompt("nhap ten tac gia");
                e.setAuthor(author);
            }
        })
}
let id : number = Number(prompt("nhap id sach muon sua : "));

updateBook(id,libray);
libray.display();