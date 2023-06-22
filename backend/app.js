require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
// eslint-disable-next-line import/no-extraneous-dependencies
const helmet = require('helmet');
const { errors } = require('celebrate');
const cors = require('cors');
const centralError = require('./middlewares/centralError');
const { requestLogger, errorLogger } = require('./middlewares/logger');

const router = require('./routes/routers');

const { PORT, DB_URL } = process.env;

const app = express();
app.use(cors());
app.use(helmet());
app.disable('x-powered-by');
app.use(express.json());
app.use(requestLogger);
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.use(router);
app.use(errorLogger);
app.use(errors());
app.use(centralError);

async function startApp() {
  try {
    mongoose.connect(DB_URL);
    // eslint-disable-next-line no-console
    console.log('Подключились к базе данных');
    app.listen(PORT, () => {
      // eslint-disable-next-line no-console
      console.log(`Сервер работает на ${PORT} порту`);
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log('Ошибка сервера');
    process.exit(1);
  }
}

startApp();
