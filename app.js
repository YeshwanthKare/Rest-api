const express = require('express');
const app = express();
const port = 3011;
const pathRoute = require('./routes/posts')
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
require("dotenv/config")

mongoose.connect(process.env.DB, {
    useUnifiedTopology: true,
    useCreateIndex: true,
    useNewUrlParser: true
})
.then(() => {
    console.log("DB connected");
})
.catch((err) => {
    throw new Error(err);
})

app.use(express.json());

app.use('/posts', pathRoute )



app.get('/', (req, res) => {
    res.send("Hello Node");
})


app.listen(port, () => {
    console.log(`App listening to http://localhost:${port}`)
})