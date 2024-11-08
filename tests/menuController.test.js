const { getRandomCuisine, generateMenuItem, generateMenu } = require('../controllers/menuController');

test('Random cuisine type generation', () => {
    const cuisine = getRandomCuisine();
    expect(['Italian', 'Chinese', 'Vegan', 'Mexican', 'American']).toContain(cuisine);
});

test('Generate valid menu item', () => {
    const item = generateMenuItem('Italian');
    expect(item).toHaveProperty('name');
    expect(item).toHaveProperty('description');
    expect(item).toHaveProperty('price');
    expect(item).toHaveProperty('special');
});

test('Generate full menu for restaurant', () => {
    const menu = generateMenu('Italian');
    expect(menu.length).toBeGreaterThanOrEqual(5);
    expect(menu.length).toBeLessThanOrEqual(10);
});
