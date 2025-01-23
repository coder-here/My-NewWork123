let a = Number(prompt('enter a first number : '));
let b = Number(prompt('enter a second nmber : '));

//Body for background color
document.body.style.backgroundColor = '#212121'
document.body.style.color = '#fff '





if(isNaN(a)||isNaN(b)){
  throw SyntaxError('this is unvalid');
  
}
let sum = Number(a+b)
alert(`ur to tal is ${sum}`)

try {
  console.log('try to multiply ',a*x);
  
} catch (error) {
  console.log('Error of ')
  
}

//Event listener 
// let btn = document.querySelector('btn')
// btn.addEventListener("contextmenu",()=>{
//   alert('u hacked right clicked')
// })
// Select the <btn> element
let btn = document.querySelector('button');
btn.addEventListener('contextmenu',function(){
  alert('ur mess with wrong people')
  btn.innerHTML = 'btn was clicked'
})
btn.addEventListener('keydown',(e)=>{
  console.log(e.key,e.keyCode)
})



//get random number 
function getrandimNumber(){
   let val1 = Math.ceil(0 + Math.random()*255)
   let val2 = Math.ceil(0 + Math.random()*255)
   let val3 = Math.ceil(0 + Math.random()*255)
   let val4 = Math.ceil(0 + Math.random()*255)
   return `rgb(${val1},${val2},${val3},${val4})`

  }




//Eventss bubblink
let grandpa = document.getElementById('container').addEventListener('click',()=>{
  alert('container was clicked Granddad')
})
let dad  = document.getElementById('main-container').addEventListener('click',()=>{
  alert('ur clicked on Main-container Dad')
  
})
let son = document.getElementById('content').addEventListener('click',(e)=>{
  e.stopPropagation()
  alert('ur clicked on son ! ')
})

setInterval(() => {
  document.querySelector('#content').style.background = getrandimNumber()
}, 2000);