const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'myDatabase';
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    console.log('Connected successfully to MongoDB server');
    
    const db = client.db(dbName);
    const collection = db.collection('myCollection');

    await create(collection);
    await read(collection);
    await update(collection);
    await deleteDoc(collection);
    
  } finally {
    await client.close();
  }
}

async function create(collection) {
  const insertResult = await collection.insertOne({
    name: 'mrx',
    age: 20,
    email: 'newuser@nirmauni.ac.in',
    address: {
      street: 'abc',
      city: 'rajkot',
      zip: '382610'
    },
    createdAt: new Date()
  });
  console.log('Inserted single document:', insertResult.insertedId);

  const insertManyResult = await collection.insertMany([
    {
      name: 'dev',
      age: 23,
      email: 'abc@gmail.com',
      address: {
        street: '123 Main St',
        city: 'Ahmedabad',
        zip: '380001'
      },
      createdAt: new Date()
    },
    {
      name: 'yograj',
      age: 30,
      email: 'xyz@gmail.com',
      address: {
        street: '456 Elm St',
        city: 'Surat',
        zip: '395001'
      },
      createdAt: new Date()
    },
    {
      name: 'suraj',
      age: 31,
      email: 'hello@gmail.com',
      address: {
        street: '789 Oak St',
        city: 'Mumbai',
        zip: '390001'
      },
      createdAt: new Date()
    },
    {
        name: 'bhavy',
        age: 30,
        email: 'hello2@gmail.com',
        address: {
          street: '123 Main St',
          city: 'Ahmedabad',
          zip: '380001'
        },
        createdAt: new Date()
      },
  ]);
  console.log('Inserted multiple documents:', insertManyResult.insertedIds);
}

async function read(collection) {
  const findResult = await collection.findOne({ age: { $gte: 30 } });
  console.log('Found single document with age >= 30:', findResult);

  const findManyResult = await collection.find({ age: { $lt: 30 } }).toArray();
  console.log('Found multiple documents with age < 30:', findManyResult);
}

async function update(collection) {
  const updateResult = await collection.updateOne(
    { name: 'bhavy' },
    { $set: { age: 22 } }
  );
  console.log('Updated single document count:', updateResult.modifiedCount);

  const updateManyResult = await collection.updateMany(
    { age: { $lt: 30 } },
    { $set: { status: 'young' } }
  );
  console.log('Updated multiple documents count:', updateManyResult.modifiedCount);
}

async function deleteDoc(collection) {
  const deleteResult = await collection.deleteOne({ name: 'dev' });
  console.log('Deleted single document count:', deleteResult.deletedCount);

  const deleteManyResult = await collection.deleteMany({ age: { $lt: 24 } });
  console.log('Deleted multiple documents count:', deleteManyResult.deletedCount);
}

main().catch(console.error);