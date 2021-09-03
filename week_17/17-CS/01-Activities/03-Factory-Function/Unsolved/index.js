const beverage = function() {
  // Create 3 variables for the `type`, `price`, and `origin` of the beverage
  // Assign them to values of your choice
  let type = 'soda'
  let price = 1.75
  let origin = 'united states'
  //

  // Return an object literal which contains the methods `product()`, `amount()`, and `place()`
  return {
    // `product()` will print an invitation to drink the `type` of beverage
      product: function() {
        console.log(type);
      },
      amount: function(){
        console.log(price);
      },
      place: function() {
        console.log(origin);
      }
  };
};

const drink = beverage();
// Invoke the 3 methods
// YOUR CODE HERE
drink.product();
drink.amount();
drink.place();

