const express = require('express');
const mongoose = require('mongoose');
const port = 5000;
const app = express();
const router = require('./routes/job')


mongoose.connect("mongodb+srv://juberkhan:juberkhan123@cluster0.tjhq9rc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {
  console.log('db connected');
}).catch(err => console.log(err));


app.use(express.json());
app.use("/api/v1/job", router);


app.listen(port, () => {
    console.log('server is runing');
})