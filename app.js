const express = require("express");
const cors = require("cors");
const setupContactRoutes = require('./app/routes/contact.routes')
const { get } = require("express/lib/response");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." })
})

setupContactRoutes(app)

module.exports = app;