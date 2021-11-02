const coolArray = [1,2,3,4,5]; 
let k = 4; 
// length of the array
console.log("The length of the array is : " + coolArray.length);

// Getting the first element 
console.log("The first element of the arry is: " + coolArray[0]);

// Getting the second element 
console.log("The second element of the arry is: " + coolArray[1]);

// Getting the kth element 
console.log("The second element of the arry is: " + coolArray[k]);

// change the 1st elemnets 
coolArray[0] = 24;
console.log("The new first element of the new array is: " + coolArray);

// changing the second 
coolArray[1] = 25; 
console.log("The new second element of the new array is: "+ coolArray);

// changing the Kth element 
coolArray[k] = -16 ; 
console.log("The new Kth element of the new array is: "+ coolArray);

// appending a new element 
coolArray.push(32);
console.log("The new array is: " + coolArray); 

// deleting an array 
coolArray.pop();
console.log(coolArray);

// prepend an array 
coolArray.unshift(12,11);
console.log("prepend an array: " + coolArray)

// remove the first element 
delete coolArray[0]; 
console.log("Delete the first element: " + coolArray);