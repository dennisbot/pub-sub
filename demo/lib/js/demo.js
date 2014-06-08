$(function () {

    // Add an item to the cart
    $('.add-to-cart').on('click', function() {

        //get product
        var product = $(this).prev('div').text();
        
        // publish event
        pubsub.publish('addToCart', product)
    })  


})