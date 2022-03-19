// Business Interface
function order(type, crust, size, number, toppings) {
    this.type = type;
    this.crust = crust;
    this.size = size;
    this.number = number;
    this.toppings =toppings;
};

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
        $('ul#userOrder').append("<li><span = 'ordered'>" + newOrder.type + "</span></li>" )
    })
})