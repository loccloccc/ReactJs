abstract class Animal{
    name:string;
    constructor(name:string){this.name = name};
    abstract makwNoise():void;
    printName():void{
        console.log(`in ten : ${this.name}`);
    }
}
class Cat extends Animal{
    makwNoise(): void {
        console.log(`meo meo`);
    }
}
class Dog extends Animal{
    makwNoise(): void {
        console.log(`go go`);
    }
}
let cat  = new Cat("meo")
let dog = new Dog("dog")
cat.printName();
cat.makwNoise();
dog.printName();
dog.makwNoise();