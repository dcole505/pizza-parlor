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
      this.price += 12;
      break;
    case 'medium':
      this.price += 14;
      break;
    case 'large':
      this.price += 16;
      break;
    case 'xl':
      this.price += 18;
      break;
    default:
      alert("Please select a valid size option");
  }
});

Pizza.prototype.sauceCalc (sauce => {
  if (this.sauce === "alfredo" || this.sauce === "pesto") {
    this.price += 1.50;
  }
});

//UI logic
$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
    userPizza = new Pizza();
  });
})