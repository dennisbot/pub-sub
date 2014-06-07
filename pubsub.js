/*
* Pub/Sub implementation
*/

var pubsub = (function () {

    // store events subscribed
    // events = { eventName : [callback1, callback2, ...] }
    var events = {};

    // publish the event with the specified data
    function publish(eventID, data) {
        
        if (!events[eventID]) {
            return;
        } 

        var len = events[eventID].length;
  
        while (len--) {
            events[eventID][len](data);
        }

    }

    // subscribe to an event 
    // passing the event name and the callback function
    function subscribe(eventID, callback) {
       
        if (!events[eventID]) {
            events[eventID] = [callback];
        } else {
            events[eventID].push(callback);            
        }

        // returns eventID and the position index on the array
        // so that can be unsubscribed if needed
        return {
            eventID : eventID,
            index : events[eventID].length - 1
        }
    }

    // unsubscribe from an event passing the returned data got upon subscription
    function unsubscribe(subscription) {

        if (!events[subscription.eventID]) {
            return;
        } 

        events[subscription.eventID].splice(subscription.index, 1);
    }

    return {
        publish : publish,
        subscribe : subscribe,
        unsubscribe : unsubscribe 
    };

}());