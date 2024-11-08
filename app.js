const express = require('express');
const app = express();
const restaurantRoutes = require('./routes/restaurantRoutes');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use('/', restaurantRoutes);

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
