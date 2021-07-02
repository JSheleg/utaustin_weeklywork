// TODO: Create an array with five question objects

var questions = [
    {
        q: "Dogs are cute",
        m: ["yes", "hello", "css"],
        a: "yes"
    },
    {q:"There are 300 days in a year", a: false}, 
    {q:"apples come from the ground", a:false}, 
    {q:"Detroit is in Florida",a:false}, 
    {q:"359 comes after 358",a:true}
];
//target 
//questions[0].q
//question[0].m
//questions[0].a

//loop through questions
//if button text value === questions[i].a good, else wrong answer 
//final score is saved in local storage
//high score: returned from local storage with initials
//get button text value and compare
// TODO: Create a variable to keep track of the score

var score = 0;

// TODO: Iterate over the questions array and display each question in a confirmation box
var True_False = function(){
    for(var i = 0; i < questions.length; i++){
         var answer = confirm(questions[i].q);

        if(answer === true && questions[i].a === 'true') || (answer === false && questions[i].a === 'false'){
            //increase score
            score++;
            alert("Corret");
        }
        else{
            alert("wrong");
        }

        
    }
}

True_False();


// TODO: Check the user's answer against the correct answer

// TODO: Alert the user if they are correct or wrong. Increment the score accordingly

// TODO: At the end of the game, alert the user with the final score
