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

const app = express();

app.get('/', (req, res) => res.send('API running'));

const PORT = process.env.PORT || 5500;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));