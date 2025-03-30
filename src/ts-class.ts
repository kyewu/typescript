class Person {
    name: string = '';
    private age: number = 0; // private: only accessible within the class
    protected gender: string = ''; // protected: accessible within the class and its subclasses
    getName(): string {
        return this.name;
    }

    getAge(): number {
        return this.age;
    }
    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person('Kevin');
console.log(person.name);
// person.age: error,could not access age directly because it is private
console.log(person.getAge())

// 类继承类
class Student extends Person {
   constructor(name: string){
    super(name);
    this.gender = 'male';
   }
   getGender(): string {
    return this.gender; 
   }
}

const student = new Student('bad girl');
console.log(student.name); // bad girl
console.log(student.getGender()); // male

// 1. 类类型接口
interface IFruit {
    name: string;
}

// 类实现接口
class Banana implements IFruit {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Apple implements IFruit {
    constructor(public name: string) {}
}

// 2. 接口继承类
// 接口可以继承类，继承的类的属性和方法也会成为接口的属性和方法
interface IOtherBanana extends Banana {
    color: string;
}

class OtherBanana extends Banana {
    constructor(name: string, public color: string) {
        super(name);
    }
}

const otherBanana: IOtherBanana = new OtherBanana('other banana', 'yellow');
console.log(otherBanana.name); // other banana
console.log(otherBanana.color); // yellow

// 接口还会继承private 和 protected 修饰的属性和方法，但是这个接口只可被这个类或它的子类实现
interface IAnimal {
    name: string;
    age: number;
    getName(): string;
}

class Dog implements IAnimal {
    private numb!: string; // private: only accessible within the class
    protected gender: string = '';
    constructor(public name: string,public age: number) {}
    getName(): string {
        return this.name;
    }
}

interface IKeji extends Dog {
    type: string;
}

class Keji extends Dog implements IKeji {
    constructor(public name: string,public age: number,public type: string) {
        super(name,age);
        this.gender = 'male';
    }

    getName(): string {
        return this.name + this.gender;
    }
}

const keji = new Keji('keji', 1, 'dog');
console.log(keji.name); // keji
console.log(keji.age); // 1
console.log(keji.type); // dog
console.log(keji.getName()); // kejimale
