// Create a function called `myFunction()`
// Create a variable that will use `document.querySelector()` to target the `id` of the input 
// Use `.value` to capture the value of the input and store it in the variable
var myFunction = function(){

  const searchTerm = document.querySelector("#searchTerm").value;
  var apiUrl = 'https://api.giphy.com/v1/gifs/search?q=' + searchTerm + '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'


  fetch(apiUrl).then(function(response) {          
  return response.json();
})
.then(function(response) {
  console.log(response.data[0]);
  // Create a variable that will select the <div> where the GIF will be displayed

  var gifdiv = document.getElementById("response-container"); 
  //
  // Empty out the <div> before we append a GIF to it
  gifdiv.innerHTML = "";
  //
  var gifImg = document.createElement('img');
  gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
  // Append 'gifImg' to the <div>
  gifdiv.appendChild(gifImg);
  //
})
}