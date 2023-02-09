const express = require("express");
const {User} = require ("../controllers/User");
const {Company} = require ("../controllers/Company");
const app = express();

app.get("/api", (req, res) => {
    res.json(`Welcome!`)
})
app.get("/api/user/new", (req, res) => {
    res.json({ success: true, data: new User() })
})
app.get("/api/company/new", (req, res) => {
    res.json({ success: true, data: new Company() })
})
app.get("/api/user/company", (req, res) => {
    res.json({ success: true, User: new User(), Company: new Company() })
})


module.exports = app;