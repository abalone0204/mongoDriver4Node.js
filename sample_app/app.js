var MongoClient = require('mongodb').MongoClient,
    assert = require('assert'),
    insertDocuments = function(db, callback) {
        // Get the documents collection
        var collection = db.collection('documents');
        // Insert some documents
        collection.insert([{
            a: 1
        }, {
            a: 2
        }, {
            a: 3
        }], function(err, result) {
            assert.equal(err, null);
            console.log("Inserted 3 documents into the document collection");
            callback(result);
        });
    };



// Connection URL

// var url = 'mongodb://localhost:27017/myproject';
var url = 'mongodb://54.149.57.95:27017/myproject';



// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");
    insertDocuments(db, function() {
        db.close();
    });
});