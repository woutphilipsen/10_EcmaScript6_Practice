// WEAKMAP OBJECT
let foods = new WeakMap();

foods.set(['italian'], 'gelato');
foods.set(['mexican'], 'torta');
foods.set(['canadian'], 'poutine');

let southernUSStates = ['Tennessee', 'Kentucky', 'Texas'];
foods.set(southernUSStates, 'hot chicken');
southernUSStates = null; // southernUSStates doesn't exist anymore now

console.log(
    foods.get(['italian']), // undefined
    foods.has('french'), // false
    foods.get(southernUSStates), // undefined
    foods.size // undefined
);

// MOSTLY U USE MAP