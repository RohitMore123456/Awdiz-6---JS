// //Print Addition of Odd numbers from 10 to 30

// var count = 0
// for (var i = 10; i<=30; i++ ){
//     if (i % 2 == 1)
//     count += i
// } 
// console.log(count)

//Print addition of odd numbers from 10 to 50

// var count = 0
// for (var i= 10; i<= 50; i++){
//     if (i % 2 == 1) 
//         count += i
// }
// console.log(count)

//Q - Addition of even numbers from 50 to 100
// var count = 0
// for (var i=50; i<=100; i++){
//     if(i % 2 == 0)
//     count+= i
// }
// console.log(count)

// var count1 = 1;
// count2 = count1 + 1;
// count2++
// console.log(count2)

// var count = 5;
// count = count-1;
// count--
// count-=
// console.log(count)

// function Awdiz(){
//     console.log("Hello")
// }
// Awdiz()

// var myname = "Hello"
// console.log(myname)

// var value1 = 20;
// var value2 = 30;

// function Myvalue(){
//     console.log(value1+value2)
// }

// Myvalue()

// var value1 = 20;
// var value2 = 50
// function Rohmo(abc,xyz){
//     console.log(abc, xyz)
// }

// Rohmo(value2,value1)

//Print number from 1-10, even number with -even and odd number with - odd

// for (var i=1; i<=10; i++){
//     if (i % 2 == 0) {
//         console.log(i, " - Even")
//     } else {
//         console.log(i, '- Odd')
//     }
// }

//Print Addition of Odd numbers from 1-30

// var count = 0
// for (var i=0; i<=30; i++){
//     if(i % 2 == 1)
//     count += i
// }
// console.log(count)


// function awdiz (){
//     console.log("Hello")
// }
// awdiz()

// function Addition(){
//     var value1 = 10;
//     var value2 = 20;
//     console.log(value1+value2)
// }
// Addition()

// var value1 = 50;
// var value2 = 50;

// function addition (value1, value2){
//     console.log(value1 + value2)
// }

// addition(value1, value2)

// function Rohmo (abc, xyz){
//     console.log(abc +xyz)
// }
// Rohmo (75, 40)

//Q Find addition of odd number from given range

// function addition(value1, value2){
//     var count = 0;
//     for (var i=value1; i<= value2; i++){
//         if (i % 2 == 1) {
//             count += i
//         }
//     }
//     return count;
// }
// const answer = addition (34,38)
// console.log(answer)

//Find factorial of 10

// function fact(value1){
//     var factor = 1
//      for (var i=value1; i>=1; i--){
//         factor*= i
//      }
//      return factor;
// }
// const answer = fact (5)
// console.log(answer)

// var student =  ["virat", "Rohit", "Rahul"];
// console.log(student, "student")
// student.push("Iyer")
// console.log(student)

//q Find the addition of Odd numbers form Given range (34,38)

// function Additionn (value1, value2){
//     var Ans = 0
//     for (var i=value1; i<=value2; i++){
//         if (i % 2 == 0) {
//             Ans += i
//         }
        
//     }
//     console.log(Ans)
// }
// Additionn (2,6)
    
// // Q - (2,6)
// var count = 0
// for (var i=2; i<=6; i++){
//     if(i % 2 == 1)
//     count += i 
// }
// console.log(count)

// function Odd (value1, value2){
//     var count = 0;
//     for (var i=value1; i<= value2; i++){
//         if( i % 2 == 1)
//         count+= i
//     }
//     console.log(count)
// }
// Odd (7,14)

//Q Find the sum of even number from the given range

// function Addition (value1, value2){
//     var count = 0;
//     for (var i = value1; i<= value2; i++){
//         if (i % 2 == 0)
//         count += i
//     }
//     return count;
// }


// const anw = Addition (7,11);
// console.log(anw)

//Q - Find th factorial of 10

// function multiply(value){
//     var count = 1;
//     for (var i= value; i>=1; i-- ){
//         count *= i
//     }
//     return count
// }

// const answ = multiply (10);
// console.log(answ)

// var students = ["Rohit", "Virat", "Rahul"]
// // console.log('students',students.length)
// students.push("Gill", "Jadeja")
// console.log(students)
// console.log(students[2])

// for (var i = 4; i<7; i++){
//     for (var j =11; j<13; j++)
//     console.log(i,j)
// }

// for (var i =10; i <=30; i+= 10){
//     for (var j=20; j<= 40; j+= 10)
//     console.log(i, j)
// }

// var array = [1,2,4,56,7,8,3,2,5,7]
// var Target = 12

// function Findtarget (array, Target){
//     for (var i=0; i<array.length - 1; i++){
//         for(var j=i+1; j<= array.length -1; j++){
//              if(array[i] + array [j] == Target){
//                 console.log(array[i], array[j])
//              }
//         }
//     }
// }

// Findtarget (array, Target)

// Q - is abba is aplindrome or not

var myname = 'abgba'

function Ispalindrome(myname){
    for (var i=0; i<Math.ceil(myname.length/2); i++){
            if (myname[i] !== myname[myname.length - 1 - i]){
                return "Its not a palindrome"
            }
        }
        return "Its a palindrome"
    }

const ans = Ispalindrome (myname)
console.log(ans)