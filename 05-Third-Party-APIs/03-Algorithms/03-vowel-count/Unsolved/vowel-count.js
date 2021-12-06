// Write code to return the the number of vowels in `str`

var vowelCount = function(str) {
    let count = 0;
    
    // const vowels = ['a','e','i','o','u'];
    
    for(let i = 0; i<str.length; i++){
        var string = str[i].toLowerCase();
        
        if(string === 'a' ||string === 'e' ||string === 'i' ||string === 'o' ||string ==='u'){
            
            count++;
        }
        else{
            console.log("not a vowel");
        }
  
    }

    return count;

    
};
