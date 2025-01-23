console.log('hi');
numberString = "12"*'8'
changeNumber= Number(numberString)
console.log(changeNumber)
console.log(typeof changeNumber)//typeof(number)//is also working


const numinPKR = 10000000;
console.log(numinPKR.toLocaleString('en-PK'))
console.log('hello ')

const pi = Math.round(22/7)
console.log(pi)

// let mydate = new Date()
// console.log(mydate.toString())
// console.log(mydate.toLocaleDateString())
// console.log(mydate.toISOString())
// console.log(mydate.toTimeString().toUpperCase())
// console.log(mydate.getTime(' ').toString())
// // console.log(mydate.getTime(' ').toString())
let myDateNow = Date.now()

console.log(myDateNow.toString())


let getDay = new Date()
console.log(getDay.getMonth()+1)




//learn array 
let array = new Array(1,2,3,4,'rasheed',Boolean,true,false)
array.push(8)
array.push(9)
console.log(array)
array.pop()
console.log(array)
array.unshift('rasheed1')
console.log(array)
array.shift()
console.log(array)

//slice AND SPLICE 
let pracArr = [1,2,3,4,5,6,true]
let printArr = pracArr.slice(0,4)//print 0 to 3 0<4 //like this 
console.log(printArr)
let prinSplice = pracArr.splice(0,4)//splice print 0 to 4  0<=4 like this 
console.log(prinSplice)














//FUnction 
function firstFunc(){
  return `here is my life first function `
}
console.log(firstFunc())

//function with object ooops {}
const student = {
  name : 'rasheed',
  id : 1234,
  class :10+'th' ,
  rollNo:9010,
}
console.log(student.class)
function students(students2){
  return `hello ${students2['name']} your roll nm is ${students2.rollNo}. and ur class ${students2.class}`
}

console.log(students2 = students({
  name : 'hittesh',
  rollNo : 9010,
  class :10+'th'
}))
for (let i = 0; i <10; i++) {
  console.log(i)
  for(let j=0;j<=10;j=j+1){
    console.log(i+ '*',j,'=',1*j);
  }
  
}
//code from index js
//For loop
for(let i = 0;i<=3;i=i+2){
  // i++;
  console.log(i);
  for(let j = 0;j<=3;j++){
    console.log(`${i}*${j}=${i*j}`);
  }
}
//while
let arr = 1
while(arr<=11){
  console.log(arr);
  arr=arr+2;
}
//for loop with array
let myNewArray = ['flash','batman','supperman','spiderman','blackwidow'];
let index = 0;
for(let index=0 ;index< myNewArray.length;index++){
  console.log('My fav super person is ',myNewArray[index]);
  if (index ===1) {
    console.log('Continue detected a 2');
    
    continue
  }

}



//itterate For of loop in javascript 
let newArr = ['rasheed','rashid','arshad'];
index = 0;
for (const i of newArr) {
  console.log(`run ${i}`);
}
//iterate For Of Loop in javascript
let strArr = ('rasheed')
for (const j of strArr) {
  console.log(`each char of ${strArr} ${j}`);
  
}
//foreach Loop in python 
let CodingArr = ['rasheed','rubby','python','javascript'];
CodingArr.forEach((item,index,arr)=>{
  console.log(index,item,'arris',arr)
})


//forEach loop with arrayobject
let myCoding = [{
  languageName : 'javascript',
  fileNAme : 'js',
  },
{
  languageName : 'Python',
  fileNAme : 'PY',

},{
  languageName : 'cSharp',
  fileNAme : 'c#',
}]
myCoding.forEach((item)=>{
  console.log(item.fileNAme);
})
let idxArr = [0,1,2,3,4,'rasheed']
console.log(idxArr[5])