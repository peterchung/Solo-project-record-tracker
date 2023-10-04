const path = require('path'); 
const express = require('express');
const app = express();
const PORT = 3000;



// require routers

const api = require('./routes/api');

// handle parsing request body
app.use(express.json());

// define route handlers

app.use('/api', api);

// route handler for starting page
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../client/index.html'))
// })


app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
  module.exports = app;