const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const path = require('path');
const config = require('./config');
const loadTestData = require('./testData');

const app = express();

// import routes
const postRoutes = require('./routes/post.routes');

app.use(helmet());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(mongoSanitize());
app.use('/api', postRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '/../client/build')));

// connects our back end code with the database
mongoose.connect(config.DB, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
  loadTestData();
});
db.on('error', err => console.log(`Error ${err}`));

app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../client/build/index.html`));
});

app.listen(config.PORT, () => {
  console.log('Server is running on Port:', config.PORT);
});