/*
 * Q-1 3.1 - Create a memoize function that remembers previous inputs and stores them in cache.
 * so that itwon’t have to compute the same inputs more than once. 
 * The function will take an unspecifiednumber of integer inputs and a reducer method.
 */

// Note :- Understand the concept but not able to understand the below code properly

//memoize function
function memoize(fn) {
    const cache = new Map();
    return function (...args) {
        const key = args.toString();
        if (cache.has(key)) {
            return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    };
}

//Given reducer method:
function add(a, b) {
    return a + b
}
//Create a method called memoize such that:
const memoizeAdd = memoize(add);

//then calling...
console.time();
memoizeAdd(100, 100); //returns 200 
console.timeEnd();

console.time();
memoizeAdd(100); //returns 100
memoizeAdd(100, 200) //returns 300
console.timeEnd();

console.time();
memoizeAdd(100, 100) //returns 200 without computing.
console.timeEnd();
