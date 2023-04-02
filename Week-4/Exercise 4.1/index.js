/*
 * Exercise 4.1 : Implement a function namedgetNumberwhich generatesa random number. 
 * If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise.
 * Let’s also keep thepromise resolution/rejection time as a variable.
*/

function getNumber(resolve, reject) {
    let randomNumber = Math.floor(Math.random() * 100);
    console.log("Random number is " + randomNumber + " ,So");
    if (randomNumber % 5 == 0) {
        resolve("Promise is resolved");
    } else {
        reject("Promise is rejected");
    }
}
class myPromise {
    constructor(handler) {
        this.status = "pending";
        this.value = null;

        const resolve = value => {
            if (this.status === "pending") {
                this.status = "fulfilled";
                this.value = value;
            }
        };
        const reject = value => {
            if (this.status === "pending") {
                this.status = "rejected";
                this.value = value;
            }
        };

        try {
            handler(resolve, reject);
        } catch (err) {
            reject(err);
        }
    }

    then(onFulfilled, onRejected) {
        if (this.status === "fulfilled") {
            onFulfilled(this.value);
        } else if (this.status === "rejected") {
            onRejected(this.value);
        }
    }
}
const p = new myPromise(getNumber);
p.then((res) => {
    console.log(res);
}, (err) => {
    console.log(err);
});