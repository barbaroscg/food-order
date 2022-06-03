const express = require('express');
const FoodModel = require('./models/foodmodel');
const cors = require('cors');
const app = express();
const db = require('./db');
const foodsRoute = require('./routes/foodsRoute');

app.use(cors());

app.use(express.json());

app.use('/api/foods', foodsRoute);

app.get('/getfoods', (req, res) => {
  FoodModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3030, () => {
  console.log('SERVER IS RUNNING!');
});
