// Create a constructor function called `Animal` that takes in two parameters `raining` and `noise`
// Include a function called `makeNoise()`
//
// YOUR CODE HERE
function Animal(raining,noise){
    this.raining = raining; 
    this.noise = noise;
        
}

//since it doesn't change, you can pull this function out of Animal
Animal.prototype.makeNoise = function(){
    if(this.raining){
        console.log(this.noise)
    }
}

// Creates `dog` and `cat` objects with `raining` and `noise` properties
let dog = new Animal(true, 'Woof!');
let cat = new Animal(false, 'Meow!');
cat.raining = true;

// Calls the `makeNoise()` methods on the `dog` and `cat` objects
dog.makeNoise();
cat.makeNoise();

// BONUS CODE HERE
