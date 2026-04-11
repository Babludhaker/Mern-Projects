// let price = 100;

// function show() {
//   console.log(price); // confusion
//     let price = 200;
// }
// show();
// console.log(price);
// console.log(a);
// var a = 10;

// function add() {
//   console.log(a);
//   var a = 20;
// }
// add();

// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// console.log(1);
// Promise.resolve().then(() => console.log(3));
// console.log(4);

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }
//   return inner;
// }

// const a = outer();
// a();
// a();
// const b = outer();
// b();
// b();
// const user = {
//   login() {
//     console.log("user logged in !");
//   },
// };

// const admin = Object.create(user);
// admin.deleteUser = function () {
//   console.log("delete user ");
// };

// admin.login();
// admin.deleteUser();

// const person1 = { name: "Kanu" };
// const person2 = { name: "Bablu" };

// function greet() {
//   console.log("Hello " + this.name);
// }

// greet.call(person1);

const obj1 = {
  name: "Kanu",
  address: {
    city: "Indore",
  },
};

const obj2 = { ...obj1 };

obj2.name = "Bablu";
obj2.address.city = "Delhi";

console.log(obj2.name); // Kanu ✅
console.log(obj1.name); // Kanu ✅
console.log(obj2.address.city); // Delhi ❌ (changed)
console.log(obj1.address.city); // Delhi ❌ (changed)
