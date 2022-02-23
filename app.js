const express = require("express");
const cors = require("cors");
const { get } = require("express/lib/response");

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extends: true }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to contact book application." })
})

module.exports = app;