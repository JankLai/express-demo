const MongoClient = require('mongodb').MongoClient //类
const assert = require('assert')
const url = 'mongodb+srv://JankLai:ab123456@cluster0.xiycq.mongodb.net'

MongoClient.connect(url, function(err, client){
    assert.strictEqual(null, err)

    const db = client.db("test")

    const result = db.collection('sales').find({});
    result.forEach(iterateFunc, errorFunc);

    // db.collection('sales').insertOne({
    //     item:"canvas",
    //     qty:100,
    //     tags:["cotton"]
    
    // }).then(function(result){
    //     console.log(result)
    // })

    client.close();
})


function iterateFunc(doc) {
    console.log(JSON.stringify(doc, null, 4));
 }
 
 function errorFunc(error) {
    console.log(error);
 }
 
 