var completeTrolley = (function(){

    var items = {},
        $trolley = $('#trolley');

    // notification when an item is added to the cart
    pubsub.subscribe('addToCart', function (product) {

        // save info

        if (!items[product]) {
            items[product] = 1;
        } else {
            items[product] ++;
        }

        // update view 
        updateItems(product);
    })

    // update items on the view
    function updateItems(product) {
        
        // append to the view if item is not in the list
        // otherwise only update quantity

        var li = $trolley.find('li[data-product="' + product + '"]');
        
        if (li.length === 0) {
            $trolley.append('<li data-product="' + product + '">' + product + ': <span class="quantity">1</span></li>');
        } else {
            li.find('.quantity').html(items[product]);
        }
    }

}());