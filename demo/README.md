###### Demo
Simple demo showing a use case for the Pub/Sub.
It is a tiny online shooping where a customer is able to add items to the cart.

When an item is added, an event will be publish and 2 subscribers will be notified.
One for the simple view of the cart which displays only the total number of items on the cart.
Another one with the list of items and quantities. 