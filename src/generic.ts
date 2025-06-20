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

class Order {
  orderId!: number
  orderNum!: number
}

// type OrderIdType = Order['orderId']
// type OrderInstanceType = keyof Order 
type InstancePropKeys<T> = keyof T
type OrdPropKeys = InstancePropKeys<Order>
let odk = <OrdPropKeys>'orderId'

type obj = { username: 'kavi', age: 234}
let a: keyof obj = 'username' // keyof Obj -> 'username' | 'age'
type ObjKeysType = keyof obj
let b: ObjKeysType = 'username'
function getValue<T extends obj, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key]
}

getValue<{ username: 'kavi', age: 234 }, 'username'>({ username: 'kavi', age: 234 }, 'username') // 'kavi'>