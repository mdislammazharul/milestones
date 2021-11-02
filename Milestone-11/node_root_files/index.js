const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const users = [
    { id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
    { id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
    { id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
    { id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
    { id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },
]

// res- rsponse, req-request
app.get('/users', (req, res) => {
    const search = req.query.search;
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
});

// app.Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple']);
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Yummy Yummy tok marka Fazli');
})

app.listen(port, () => {
    console.log('listening to port', port);
});