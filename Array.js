
const ages = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32]

// <---------------------------1. Find the sum of all odd numbers.----------------------------------------->

const oddSum = ages.reduce((total,num) => num%2!==0 ? total + num : total,0)
console.log(oddSum)

//<--------------------------- 2. Find the sum of all number at odd indices-------------------------------->

let sum = 0;
for(let i=0;i<ages.length;i++){
    if(i%2!==0){
        sum += ages[i];
    }
}
console.log(sum);

//<------------------------------- Using filter and reduce.------------------------------------------------>

const oddIndicesSum = ages.filter((item,index) => index%2!==0 ).reduce((total,num) => total + num)
console.log(oddIndicesSum)

// <-------------------------------3. Find the biggest number in the array---------------------------------->

const biggestNumber = Math.max(...ages)
console.log(biggestNumber)

// <------------------------------4. Find the number divisible by 10.---------------------------------------->

const divisibleByTen = ages.filter(age => age%10==0 )
console.log(divisibleByTen)

// <--------5. Return an array of numbers where odd numbers are incremented by one and even numbers are decremented by one.-------->
 
const incrementDecrement = ages.map(num => num%2!==0 ? num+1 : num-1)
console.log(incrementDecrement)

// <------------------------------6. Return an object with all even numbers and odd numbers seperately----------->

const oddSum = ages.reduce((total,num) => num%2!==0 ? total + num : total , 0) 
const evenSum = ages.reduce((total,num) => num%2===0 ? total + num : total , 0)
console.log({oddSum , evenSum})

// <---------------------------- 7. Find the number of strings with similar number of characters.-------->

  const input = ["apple", "orange", "mango", "papaya"]

 const sameNumberOfCharacters = (input) => {
     let obj ={} ;
     input.forEach(item => {
         if(obj[item.length]!==1){
             obj[item.length] = 1;
         }else{
            obj[item.length]+=1;
         }
    })
    return obj;
     
 }
 console.log(sameNumberOfCharacters(input))
//output = {5:2,6:2}


// 8.Return an array with strings which have vowels.
//const input = ["Functional"]
// const haveVowels = input.filter( word => word==="a" || word==="e" || word==="i" || word==="o" || word==="u" ? true : false)
// console.log(haveVowels)
// // 9. Return an array of objects with key as items and values as number of characters in one string.

// const input = ["add","bad","dad","lad","mad"]
// const keyValue = [{key:"add",chars:3},{key:"bad",chars:3},{key:"dad",chars:3},{key:"lad",chars:3},{key:"mad",chars:3}]
// const Objects = input.map(items => items = keyValue)

// console.log(Objects)


// <-------------------------Currying function------------------------------->
// a.
const fullName = function(firstName) {
    return function(lastName){
        let result = firstName + " " + lastName;
        return result;
    }
}
 
let dummyName= fullName("Suman")

console.log(dummyName("Ghosh"))
// b.
function add(a) {
    return function(b){
        return function(c){
            return a+b+c;
        }
    } 
}

console.log(add(1)(2)(3))

// <-----------------------------One HomeWork--------------------------->

const increment = num => num+1
const square = num => num*num

const compose = (...functions) => {
  return function(num){
    functions.reduce((reducer,item) => console.log(reducer,item))
    return functions[1](functions[0](num))
  }
}
const incrementThenSquare = compose(increment,square)
console.log(incrementThenSquare(2))