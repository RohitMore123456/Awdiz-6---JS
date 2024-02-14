// for (var i = 0; i<11; i+=2){
//      console.log(i)
// }

// for (var i=10; i>=1; i--){
//     console.log(i)
// }

// for (var i=0; i<=10; i++){
//     if (i % 2 == 0) {
//         console.log(i, "- Even")
//     } else {
//         console.log(i, "- Odd")
//     }
// }

// var count = 0
// for (var i = 10; i<= 30; i++){
//     if (i%2 == 1) {
//         count += i
//     }
// }
// console.log(count)

// var count = 0
// for (var i=0; i<=20; i++){
//     if (i%2 == 0)
//     count += i
// }
// console.log(count)

// var value1 = 10;
// var value2 = 20;

// function Rohit(num1,num2){
//      console.log(num1+num2)
// }

// Rohit (value1, value2)

// var myname  ;
// if (myname == undefined){
//     myname = "Rohmo"
//     console.log(myname)
// } else {
//     console.log("Name is undefined")
// }

// var count = 0;
// for (var i=0; i<=10; i++){
//     if (i % 2 == 0)
//     count += i
// }
// console.log(count)

// var count = 0;
// for (var i=34; i<=87; i++){
//     if (i % 2 == 1) {
//         count += i
//     } 
// }

// console.log(count)

// function Addition(value1 , value2) {
//     var count = 0;
//     for (var i=value1; i<= value2; i++){
//         if (i % 2 == 1) {
//             count += i
//         }
//     }
//     console.log(count)
// }

// Addition (34,40)

function Factorial(value) {
var count = value;
for (var i=value - 1; i>1; i--){
    count *= i
}
   return (count)
}

const answer = Factorial (3)
console.log(answer)