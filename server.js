const express = require("express");
const app = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(require('./routes/routes'));

app.listen(port);
