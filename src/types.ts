// base types
const symbol = Symbol()
console.log(typeof symbol) // symbol

const obj = {}
console.log(typeof obj) // object

console.log(`${typeof null}`) // object
console.log(`${typeof undefined}`) // undefined
console.log(`boolean: ${typeof new Boolean(true)}`) // object
console.log(`number: ${typeof new Number(1)}`) // object
console.log(`string: ${typeof new String('1')}` )// object

// reference types
const arr = [30,50]
console.log(typeof arr) // object

const set = new Set()
console.log(typeof set) // object 

const map = new Map()
console.log(typeof map) // object

const weakMap = new WeakMap()
console.log(typeof weakMap) // object

const weakSet = new WeakSet()
console.log(typeof weakSet) // object

function getAccurateType(arg: any) {
  Object.prototype.toString.call(arg).slice(8, -1)
}

console.log(getAccurateType(arr)) // Array
console.log(getAccurateType(weakSet)) // WeakSet
console.log(getAccurateType(obj)) // Object
console.log(getAccurateType(new Boolean(true))) // Boolean
console.log(getAccurateType(new Number(1))) // Number
console.log(getAccurateType(new String('1'))) // String
console.log(getAccurateType(new Date())) // Date
console.log(getAccurateType(new Error())) // Error
console.log(getAccurateType(new Function())) // Function
console.log(getAccurateType(new RegExp(/123/g))) // RegExp
console.log(getAccurateType(new Map())) // Map
console.log(getAccurateType(new Set())) // Set
console.log(getAccurateType(new WeakMap())) // WeakMap

// instance
class PetDog {
  constructor(public name: string) {
    this.name = name
  }

  getDogType() {
    return 'dog'
  }
}

class PetCat {
  constructor(public name: string) {
    this.name = name
  }

  renameCatName(newName: string) {
    return 'cat ' + newName
  }
}

class Pet {
  type
  constructor(public pet: PetDog | PetCat, public name: string) {
    this.name = name
    if(pet instanceof PetDog) {
      this.type = pet.getDogType()
    }
    if(pet instanceof PetCat) {
      this.name = pet.renameCatName('jjj')
    }
  }
}

console.log(new Pet(new PetCat('cat'), 'jjj').name)