// Business Interface
function order(type, crust, size, number, toppings) {
    this.type = type;
    this.crust = crust;
    this.size = size;
    this.number = number;
    this.toppings =toppings;
};

order.prototype.priceBySize = function () {
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
order.prototype.pricebyCrust = function(){
    var crustPrice;
    if (this.crust == "Crispy") {
       var crustPrice = this.priceBySize()+ 50;
    } else if (this.crust== "Stuffed") {
       var crustPrice = this.priceBySize() + 100;
    } else {
       var crustPrice = this.priceBySize() + 120;
    } return crustPrice;
};

order.prototype. afterToppingsPrice = function () {
    if (this.toppings == "None") {
        return this.pricebyCrust()  * this.number;
    } else if( this.size == "Small"){
        return (this.pricebyCrust() + 70) * this.number;
    } else if (this.size == "Medium") {
        return (this.pricebyCrust() + 100) * this.number;
    } else if(this.size == "Large") {
        return (this.pricebyCrust() +150) * this.number;
    } else {
        return (this.pricebyCrust() + 200) * this.number;
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