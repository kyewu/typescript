const teacherInfo: [string, string, number] = ["Mr. X", "Math", 30];

enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

console.log(Direction.Up); // UP
// console.log(Direction[0]); // Error: 0 is not a valid index for enum Direction