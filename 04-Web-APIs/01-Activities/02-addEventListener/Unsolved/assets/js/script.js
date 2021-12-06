// TODO: Create a variable to hold the count

var count = 0;

// TODO: Create variables to select the increment button, decrement button and count heading by their respective ids.
var display = document.querySelector("#count");
var increment = document.querySelector("#increment");
var decrement = document.querySelector("#decrement");
// TODO: Create a function that displays the current count on the page
var currentCount =function(){
    document.write(count);
}
// TODO: Create an addEventListener that will increment the count on click
// and calls the function to display the current count

increment.addEventListener('click', function(){
    count++;
    display.innerHTML = count;
})
  

// TODO: Create an addEventListener that will decrement the count on click
// and calls the function to display the current count
decrement.addEventListener('click', function(){
    if(count > 0){
    count --;
    display.innerHTML = count;
    }
    else{
        alert("Count can't be Negative");
    }
    
} )


