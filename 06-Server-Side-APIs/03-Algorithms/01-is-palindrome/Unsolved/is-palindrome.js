// Write code that returns true if `str` is a palindrome, and false if `str` is not a palindrome

// var isPalindrome = function(str) {
//     for(var i = 0; i<str.length; i++){
//         if(str[i] !== str[str.length-1-i]){
//             return false;
//         }
//     }
//     return true;
// };

var isPalindrome = function(str) {
    var reversedString = str.split("").reverse().join("");
    console.log(reversedString + " reverseString");
    console.log(str, " original string")

    if (reversedString === str){
        return true;
    }else{
        return false;
    }
}