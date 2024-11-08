const express = require('express');
const { getRandomCuisine, generateMenu } = require('../controllers/menuController');
const { restaurants } = require('../controllers/data');
const router = express.Router();


router.get('/', (req, res) => {
    const randomRestaurant = restaurants[Math.floor(Math.random() * restaurants.length)];
    const randomMenu = generateMenu(getRandomCuisine());
    res.render('home', { restaurant: randomRestaurant, menu: randomMenu, restaurants });
});


router.get('/restaurant/:name', (req, res) => {
    const restaurant = req.params.name;
    const cuisine = getRandomCuisine();
    const menu = generateMenu(cuisine);
    res.render('restaurant', { restaurant, cuisine, menu });
});

router.get('/alerts', (req, res) => {
    const alerts = restaurants.map(name => {
        return {
            name,
            alert: Math.random() < 0.5 ? 'Special Event!' : 'No current alerts'
        };
    });
    res.render('alerts', { alerts });
});

module.exports = router;
