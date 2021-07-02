// Fetch request to Giphy API random endpoint
fetch(
  'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
)
  // Converts the response to JSON
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    console.log(response.data.img_url);

    // Use 'querySelector' to get the ID of where the GIF will be displayed
    var gifContainer = document.querySelector("#response-container");
    console.log(gifContainer);
    
    // Create an '<img>' element
    var gifImg = document.createElement("img");
    
    
    // Set that element's 'src' attribute to the 'image_url' from our Giphy API response
    gifImg.setAttribute('src', response.data.image_url);
    
    // Append the '<img>' element to the page
    gifContainer.appendChild(gifImg);
    
  });
