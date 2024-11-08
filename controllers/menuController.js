const { cuisines, menuItems } = require('./data.js');

function getRandomCuisine() {
    return cuisines[Math.floor(Math.random() * cuisines.length)];
}

function generateMenuItem(cuisine) {
    const items = menuItems[cuisine];
    if (!items || items.length === 0) {
        throw new Error(`No menu items found for cuisine: ${cuisine}`);
    }
    const item = items[Math.floor(Math.random() * items.length)];
    const price = (Math.random() * 20 + 5).toFixed(2); // Price between $5 and $25
    return {
        name: item.name,
        description: item.description,
        price,
        special: Math.random() < 0.3 // 30% chance of being a special
    };
}


function generateMenu(cuisine) {
    const menu = [];
    const itemCount = Math.floor(Math.random() * 6) + 5; // Between 5 and 10 items
    for (let i = 0; i < itemCount; i++) {
        menu.push(generateMenuItem(cuisine));
    }
    return menu;
}

module.exports = { getRandomCuisine, generateMenuItem, generateMenu };
