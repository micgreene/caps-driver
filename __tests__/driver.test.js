'use strict';

//3rd party dependencies
const { it } = require('@jest/globals');

//local modules to be tested
const driverEvents = require('../driver.js');

//spy on console for logs
const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

//test suite
describe('DRIVER EVENT HANDLERS', ()=>{
  //create mock order details to use for all tests
  let newOrder = {
    storeName: 'Frank\'s Flowers',
    orderId: 0,
    customerName: 'customer name',
    address: 'address'
  };

  //case #2 - Set In-Transit Status
  it('should console.log a confirmation message when an order has been marked as in-transit ', ()=>{
    driverEvents.setIntransit(newOrder);

    expect(consoleSpy).toBeCalledWith(`--------------------------------------------------------------------,
    Event: In-Transit,
      Time: ${new Date()},
      Order Details - 
      Storename: Frank's Flowers,
      id#: 0,
      Customer: customer name,
      Address: address,
--------------------------------------------------------------------`
    );
    
    consoleSpy.mockReset();
  })

  //case #3 - Set Delivered Status
  it('should console.log a confirmation message when an order has been marked as delivered ', ()=>{
    driverEvents.setDelivered(newOrder);

    expect(consoleSpy).toBeCalledWith(`--------------------------------------------------------------------,
    Event: Delivered,
      Time: ${new Date()},
      Order Details - 
      Storename: Frank's Flowers,
      id#: 0,
      Customer: customer name,
      Address: address,
--------------------------------------------------------------------`
    );
    
    consoleSpy.mockReset();
  })
})