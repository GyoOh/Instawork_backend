
const express = require('express');
const app = express();
let db = require("./fake-db");
const cors = require('cors');
const port = 8000;

app.use(cors({origin: 'http://localhost:3000'}));

app.get('/', (req, res) => { 
    const users = db.getUsers();
    res.send(users);
});
app.get('/user/:id', (req, res) => {
    const user = db.getUser(req.params.id);
    res.send(user);
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

