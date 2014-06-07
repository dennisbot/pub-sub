Javascript Pub/Sub implementation with plain javascript


###### Example of usage:

```javascript
// subscribe to events

var subscription1 = pubsub.subscribe('newEvent', function (data) {
    console.log('Subscription1/' + data.eventName + ' ocurred.');
});

var subscription2 = pubsub.subscribe('newEvent', function (data) {
    console.log('Subscription2/' + data.eventName + ' ocurred.');
});

// publish event - should log subscription1 and subscription2    
pubsub.publish('newEvent', { eventName : 'newEvent' });

// unsubscribe subscription1 from event
pubsub.unsubscribe(subscription1);

// publish event - should log only subscription2
pubsub.publish('newEvent', { eventName : 'newEvent' });
```

###### Demo
http://jsfiddle.net/nmoliveira/YkPar/