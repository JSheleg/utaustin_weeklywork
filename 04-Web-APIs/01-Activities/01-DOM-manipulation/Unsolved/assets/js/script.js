// Create your HTML Page via DOM Methods here!

//var body = document.body;

// TODO: Add a centered h1
var header1 = document.createElement("h1");
header1.style.textAlign = 'center';
header1.innerHTML =  "Hello World!"
document.body.appendChild(header1);


// TODO: Add a centered h2
var header2 = document.createElement("h2");
header2.style.textAlign = 'center';
header2.innerHTML = "I am happy to be here!"
document.body.appendChild(header2);


// TODO: Add a centered image with a centered caption under it
//Create div with image in side
var image = document.createElement("IMG");
//image.style.cssFloat = "center";
image.style.margin = "0 35%";
image.setAttribute("src","https://images.unsplash.com/photo-1621690756168-5ed8fe82c915?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60");
image.setAttribute("width","400");
image.setAttribute("height","300");
document.body.appendChild(image);

var caption = document.createElement("p");
caption.style.textAlign = "center";
caption.innerHTML = "Enjoy this relaxing image!"
document.body.appendChild(caption);

// TODO: Add a list of your favorite foods (or other favorites)
var header3 = document.createElement("h3");
header3.innerHTML = " My favorite Foods:"
header3.style.textEmphasis = "Bold";
document.body.appendChild(header3)


var foodlist = document.createElement("ul");
document.body.appendChild(foodlist);
var fooditem1 = document.createElement("li");
fooditem1.innerHTML = "Sushi";
foodlist.appendChild(fooditem1);
var fooditem2 = document.createElement("li");
fooditem2.innerHTML = "Pizza";
foodlist.appendChild(fooditem2);


