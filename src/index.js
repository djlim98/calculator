const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => { 
    res.status(200).json({
        Message: 'Nothing to show'
    });
});

app.use('/',require('./routes'))

app.use(function notFound(req, res, next) {
    res.status(404);
    const error = new Error(`🔍 - Not Found - ${req.originalUrl}`);
    next(error);
});

app.use(function errorHandler(err, req, res, next) {
    const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
    res.status(statusCode);
    res.send({
        message: err.message,
        stack: err.stack
    });
});



app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})