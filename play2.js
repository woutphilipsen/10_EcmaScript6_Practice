// SPREAD OPERATOR

/* let printThreeThings = function(thing1, thing2, thing3) {
    console.log(thing1, thing2, thing3);
}
*/

let yummyThings = ['pizza', 'gelato', 'sushi', 'cheeseburger'];

let greatThings = ['swimming', 'sunsets', ...yummyThings, 'Witgoor-City'];
let copyOfGreatThings = [...greatThings];
copyOfGreatThings.push('summer');

console.log(greatThings);
console.log(copyOfGreatThings);

// printThreeThings(...yummyThings);