// Basic requires imports for NodeJs App
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // for cross-orign requests
const useragent = require('express-useragent');


// Create an instance of all the imports
const app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

const api = '/api/whoami';


app.get(api, (req, res, next) => {
    console.log('/api/whoami is working');
    const language = req.acceptsLanguages();
    //const software = req.get('User-Agent');
    const software = req.useragent.os + " " + req.useragent.browser;
    const ipaddress = req.ip;
    res.json({ ipaddress: ipaddress,
         language: language[0],  
        software: software });
});

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
    res.json({ greeting: 'hello API' });
});


// the last thing to do
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});


