const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const app = express();
const ObjectId = require('mongodb').ObjectId;

// middleware
app.use(cors());
app.use(express.json());

// user: mydbuser1
// pass: h38jlgZbqifdPZUi

const uri = "mongodb+srv://mydbuser1:h38jlgZbqifdPZUi@cluster0.jr5y0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
async function run() {
    try {
        await client.connect();
        const database = client.db("foodmaster");
        const usersCollection = database.collection("users");

        // get api
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find({});
            const users = await cursor.toArray();
            res.send(users);
        })

        // find a specific user
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: ObjectId(id) };
            const user = await usersCollection.findOne(query);
            console.log('load user with id: ', id);
            res.send(user);
        })

        // post api
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            const result = await usersCollection.insertOne(newUser);
            console.log('got new user', req.body);
            console.log('added user', result);
            res.send(result);
        })

        // update
        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const updatedUser = req.body;
            const filter = { _id: ObjectId(id) };
            const options = { upsert: true };
            const updateDoc = {
                $set: {
                    name: updatedUser.name,
                    email: updatedUser.email
                },
            };
            const result = await usersCollection.updateOne(filter, updateDoc, options)
            console.log('updating', id)
            res.json(result)
        })

        // delete api
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            // res.json(1);
            const query = { _id: ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
            console.log(result);
            res.json(result);
        })


    } finally {
        // await client.close();
    }
}
run().catch(console.dir);


const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('My First MongoDB');
})

app.listen(port, () => {
    console.log('listening to port', port);
});