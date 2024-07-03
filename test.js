const {sum} = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14,9);
    expect(total).toBe(23);
});


test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

test("One dollar should be 161.72 yens", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yens = fromDollarToYen(161.72);

    // If 1 dollar is 161.72 yens, then 3.5 dollars should be (3.5 * 161.72)
    const expected = 161.72 * 3.5; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(566.02); // 1 dollar is 161.72 yens, then 3.5 dollars should be = (3.5 * 161.72)
})

test("One yen should be 0.0049 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const pounds = fromYenToPound(0.0049);

    // If 1 yen is 0.0049 poundss, then 3.5 yenss should be (3.5 * 0.0049)
    const expected = 0.0049 * 3.5; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.01715); // 1 yen is 0.0049 pounds, then 3.5 yens should be = (3.5 * 0.0049)
})