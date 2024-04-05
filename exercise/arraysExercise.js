// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create an empty array of numbers called "ages":
var ages = [];
// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Create an array variable called gameBoard that starts as an empty array.
// It should be typed to hold a 2 dimensional array of strings
var gameBoard = [];
// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Write a function called getTotal that accepts an array of Product types
// It should return the sum of all the products' prices
var game = { name: "game", price: 20 };
var products = [game, game, game];
function getTotalMap(products) {
    var total = 0;
    products.map(function (item) { return (total += item.price); });
    return total;
}
console.log(getTotalMap(products));
function getTotalFor(products) {
    var total = 0;
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var product = products_1[_i];
        total += product.price;
    }
    return total;
}
console.log(getTotalFor(products));
function getTotalReduce(products) {
    return products.reduce(function (acc, cv) { return acc + cv.price; }, 0);
}
console.log(getTotalReduce(products));
