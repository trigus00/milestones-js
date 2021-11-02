// variables 
let string1 = "dog";
let string2 = "cat"; 
let string3 = "waffles";
let string4 = "a";
let k = 3 ; 

// string concatination 
console.log(string1 + " & "+ string2);

//determing whether one string may be found within another string
console.log("Does dog appear in string 1 " + string1.includes('dog'));

// length of character 
console.log("The length of the string is "+string3.length);

//uppercase 
console.log(string3.toUpperCase());

//lowercase 
console.log(string3.toLowerCase());

//Get the 1st character in waffles (at index 0)
console.log("The first character of" + string3 + " is " + string3.charAt(0));

//Get the 1st character in waffles (at index 0)
console.log("The second character of" + string3 + " is " + string3.charAt(1));

// The last charater in waffles 
console.log("The last character of" + string3 + " is " + string3.charAt((string3.length)-1));

// The k character for waffles 
console.log("The second character of" + string3 + " is " + string3.charAt(k));

// Adding a to waffles 
console.log("Appending a to "+ string3 + " : " + string3.concat( "" , string4))

// template literals 

let firstname = "Gus"; 

let text = `Hello, ${firstname} !`;

console.log(text);