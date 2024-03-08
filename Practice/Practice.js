// if (2==5) {
//     console.log("LHS=RHS")
// } else {
//     console.log("LHS is not equal to RHS")
// }
 
//Age Limit > 18 - L
//Age Limit > 80 - No L
//Age Limit = 18 - L L
//Age Limit <18 - No L

// var age = 20;

// if (age == 18) {
//     console.log("You are Eligible for Learning License")
// } else {if (age<80 || age>18) {
//     console.log("You are Eligible for License")
// } else {
//     console.log("You are not eligible for License")
// }
    
// }

// for (var i=0; i<100; i++){
//     console.log("Hi")
// }

// var count = 0;
// for (var i=1; i<=10; i++){
//     if(i%2 == 0 ){
//         console.log(i, " -Even")
//     }else{
//         console.log(i, "- Odd")
//     }
// }

// var count = 0;
// for (var i=10; i<=14; i++){
//     if (i % 2 == 1){
//         count += i;


//     }
// }
// console.log(count)

// function Rohit(){
//     console.log("Whatever")
// }

// // Rohit();
// var Value1 = 50;
// var Value2 = 10;

// function Subtraction(){ 
//     console.log(Value1-Value2)
// }

// Subtraction(Value1, Value2);

// function Addition (Value1, Value2){
//     var count = 0
//     for (var i = Value1; i< Value2; i++){
//         if (i % 2 == 1){
//             count += i
//         }
        
//     }
//     console.log(count)
// }
// Addition(2, 7)

// function Factorial (abc){
//     var count = 1;
//     for (var i=abc; i>1 ; i--){
//         count *= i
//     }
//     return count
// }

// const ans = Factorial (5)
// console.log(ans)


// switch (10) {
//     case 2:
//         console.log("2")
//         break;
//         case 5:
//         console.log("5")
//         break;
//         case 10:
//         console.log("10")
//         break;

//     default:
//         break;
// }

// for (var i=0; i<10; i++){
//     console.log(i)
// }

//Print Odd and Even Number from 1 to 10

// for (var i=0; i<=10; i++){
//     if(i % 2 == 0){
//         console.log(i, "- Even")
//     }else{
//         console.log(i, "- Odd")
//     }
// }


//Print Addition of Odd Numbers from 1 -10

function Addition(x, y) {
    count = 0;
    for (var i = x; i<y; i++){
        count += i
    }
}

const count = Addition(1,10)
console.log(count)