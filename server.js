const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());


// Listen to the port
const port = process.env.PORT || 5000;


// Listen for routes
app.get('/home',(req,res) => {
    console.log("Hitting express")
    res.json({appl:"server"})   
})


// Listen to the incoming requests
app.listen(port, function(){
    console.log("Listening on port "+port)
})