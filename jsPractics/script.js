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
// Use at least 3 different types of javascript loops to write this:
const arr = [-1,0,3,100, 99, 2, 99] // should return 100
const arr2 = ['a', 3, 4, 2] // should return 4
const arr3 = [] // should return 0

function biggestNumberInArray(arr) {

}

function biggestNumberInArray2(arr) {

}

function biggestNumberInArray3(arr) {

}