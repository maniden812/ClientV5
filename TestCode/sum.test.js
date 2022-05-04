
const pricingmodule = require('../pages/api/pricingmodule');
// const sum = require('./pricingmodule');

test('Checks the price of in state price', () => {
    expect(pricingmodule(690, 4.20,"TX")).toBeCloseTo(2898,5);
});
test('Checks the price of out of state price', () => {
    expect(pricingmodule(690, 4.20,"AL")).toBeCloseTo(3042.9,5);
});
