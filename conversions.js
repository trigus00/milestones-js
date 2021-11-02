// number to string 
number = 1234; 

// new variable to string 
let n = number.toString(); 

// print
console.log("I'm a string:" + n);
console.log(typeof n);

// string to number 
 let s = parseInt(n);
 console.log("I'm a number !!:" + s);
 console.log(typeof s); 

//Convert a string to an array 
let x = 'apples'; 
const myArray = x.split(""); 
console.log("String to array: "+myArray);

// Joining strings 

const myArr = ['one', '--two--', 'three']; 
y = myArr.join()
console.log("One big string: " + y );