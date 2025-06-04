// knowing i run db on some port
// this agent creates a client entity
// scope: avoid production multiple query
// client connect client close might slow the app

const {MongoClient} = require('mongodb');
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

let db; // generic db instance

async function connectToPhysicsIO() {
    if(!db){
        await client.connect();
        db = client.db('physics_io');
        console.log( "physics_io(mongo db) connected" );
    }
    return db;
}

function getDb(){
    if(!db){
        throw new Error("must connect to DB first");
    }
    return db;
}

module.exports = { connectToPhysicsIO , getDb };

