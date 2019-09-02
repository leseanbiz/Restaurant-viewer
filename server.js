const express = require('express')
const data = require('./data');
const cors = require('cors');
const app = express();
const port = 4000;

app.get('/', cors(), (req, res) => res.send(data))

app.listen(port, () => console.log(`Restaurant data server listening on port ${port}!`))