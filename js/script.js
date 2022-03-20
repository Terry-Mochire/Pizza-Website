// Business Interface
function order(type, crust, size, number, toppings) {
    this.type = type;
    this.crust = crust;
    this.size = size;
    this.number = number;
    this.toppings =toppings;
};

order.prototype.beforeToppingsPrice = function () {
    var pizzaPrice;
   if (this.size == "Small") {
        var pizzaPrice = 500;
   }else if (this.size == "Medium") {
       var pizzaPrice = 700;
   }else if (this.size == "Large") {
       var pizzaPrice = 1000;
   }else{
       var pizzaPrice = 1200;
   } return pizzaPrice;
   
};
order.prototype. afterToppingsPrice = function () {
    if (this.toppings == "None") {
        return this.beforeToppingsPrice()  * this.number;
    } else if( this.size == "Small"){
        return (this.beforeToppingsPrice() + 70) * this.number;
    } else if (this.size == "Medium") {
        return (this.beforeToppingsPrice() + 100) * this.number;
    } else if(this.size == "Large") {
        return (this.beforeToppingsPrice() +150) * this.number;
    } else {
        return (this.beforeToppingsPrice() + 200) * this.number;
    }
}


// User Interface
$(function(event){
    $('form#orderForm').submit(function(event){
        event.preventDefault();

        var inputtedType = $('select#choice-select').val();
        var inputtedCrust = $('select#crust-select').val();
        var inputtedSize = $('select#size-select').val();
        var inputtedNumber =$('input#number').val();
        var inputtedToppings = $('select#toppings-select').val();

        var newOrder = new order(inputtedType, inputtedCrust, inputtedSize, inputtedNumber,inputtedToppings);
        console.log(newOrder);
        $('ul#userOrder').append("<li><span = 'ordered'>" + newOrder.type + "(" + newOrder.number + ")" + "</span></li>" );
        console.log(newOrder.afterToppingsPrice());
        $('p#currentTotal').append("<span>" + newOrder.afterToppingsPrice() + "</span>");
    })
    $('form#deliver').submit(function(event){
        event.preventDefault();

        if (document.getElementById('deliveryOption').value == "PickUp") {
            $('div#pickUpDetails').show();
        } else if (document.getElementById('deliveryOption').value == "Deliver"){
            $('div#deliveryDetails').show();
        } else{
            alert("Choose between Delivery or Pick Up.")
        }
    })
    $('input#submitbtn').click( function(event) {
        event.preventDefault();

        alert("Thank you for placing an order with us. Our rider will be reaching out to you soon.")
    })
})