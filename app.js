
const express = require('express');
const app = express();
app.use(express.json());
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
app.post('/user', (req, res) => {
    const { name, phone, email, role } = req.body;
    const user = db.addUser(name, phone, email, role);
    res.send(user);
});
app.put('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const { name, phone, email, role } = req.body;
    const user = db.updateUser(id, name, phone, email, role);
    res.send(user);
});
app.delete('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    const user = db.deleteUser(id);
    res.send(user);
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});

