//Business Logic
function Pizza(size, sauce) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.sizeCalc (size => {
  switch (this.size) {
    case 'small':
      price += 12;
      break;
    case 'medium':
      price += 14;
      break;
    case 'large':
      price += 16;
      break;
    case 'xl':
      price += 18;
      break;
  }
});

//UI logic
$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
  });
})