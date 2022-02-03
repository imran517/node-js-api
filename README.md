# node-js-api

A simple nodejs base api without any framework.

## Requirements

* Node.js
* Postman (optional for tsting api)

## Components

* server
  - creates server and listens on a port 3000
  - 
* controller
  - handles requests
  - 
* service
  - handles business logic
  - 
* model
  - data


## Run

Run the following command from the root directory:

```
node server.js
```

## Test

Try the following urls in Postman.

* Get request

  * http://127.0.0.1:3000
  * http://127.0.0.1:3000/get
  * http://127.0.0.1:3000/get?name=john
  
* Post request

  * http://127.0.0.1:3000/post
    * Body - > raw and JSON
    * { "name" : "john" }
    
* Invalid request

  * http://127.0.0.1:3000/something
