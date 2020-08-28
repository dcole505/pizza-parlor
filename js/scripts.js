//Business Logic
function PizzaObject() {
  this.toppings = [];
  this.size = [];
}

//UI logic
$(document).ready(function() {
  $("#form").submit(function(event){
    event.preventDefault();
  });
})