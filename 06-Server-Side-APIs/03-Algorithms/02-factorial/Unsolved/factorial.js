// Write code to create a function that returns the factorial of `num`

var factorial = function(num) {
    let result =1;
    //factorials never go below 1, so we take from the num value and reduce down to 1. 
    //multiple result by the value of i until i becomes 1.
    for(var i = num; i > 1; i--){
        result = result * i;
        console.log(result);

    }
    return result;
};
