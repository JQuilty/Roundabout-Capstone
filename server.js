// const cors = require('cors');
// const express = require('express');
// const mongoose = require('mongoose');

// require('dotenv').config();
// const app = express();
// const port = process.env.PORT || 5501;

// const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});
// const databaseConnection = mongoose.connection;
// databaseConnection.once('open', () => {
//     console.log("Connected to database");
// })

// app.use(cors());
// app.use(express.json());

// const tournamentRouter = require('./routes/tournament');
// const contestantRouter = require('./routes/contestant');
// app.use('/tournament', tournamentRouter);
// app.use('/contestant', contestantRouter);

// app.listen(port, () => {
//     console.log('Listening and runnong on port ' + port);
// });

const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json({extended: false}))

app.get('/', (req, res) => res.send('api running'));

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/tournaments', require('./routes/api/tournaments'));
// app.use('/api/contestant', require('./routes/api/contestant'));

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));