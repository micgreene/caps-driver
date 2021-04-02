# LAB 12: Socket.io Driven Application

Codefellows 401 JavaScript

## CAPS SOCKET.IO DRIVER
 
This repo contains the driver.js module of the project, which manages the event listeners and handlers for the drivers delivering packages. Refer to Caps, Caps-vendor and Caps-vendor2 for the full project suite.

## Project: Caps Event Driven System Phase 2

- In Phase 2, we’ll be changing the underlying networking implementation of our CAPS system from using node events to using a library called socket.io so that we can do networked events. Socket.io manages the connection pool for us, makes broadcasting much easier to operate, and works well both on the terminal (between servers) and with web clients.

- The core functionality we’ve already built remains the same. The difference in this phase is that we’ll be creating a networking layer. As such, the user stories that speak to application functionality remain unchanged, but a new set theme emerges to get us through the refactoring.

  - As a vendor, I want to alert the system when I have a package to be picked up
  - As a driver, I want to be notified when there is a package to be delivered
  - As a driver, I want to alert the system when I have picked up a package and it is in transit
  - As a driver, I want to alert the system when a package has been delivered
  - As a vendor, I want to be notified when my package has been delivered
  - And as developers, here are some of the development stories that are relevant to the above

-As a developer, I want to create network event driven system using Socket.io so that I can write code that responds to events originating from both servers and web applications

- Create the CAPS system as follows:

  - **events.js - Global Event Pool (shared by all modules)**
  - **caps.js - Main Hub Application**
    - Manages the state of every package (ready for pickup, in transit, delivered, etc)
    Logs every event to the console with a timestamp and the event payload
    - i.e. “EVENT {}”
  - **vendor.js - Vendor Module**
    - Declare your store name (perhaps in a .env file, so that this module is re-usable)
    - Every 5 seconds, simulate a new customer order
      - Create a fake order, as an object:
        - storeName, orderId, customerName, address
      - Emit a ‘pickup’ event and attach the fake order as payload
      - Monitor the system for events …
        - Whenever the ‘delivered’ event occurs
          - Log “thank you” to the console
  - **driver.js - Drivers Module**
    - Monitor the system for events …
    - On the ‘pickup’ event …
      - Wait 1 second
        - Log “DRIVER: picked up [ORDER_ID]” to the console.
        - Emit an ‘in-transit’ event with the payload you received
      - Wait 3 seconds
        - Log “delivered” to the console
        - Emit a ‘delivered’ event with the same payload

### Authors

- Mike Greene, Kale Lesko, Anne Thorson

### Links and Resources

- N/A

### Setup

#### `.env` requirements (where applicable)

- `STORENAME` - Frank's Flowers

#### How to initialize/run your application

- `npm start`

#### UML

![UML Example](./reference/Lab11-Whiteboard.jpg)
