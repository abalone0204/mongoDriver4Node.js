## Practice project for using mongoDB's driver for node.js

- [link](http://mongodb.github.io/node-mongodb-native/2.0/)



## What is "Driver" ?

> An application communicates with MongoDB by way of a client library, called a driver, that handles all interaction with the database in a language appropriate to the application.

## Usage

- `npm install mongodb` or `sudo npm install -g mongodb`

- Create an `app.js`

```javascript
var MongoClient = require('mongodb').MongoClient,
    assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    db.close();
});
```