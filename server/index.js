require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const HC = require('./controller');



const app = express();
app.use(bodyParser.json());
const { APP_PORT, CONNECTION_STRING } = process.env;


massive(CONNECTION_STRING).then( db => {
    console.log('database is connected')
    app.set('db', db)
}).catch(err => {
    console.log('there was an error', err)
})


app.get('/houses', HC.getHouses);
app.post('/houses', HC.addHouse);
app.delete('/houses/:id', HC.deleteHouse);







app.listen(APP_PORT, () => {
    console.log(`Going at ${APP_PORT} MPH`)
})