const cors = require('cors');
const express = require('express');
const app = express();
const axios = require('axios');

const endpoint = 'https://jsm-challenges.s3.amazonaws.com/frontend-challenge.json';

app.use(cors());

app.get('/', async (req, res) => {
  const { data } = await axios(endpoint);
  return res.json(data);
});

app.listen('3001');
