// var String = ["Hi My Name is Awdiz I am located in Vashi"]
// var myanswer = {}

// for (var i=0; i<=String.length; i++){
//     if (myanswer[String[i]]=== undefined){
//         myanswer[String[i]] = String[i]
//     }else{
//         myanswer[String[i]]++
//     }
// }
// console.log(myanswer)

let a="Hello ram and mohan ram and",b=""
let count=0
// b=a.split(" ")
a=a.split(" ")

for(i=0;i<a.length;i++)
{
  count=0
  for(j=0;j<a.length;j++)
  {
    if(a[i]==a[j])
    {
      count++
    }
  }
  if(count==1)
  {
    console.log(a[i])
  }
  
}

