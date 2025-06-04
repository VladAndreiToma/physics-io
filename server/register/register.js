const express = require("express");
const { nanoid } = require("nanoid");
const bcrypt = require("bcrypt");
const { connectToPhysicsIO, getDb } = require('../mongoClientAgents/agentToCreateMongoClient');

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    await connectToPhysicsIO();
    const db = getDb();
    const usersCollection = db.collection('users');

    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return res.json({ error: 'Email already in use' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const userId = nanoid();

    const newUser = {
      _id: userId,
      username,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    await usersCollection.insertOne(newUser);
    res.json({ message: 'User registered', id: userId });

  } catch (err) {
    console.error(err);
    res.json({ error: "Registration failed" });
  }
  // no need to close client here because connection is reused globally
});

module.exports = router;
