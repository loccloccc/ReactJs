class Book{
    private title:string;
    private author:string;
    constructor(a:string,b:string){
        this.title = a;
        this.author = b;
    }
    getTitle():string{
        return this.title;
    }
    getAuthor():string{
        return this.author;
    }

}
class Libray{
    book : Book[];
    constructor(a:Book[]){
        this.book = a;
    }
    display():void{
        this.book.forEach(e => console.log(`Ten : ${e.getTitle()} , tac gia : ${e.getAuthor()}`));
    }
}
let b1 = new Book("a","a");
let b2 = new Book("b","b");
let b3 = new Book("c","c");
let b4 = new Book("d","d");
let b5 = new Book("e","e");
let libray = new Libray([b1,b2,b3,b4,b5]);
libray.display();
