const connectToMongo=require("./db");// We have imported the function connectToMongo from db.js
connectToMongo();


const express = require('express');
const app = express();
const port = 5000;

app.use(express.json());//This is the middleware which is used to print the req.body

//Available Routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//hello umang Adarsh