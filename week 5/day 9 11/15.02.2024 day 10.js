var array = [1,8,2,3,4,5,6]
const result1 = array.map((num)=> num < 5)
console.log(result1)

var Animals = ['Dog', 'Cat', 'Cheetah']
const Result2 = Animals.push("Lion")
console.log(Result2)
console.log(Animals)

var Mobile = ["Memory card", "Sim Card", "Processor"]
const Output = Mobile.push("Speaker")
console.log("Output", Output)
console.log(Mobile)

var Habits = ["Perseverance","Optimisism","Pessimism"]
Remove = Habits.pop()
console.log(Remove)
console.log(Habits)

var Fruits = ["Banana","Melon","Berries"]
const Result = Fruits.shift()
console.log(Result)
console.log(Fruits)

var Todo = ["Reading","Exercising"]
const result = Todo.unshift("Prayer","Meditation")
console.log(result)
console.log(Todo)

var Habits = ["Perseverance","Optimisism","Pessimism"]
const Ans = Habits.slice(1,2)
console.log(Ans)
const ans = Habits.slice(-1)
console.log(ans)

var Numberss = [1,2,3,4,5,6]
Numberss.splice(1,0,9)
console.log(Numberss)
Numberss.splice(2,1,9)
console.log(Numberss)

