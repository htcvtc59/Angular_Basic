const express = require('express');
const bodyParser = require('body-parser').json();
const app = express();

app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Origin','Content-Type,X-Requested-With');
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.post('/signin',bodyParser, (req, res) => {
    res.send(req.body);
});

app.listen(3000, () => { console.log('Server is running') });
