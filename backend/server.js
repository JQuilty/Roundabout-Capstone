const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();
const app = express();
const port = process.env.PORT || 5501;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
const databaseConnection = mongoose.connection;
databaseConnection.once('open', () => {
    console.log("Connected to database");
})

const tournamentRouter = require('./routes/tournament');
const contestantRouter = require('./routes/contestant');
app.use('/tournament', tournamentRouter);
app.use('/contestant', contestantRouter);

app.listen(port, () => {
    console.log('Listening and running on port ' + port);
});
