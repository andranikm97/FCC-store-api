require('dotenv').config();
const connecToDB = require('./db/connect');
const products = require('./');

// Async errors
require('express-async-errors');
const express = require('express');
const app = express();

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Store API</h1><a href="/api/v1/products">Products route</a>');
});

const productsRouter = require('./routes/products');
app.use('/api/v1/products', productsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;
const mongoURI = process.env.MONGO_URI;
const startApp = async () => {
  try {
    // connectToDB with await
    await connecToDB(mongoURI);
    console.log('Connection to DB successful!');
    app.listen(port, () => {
      console.log(`Listening at http://localhost:${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

startApp();
