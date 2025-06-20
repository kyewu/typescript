type A = {
  a: string
  b?: number
  c: boolean
}

type RequiredFields<T, K extends keyof T> = {
  [K in keyof T]-?: T[K]
}

function test(a: RequiredFields<A, 'b'>) {
  console.log(a)
}

// test({a: '1', c: true}) // error: b is required
test({a: '1', b: 2, c: true}) // ok/ error: b is required