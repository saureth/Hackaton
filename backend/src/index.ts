import 'reflect-metadata';
import express from 'express';
import getConnection from './utils/dbconnection';
import { User } from './entity/user';
import Country from './entity/country';
var bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Accept, Accept-Language, Content-Language, Content-Type, Authorization, Content-Length, X-Requested-With, Access-Control-Allow-Origin'
  );
  res.header('Content-Type', 'application/json');

  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    //respond with 200
    res.status(200).send('OK');
  } else {
    //move on
    next();
  }
});

app.get('/countries', async function(req, res) {
  const connection = await getConnection();
  const countries = await connection.manager.find(Country);
  console.log(User);
  res.send(JSON.stringify(countries));
  connection.close();
});

app.get('/login', async function(req, res) {
  const connection = await getConnection();

  try {
    const firstUser = await connection
      .getRepository(User)
      .createQueryBuilder('user')
      .where('user.email = :email AND user.password = :password', req.query)
      .getOne();

    res.send(firstUser);
  } catch (error) {
    res.send('');
  }

  connection.close();
});

app.listen(3000);
