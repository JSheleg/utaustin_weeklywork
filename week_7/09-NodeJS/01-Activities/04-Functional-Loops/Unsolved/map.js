const originalArray = [1, 7, 4, 5, 10];

const doubledArray = originalArray.map((data)=> data * 2);


console.log(originalArray);
console.log(doubledArray);

// 1. A map that triples the `originalArray` and sets the result equal to a new array `tripledArray`
//
// YOUR CODE HERE
//
const tripledArray = originalArray.map( data => data * 3);
console.log(tripledArray);

// 2. A map that takes the `originalArray` and returns a new array `oddOrEven` containing the text "even" if the number is even and the text "odd" if the number is odd
//
// YOUR CODE HERE
//turnary if/else statment if:else, even:odd, the function true, first result, else second result.
const oddOrEven = originalArray.map(element => (element % 2 === 0 ? "Even" : "Odd"));
console.log(oddOrEven);

// Bonus: Use arrow functions as callbacks!
