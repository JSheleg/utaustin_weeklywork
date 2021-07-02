function myFunction() {
  var searchTerm = document.getElementById('searchTerm').value;
  var rating = document.getElementById('rating').value;
  fetch(
    'https://api.giphy.com/v1/gifs/search?q=' +
       searchTerm + '&rating=' + rating + '&api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
      // Add the rating parameter
      // Remember to add your API key
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.data[0]);
      var responseContainerEl = document.querySelector('#response-container');
      responseContainerEl.innerHTML = '';
      var gifImg = document.createElement('img');
      gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
      responseContainerEl.appendChild(gifImg);
    });
}
