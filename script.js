// Data types

// Primitive Non-primitiv

// Numbers:
  //let age = 23;

// Strings:
// let color = "Yellow";
// let lastName = "Johnson";

// Booleans
// let x = true;  // x > y true or false
// let y = false;

// BigInt value
// let  value1 =900719925124740998n;  //  (253 - 1) and more than -(253 - 1).
// let yigindi = 900719925124740998n + 1n;
// console.log(yigindi);

// undefined
// let name;
// console.log(name);


//Null
// const number = null;

//Symbol
// const value1 = Symbol('hello');
// const value2 = Symbol('hello');
// console.log(value1 === value2); // false

// let id = Symbol("id");
// let person = {
//     name: "Jack",
//     [id]: 123
// };

// console.log(person); // {name: "Jack", Symbol(id): 123}

// Non-pimitiv

// Object

// const person = {firstName:"John", lastName:"Doe"};
let user = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
}

console.log(
  `id: ${user.id}
   name: ${user.name}
   street: ${user.address.street}
   city: ${user.address.city}
   phone: ${user.phone}
   companyName: ${user.company.name}
`);