// 泛型

// function identityNumber(arg: number): number {
//     console.log(arg);
//     return arg;
// }

// function identityString(arg: string): string {
//     console.log(arg);
//     return arg;
// }

function identity<T>(arg: T): T {
    console.log(arg);
    return arg;
}

identity<number>(1); // 1
identity<string>('1'); // '1'
identity<boolean>(true); // true
identity<object>({ name: 'John' }); // { name: 'John' }

// 妙用
function swapGeneric<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}

const result = swapGeneric<number, string>([7, 'seven']); // ['seven', 7
console.log(result); // ['seven', 7]