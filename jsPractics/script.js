 const sum = (a) => {
    let sum;    
    const innerFunc = (b) =>{
       
      return sum = a+b;
    }
    return innerFunc;
 }

 let sum2 = sum(10)(20);
 let sum3 = sum(5)(15);


 console.log(sum2, sum3)


 const counter = () => {
  let count = 1;
  return function (){
    return count++;
  }
 }

 let counter1 = counter();
 console.log(counter1())
 console.log(counter1())
 console.log(counter1())