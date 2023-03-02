const express = require('express');

const db = require('./db.js');
const { User, Role, User_Role } = require('./models/index');
require('dotenv').config();

const router = require('./router')

const app = express();

app.use(express.json());
app.use(router)

const PORT = process.env.PORT || 4000;

db.then(() => {
    //Starting server
    app.listen(PORT, () => console.log("Server on port " + PORT));
})
    .catch((err) => console.log(err.message)); 