//import fs module
const fs = require('fs');

//write method that will accept a command line argument and use it to create a text file and write to it. 
// If no errors, print Done!

// const generatePage = require(".Unsolved/message");
// const text =generatePage(name);

fs.writeFile("log.txt", process.argv[2],function(err){
    if (err){
         return console.log(err)
    } 
    console.log("Done!")
});

fs.readFile('log.txt','utf8', function(error,data){
    if(error){
        return console.log(error);
    }
    console.log(data);
})