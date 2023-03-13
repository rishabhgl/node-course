// const mongodb = require('mongodb');

// const url = 'mongodb://127.0.0.1:27017';
// const dbName = 'task-manager';

// const MongoClient = mongodb.MongoClient;

// MongoClient.connect(url, { useNewUrlParser: true} , (err, client) => {
//     if(err)
//         return console.log('Unable to connect to the specified database!');
//     const db = client.db(dbName);
//     db.collection('users').insertOne({
//         name: 'Rishabh',
//         age: 19,
//     })
// })

// CRUD create read update delete

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

// const connectionURL = 'mongodb://127.0.0.1:27017'
// const databaseName = 'task-manager'

// MongoClient.connect(connectionURL,  (error, client) => {
//     if (error) {
//         return console.log('Unable to connect to database!')
//     }

//     const db = client.db(databaseName)
    
//     db.collection('users').insertOne({
//         name: 'Andrew',
//         age: 27
//     })
// })

// we create 'users' collection in newdb database
var url = "mongodb://localhost:27017/newdb";
 
// create a client to mongodb
var MongoClient = require('mongodb').MongoClient;
 
// make client connect to mongo service
MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    // db pointing to newdb
    console.log("Switched to "+db.databaseName+" database");
 
    // document to be inserted
    var doc = { name: "Roshan", age: "22" };
     
    // insert document to 'users' collection using insertOne
    db.collection("users").insertOne(doc, function(err, res) {
        if (err) throw err;
        console.log("Document inserted");
        // close the connection to db when you are done with it
        db.close();
    });
});