const express = require('express');
const connectDB = require('./Data_base/connect.js');
const tree = require('./routes/tree.js')
const cors = require("cors");
const app = express();
const PORT = 4000;


connectDB();

app.use(
    cors({
        origin: "*",
    })
);
app.use(express.json());

app.use('/tree', tree)
app.listen(PORT, () => {
    console.log('listen');
})