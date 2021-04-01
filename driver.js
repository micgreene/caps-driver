'use strict';

//3rd part dependencies
const faker = require('faker');
const io = require('socket.io-client');

//internal modules
const eventMessage = require('./event-message.js');

//configure .env variables
require('dotenv').config();

let host = 'http://localhost:3501';

//connect to socket
const socket = io.connect(host);

//call each event emitter explicitly
socket.on('pickup', pickedUp);

function pickedUp(payload){
  //waits a second to simulate driver arrivig at store, then picks up package
	setTimeout(() => {
    //set the package event status to 'in-transit'    
    setIntransit(payload);
    //wait three seconds to simulate delivery time, then attempts to deliver the package
    setTimeout(()=>{
      //set the package event status to 'delivered'
      setDelivered(payload);
    }, 3000);
  }, 1000);  
}

function setIntransit(orderDetails){
  //update live status message
  console.log(`Driver: "Picked up order #${orderDetails.orderId}"`);

  socket.emit('create-in-transit', orderDetails);

  let eventType = {
    event: 'In-Transit',
    time: new Date()
  }
  
  //update the messaging system for new event
  eventMessage(eventType, orderDetails);
}

function setDelivered(orderDetails){
  //update live status message
  console.log(`Driver: "Order #${orderDetails.orderId}, delivered"`);

  //emit the 'delivered' event
  socket.emit('create-delivered', orderDetails);      
  
  let eventType = {
    event: 'Delivered',
    time: new Date()
  }
  
  //update the messaging system for new event
  eventMessage(eventType, orderDetails);
}
