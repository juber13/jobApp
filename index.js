const mongoose = require('mongoose');
const express = require('express');
const router = require('./routes/job');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 10000;


(() => {
  try {
     mongoose.connect(`mongodb+srv://juberkhan:${process.env.PASSWORD}@cluster0.tjhq9rc.mongodb.net/test`)
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
})();


app.use(express.json());
app.use("/api/v1", router);


app.listen(PORT, () => {
  console.log('server is runing' , PORT);
})

// n8crwFDxvUd8Evc5
// juberkhan0707