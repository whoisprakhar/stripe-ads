const express = require('express');
const app = express();

const {
  HomeController,
  PlacementController,
  PaymentController,
  AdCopyController
} = require('./controllers');


const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/', HomeController);
app.get('/placements/:placementType', PlacementController);
app.get('/payment/:status', PaymentController);
app.get('/ad-copy/:sku', AdCopyController);


app.listen(port, () => console.log(`App started on ${port}`));