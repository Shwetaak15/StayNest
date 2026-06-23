const mongoose = require('mongoose');
const DB_PATH = "mongodb+srv://Shwetamongo:Mongo24@mongodbshweta.xbvgij3.mongodb.net/?appName=MongodbShweta";

mongoose.connect(DB_PATH)
  .then(async () => {
    console.log('Connected to MongoDB');
    
    // List collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('Collections in database:');
    collections.forEach(col => console.log(` - ${col.name}`));
    
    // Check users count and list usernames/emails
    const users = await mongoose.connection.db.collection('users').find({}).toArray();
    console.log(`\nUsers count: ${users.length}`);
    users.forEach(u => console.log(` - Email: ${u.email}, UserType: ${u.userType}`));

    // Check sessions count
    const sessions = await mongoose.connection.db.collection('sessions').find({}).toArray();
    console.log(`\nSessions count: ${sessions.length}`);
    sessions.forEach(s => {
      console.log(` - Session ID: ${s._id}`);
      console.log(`   Session Data:`, s.session);
    });

    await mongoose.disconnect();
    console.log('Disconnected');
    process.exit(0);
  })
  .catch(err => {
    console.error('Error:', err);
    process.exit(1);
  });
