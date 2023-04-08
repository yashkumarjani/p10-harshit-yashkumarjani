/*
 * Exercise 5.3 : Write a function called hasDuplicate which accepts an array and
 * returns true or false if that array contains a duplicate 
*/

const a1 = [1, 2, 6, 3, 5, 6, 7];
const set1 = Array.from(new Set(a1));
console.log(set1);
//tried wrapping the functin here
const output = (function hasDuplicate() {
    if (set1.length !== a1.length)
        return true;
    else
        return false;
})();
console.log(output);

