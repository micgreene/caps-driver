'use strict';

function eventMessage (eventType, orderDetails){
  //add event messager
  console.log(`--------------------------------------------------------------------,
    Event: ${eventType.event},
      Time: ${eventType.time},
      Order Details - 
      Storename: ${orderDetails.storeName},
      id#: ${orderDetails.orderId},
      Customer: ${orderDetails.customerName},
      Address: ${orderDetails.address},
--------------------------------------------------------------------`);
}

module.exports = eventMessage;