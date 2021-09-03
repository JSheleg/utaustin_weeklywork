// Linear Approach

// if num <= 2
//   return 1 (the first two numbers in sequence)

// create new array with [1, 1]

// loop from i = 2 to num
//   num[0] + num[1] = num[2]
//   num[1] + num[2] = num[3]

// return last item in array
//array to hold numbers


const linear = num => {

  //   let arr = [1,1,]
  //  for(let i = 2;i<=num; i++){
  //    arr.push(arr[i-2] + arr[i-1])
  //  }
  //  return arr[num -1];

  let a = 0, b = 1, f = 1;
  for(let i = 2; i <= num; i++){
    f = a + b;
        a = b;
        b = f;
  }
  return f
  
};

const recursive = num => {
  if( num <= 2) return 1;
  return recursive(num -1) + recursive(num -2)
}

console.log(linear(10)); // => 55
console.log(recursive(10));

module.exports =  {linear, recursive}
