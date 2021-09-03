const listEl = document.querySelector('#grocery-list');
const shoppingCartEl = document.querySelector('#shopping-cart');
const fruits = ['Bananas', 'Apples', 'Oranges', 'Grapes', 'Blueberries'];

// Create an event listener on the common parent element of the groceries
listEl.addEventListener('click', function(event) {
    event.preventDefault()
    let fruitDiv = document.createElement('div')
    id = event.target.closest('li').id 
    console.log(fruits[id])
    fruitDiv.innerHTML = fruits[id]
    shoppingCartEl.appendChild(fruitDiv)
    
    
    
    
    
    
   
    
    
    

})
//
// Inside the closure, for every click of the button, create a `div` element
// that will hold the name of the fruit
// and append it to the shopping cart
// YOUR CODE HERE
//
