const express = require('express');
const app = express();

const PlacementController = require('./controllers/placements');
const PaymentFailed = require('./controllers/payment-failed');
const PaymentSuccess = require('./controllers/payment-success');

const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.set('view engine', 'pug');

app.get('/placements/:placementType', PlacementController);
app.get('/success', PaymentSuccess);
app.get('/cancelled', PaymentFailed);


app.listen(port, () => console.log(`App started on ${port}`));