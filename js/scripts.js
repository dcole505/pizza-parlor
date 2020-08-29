//Business Logic
function Pizza(size, sauce) {
  this.size = size;
  this.sauce = sauce;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.sizeCalc = function() {
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
  }
};

Pizza.prototype.sauceCalc = function() {
  if (this.sauce === "alfredo" || this.sauce === "pesto") {
    this.price += 1.50;
  }
};

Pizza.prototype.toppingCalc = function() {
  this.price += (this.toppings.length * 1.50);
};

//UI logic
$(document).ready(function() {
  $("#pizza-options").submit(function(event){
    event.preventDefault();
    userPizza = new Pizza($("#size").val(), $("#sauce").val());

    $("input:checkbox[name=topping]:checked").each(function(){
      userPizza.toppings.push($(this).val());
    })

    userPizza.sizeCalc();
    userPizza.sauceCalc();
    userPizza.toppingCalc();
    
    $("#input-form").hide();
    $("#price").append("<p>That's a good lookin' pie. That's gonna be: $" + userPizza.price.toFixed(2) + ". Give us around 30-45 minutes </P>" );
    $("#display-result").show();
    $("#refresh").click(function(){
      location.reload();
    })
  });
});