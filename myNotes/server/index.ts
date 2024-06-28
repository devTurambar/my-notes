const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

//The (req, res) => {} is a callback function, where we have access to the request and the response as parameters.
app.get("/", (req, res) =>{
    res.send("Hello from our server");
});
app.get("/test", (req, res) =>{
    res.send("Test from our server");
});

app.listen(8080, () => {
    console.log("Server listening on port 8080");
})