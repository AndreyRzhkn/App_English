// //1
// const result = true > false;
// console.log(result);

// //   ----------> true

// const result = typeof !!null;
// console.log(result);

// // -----------> boolan

// //2
// let value = 2000;

// setTimeout(() => {
//   value = 262;
// }, 0);

// const result = value;

// console.log(value); /// ----> 2000

// //3
// const array = [1, 2, 3, 4, 5];
// const result = array.splice(1, 2, 3);
// console.log(result);  ---->  [2 , 3]

// //4
// const a = null && undefined;
// console.log(a); ---> null

// //5
// const arr1 = [1, 2, 3];

// const arr2 = [1, 2, 3];

// const res = arr1 === arr2;
// console.log(res); ---> false

// //6
// const arr = [1, 2, 3];
// let res = 1;

// for (const value of arr) {
//   res *= value;
// }
// console.log(res); //---> 6

// //7
// const arr = [ 1, 2 ,3]
// arr.map((num) => {
//   console.log(typeof num); // - number
//   if (typeof num === "number") return;
//   return num * 2;
// });

// return; --> undefined
// console.log(arr)
// const arr = [ undefined, undefined,undefined]
// --- ?

// function arr(a) {
//     return a*2
// }

// arr(2)

// // Создадим простой объект, чтобы использовать его в качестве контекста

var context = {
  foo: "bar",
  name: "hui",
};
// // Функция, которая возвращает свойство «foo» контекста «this»
function returnFoo() {
  return this.name;
}

// Свойства не существует в текущей области видимости, поэтому undefined
returnFoo(); // => undefined

// // Но если мы свяжем эту функцию с контекстом
var bound = returnFoo.call(context);

// Свойство теперь в области видимости
bound(); // => "bar"


function 
// // Существует несколько способов связывания функции с контекстом
// // Call и apply позволяют вам вызывать функцию с нужным контекстом
// returnFoo.call(context); // => bar
// returnFoo.apply(context); // => bar

// Метод apply () вызывает функцию с указанным значением this и параметрами, предоставленными в виде массива (или объекта, подобного массиву).
// Синтаксис
// func.apply(thisArg, [argsArray])

// 1.2 Function.prototype.call()
// Метод call () вызывает функцию с указанным значением this и отдельно предоставленными параметрами (списком параметров).
// Синтаксис
// fun.call(thisArg, arg1, arg2, ...)

let me = {
  name: "me",
  sayHello: function (age, i) {
    console.log("hello, I am", this.name + " " + age + " " + "years old" + i);
  },
};
let someone = {
  name: "EBLAN",
};
me.sayHello(24);

me.sayHello.apply(someone, [24, 5]); // hello, I am someone 24 years old
me.sayHello.call(someone, 24, 5); // hello, I am someone 24 years old
me.sayHello.bind(someone, 24, 5)(;



/// logica

// const arrayOfMus = [ 1, 2, 3, 4, 5, 6, 7, 8]

// const music = [0]

// const queerySelectorAll ---> item . alt === audio

// onCreateAudio(x, i) {
//     this.audio = new Audio();
//     this.menuEveryBlock.addEventListener("click", () => {
//         this.audio.src = `src/data/${cards[x + 1][i].audioSrc}`;
//         this.audio.play();
//     });
// }

// ----> true

// ---->  boolean

// ----> 2000

///  ----> [ 2,3]

/// ----> null

////-----> false

//-----> 6
