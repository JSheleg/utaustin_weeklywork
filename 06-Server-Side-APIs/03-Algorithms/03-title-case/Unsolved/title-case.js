// Write code to create a function takes a string and returns a new string with the first letters of each word capitalized

var titleCase = function(str) {
    let sentence = str.split(" ");
    console.log(sentence);
    var result = [];
    
    for(let i = 0; i<sentence.length; i++){
        var sent = sentence[i].split("");
        console.log(sent);
        sent[0] = sent[0].toUpperCase();
        result.push(sent.join(""));
        console.log(result);
    }

    return result.join(" ");
};
