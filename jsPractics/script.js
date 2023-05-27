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
  newArray.push(item.username = item.username + "!")
})
