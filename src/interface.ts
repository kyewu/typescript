interface BasePoint {
    x: number;
    y?: number;
    z?: number;
}

interface Point extends BasePoint {
   y?: number;
   z: number;
}

interface Point2 extends BasePoint {
    y?: number;
}

const myPoint: Point = {x: 1, y: 2,z:3};
const myPoint2: Point2 = {x: 1}; // y is optional, so this is valid

// function defination with interface as parameter type and return type:
interface Func {
    (x: number, y: number): number; 
}

const addFunc: Func = (x: number, y: number): number => {
    return x + y;
}

console.log(addFunc(1, 2)); // 3

// 绕开多于属性检查
interface MyType {
    color: string;
    [propName: string]: any; // index signature: [propName: string]: any; or [propName: string]: string; or [propName: string]: number; or [propName: string]: boolean; or [propName: string]: object; or [propName: string]: Array<any>; or [propName: string]: Function; or [propName: string]: any[]
}

const getTypes = (types: MyType) => {
    return `${types.color}`;
}

// type assertion:
getTypes({color: "red", size: 10} as MyType); // red
// index signature:
getTypes({color: "red", size: 10}); // red