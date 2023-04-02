/*
 * Q-3 3.3 - What is the output of the below problem and why.
 */

// scenario 1 
// function createIncrement() {
//     let count = 0;
//     function increment() {
//         count++;
//     }
//     let message = `Count is ${count}`;
//     function log() {
//         console.log(message);
//     }
//     return [increment, log];
// }

// const [increment, log] = createIncrement();
// increment();
// increment();
// increment();
// log();
// What is logged?
// Result will be 0 [count is 0] because count value is incrementing but not storing into the count variable.

// scenario 2 
function createIncrement() {
    let count = 0;
    let message;
    function increment() {
        count++;
        message = `Count is ${count}`;
    }
    function log() {
        console.log(message);
    }
    return [increment, log];
}

const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
// What is logged?
// Result will be 3 [count is 3] because count value is incrementing and storing into the count variable.