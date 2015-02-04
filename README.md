## Practice project for using mongoDB's driver for node.js

- [link](http://mongodb.github.io/node-mongodb-native/2.0/)



## What is "Driver" ?

> An application communicates with MongoDB by way of a client library, called a driver, that handles all interaction with the database in a language appropriate to the application.

## Usage


### Get started with a simple application

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

- Run `mongod` in command-line to boot up the server.

- Run `node app.js`: You should see "Connected correctly to server" if it's connected correctly.


### Simple CRUD

#### 1. Insert collections

```javascript
var insertDocuments = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Insert some documents
  collection.insert([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    console.log("Inserted 3 documents into the document collection");
    callback(result);
  });
}

```

- This mean we

```javascript
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    insertDocuments(db, function() {
        db.close();
    });
});
```

#### 2. Update documents