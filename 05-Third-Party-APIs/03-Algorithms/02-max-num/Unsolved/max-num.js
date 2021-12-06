// Write code to return the largest number in the given array

var maxNum = function(arr) {
    let large=0;
    // let slarg;
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>large){
            large = arr[i];
            console.log(large);
        }
    }
    return large;

};
