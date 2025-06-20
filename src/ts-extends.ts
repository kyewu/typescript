
function Vehicle(name: string) {
  this.name = name;
}
Vehicle.prototype.getName = function () {
  return this.name;
};

function Car(name: string, price: number) {
  Vehicle.call(this, name);
  this.price = price;
}

function middleWare(parentClass: any, sonChildClass: any) {
  function Middle() {
    this.constructor = sonChildClass;
  }
  Middle.prototype = parentClass.prototype;
  sonChildClass.prototype = Middle();
}

middleWare(Vehicle, Car);

const car = new (Car as any)('car', 100000);