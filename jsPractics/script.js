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