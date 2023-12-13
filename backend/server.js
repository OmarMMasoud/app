const express = require('express');
const path = require('path');

const app = express();

app.get('/', function(req, res) {
    // Join the current directory of the module with the relative path of the HTML file
     res.sendFile(path.join(__dirname, '../frontend/app/src/app.js'));
   
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});