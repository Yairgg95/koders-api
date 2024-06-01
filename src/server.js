const express = require('express');
const kodersRouter = require('./routes/koders.router');

const app = express();

// middleware
app.use(express.json());
app.use('/koders', kodersRouter);

app.get('/',(req, res) => {
    res.json({
        message: "Koders APIv1"
    });
});

module.exports = app;