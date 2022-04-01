const express = require('express');
const cors = require('cors');
const axios= require('axios');

const app = express();

app.get('/', cors(), async (req, res) => {
  const response=await axios.get('https://api.binance.com/api/v3/ticker/24hr');

  res.json(response.data);
});


app.get('/api/customers', cors(), (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const port = 3000;

app.listen(process.env.PORT || port, () => `Server running on port ${port}`);
