var simpleTrolley = (function($){

    var total = 0,
        $display = $('#total-items');

    // notification when an item is added to the cart
    pubsub.subscribe('addToCart', function() {
        
        total ++;

        // update total
        updateTotal();
    })

    // update total items on the view
    function updateTotal() {
        $display.html(total);
    }

}(jQuery));