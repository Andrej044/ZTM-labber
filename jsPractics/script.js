//practics clousers, carrying
const sum = (a) => {
    let sum;    
    const innerFunc = (b) =>{
       
      return sum = a+b;
    }
    return innerFunc;
 }

 let sum2 = sum(10)(20);
 let sum3 = sum(5)(15);
let sumBy10 = sum(10);


 const counter = () => {
  let count = 1;
  return function (){
    return count++;
  }
 }

 let counter1 = counter();


// practics map, filter, reduce


const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames 

const newArray = [];

array.forEach(item => {
  newArray.push(item.username + "!")
})


//Create an array using map that has all the usernames with a "? to each of the usernames

const mapArray = array.map(item => item.username + "!");


//Filter the array to only include users who are on team: red


const filterArray = array.filter(item => {
 return item.team === "red";
} )



//Find out the total score of all users using reduce


const totalScore = array.reduce((accum, item)=>{
  return accum += item.score
}, 0)


// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 2 different types of javascript loops to write this:
const arr = [-1,0,3,100, 99, 2, 99] // should return 100
const arr2 = ['a', 3, 4, 2] // should return 4
const arr3 = [] // should return 0

function biggestNumberInArray(arr) {
    if(arr.length === 0) return 0;
    let maxNumb = arr[0];
    arr.forEach( (item) => {
      maxNumb = maxNumb > item ? maxNumb : item;
    })
    return maxNumb;
}


function biggestNumberInArray2(arr) {
  if(arr.length === 0) return 0;
  let maxNumb = arr[0];
  
  for (item of arr) {
    maxNumb = maxNumb > item ? maxNumb : item;
  }
  return maxNumb;
  
}


// console.log(biggestNumberInArray2(arr));


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {
  let answer;
  for (item in basket) {
    if(item === lookingFor) return item
    else {answer = "this product is not in a basket" }
  }
  return answer
}


// ZTM Challenge

// Question 1
// Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20],
// make a function that organizes these into individual array that is ordered.
// For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591].
// Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const messArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

const cleanArrayFunc = (arr) => {
 
  arr.sort((a,b) => a-b); // sorted array from min to max;
 
  const cleanedArray = [];
  let newArr = [];

  for(let i = 0; i < arr.length; i++) {
    
    // create sub array of repiting numbers  
    
    if(arr[i] === arr[i+1]) newArr.push(arr[i]); // check equals numbers in array 
    else {  
      newArr.length > 0 ? cleanedArray.push(newArr):null; 
      cleanedArray.push(arr[i]);
      newArr = []; 
     }
  }
  
  cleanedArray.map( (item, index) => {

    //reorganizate array
    if(Array.isArray(item)){
      item.push(cleanedArray[index+1]);      
      cleanedArray.splice(index+1, 1);
    }
  })
  return cleanedArray
}

console.log(cleanArrayFunc(messArray));