var name = "Rohit Sharma"
var style = "Right hand Batsman.";

console.log("Debutant Player - ",name)
console.log(`The Player is ${name} and his Batting style is ${style}`)

var Array1 = [1,2,3]
var Array2 = [4,5,6]
const Result = Array1.concat(Array2)
console.log(Result)

var Source = ["Proteins", "Carbs", "Fats"]
const Isexist = Source.includes("Aminoacids")
console.log(Isexist)

var Array = [1,2,3]
const Isexists = Array.includes(2)
console.log(Isexists)

var Numbers = [1,2,3,200,5,6]
console.log(Numbers.sort())

var Numbers = [1,2,3,200,5,6]
console.log(Numbers.sort((a,b)=>a - b))
console.log(Numbers.sort((a,b) => b -a))

var data = ["abc","xyz","Lmn"]
console.log(data.join("-"))
console.log(data.join(" "))
console.log(data.join(""))
console.log(data.join())

var String = "The Best Place to Learn"
console.log(String.split(""))
console.log(String.split())

var nums = [1,2,3,4]
console.log(nums.at(0))
console.log(nums.at(5))
console.log(nums.at(3))