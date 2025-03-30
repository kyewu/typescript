interface IPerson {
    firstName: string;
    lastName: string;
}

function greeter(person: IPerson) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };
greeter(user); // Hello, Jane User
console.log(greeter(user)); // Hello, Jane User
// greeter({firstName: "Jane", lastName: "User"}); // Hello, Jane User