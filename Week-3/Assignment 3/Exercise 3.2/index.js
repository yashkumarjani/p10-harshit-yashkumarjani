/*
 * Q-2 3.2 - Create 3 simple functions where call, bind and apply are used. The intention of this exercise is to
 * understand how they work and their differences.
 */

// Note :- Understand the concept properly

// Scenario 1 with call method -dependency on other object :  
// const candidate = {
//     firstName: 'Yashkumar',
//     lastName: 'Jani',
//     designation: 'Front-end Developer',
//     printName: function () {
//         console.log(this.firstName);
//     }
// };
// candidate.printName();// Prints "Yashkumar Jani".

// const candidate2 = {
//     firstName: 'Yagnik',
//     lastName: 'Thakar',
//     designation: 'Class-2 Officer',
// };
// //function borrowing (Uska Function Udhar le liya)
// candidate.printName.call(candidate2);// Prints "Yagnik Thakar".

//------------------------------------------------------------------------------


// Scenario 1.2 without any dependency on other object :

//common generic function
// let getDetails = function () {
//     console.log("Print Details of Candidate",this);
// }

// const candidate = {
//     firstName: 'Yashkumar',
//     lastName: 'Jani',
//     designation: 'Front-end Developer',
// };
// getDetails.call(candidate);// Prints "Details of Candidate Yashkumar Jani".

// const candidate2 = {
//     firstName: 'Yagnik',
//     lastName: 'Thakar',
//     designation: 'Class-2 Officer',
// };
// getDetails.call(candidate2);// Prints "Details of Candidate Yagnik Thakar".

//------------------------------------------------------------------------------


// Scenario 1.3 without any dependency on other object and pass multiple parameters in function :

//common generic function
// let locationDetail = function (location, country) {
//     console.log("Location of",this.firstName + " is",location +" in " + country);
// }

// const candidate = {
//     firstName: 'Yashkumar',
//     lastName: 'Jani',
//     designation: 'Front-end Developer',
// };
// //pass the parameters in function
// locationDetail.call(candidate, "Amreli", "India");// Prints "Location of Yashkumar is Amreli in India".


// const candidate2 = {
//     firstName: 'Yagnik',
//     lastName: 'Thakar',
//     designation: 'Class-2 Officer',
// };
// //pass the parameters in function
// locationDetail.call(candidate2, "Delhi", "India");// Prints "Location of Yagnik is Delhi in India".

//------------------------------------------------------------------------------


// Scenario 2 with apply method :
//using apply method, we can pass the multiple parameter in function using the Array List form

//common generic function
// let locationDetail = function (location, country) {
//     console.log("Location of",this.firstName + " is",location +" in " + country);
// }

// const candidate = {
//     firstName: 'Yashkumar',
//     lastName: 'Jani',
//     designation: 'Front-end Developer',
// };
// //pass the parameters in function
// locationDetail.apply(candidate, ["Amreli", "India"]);// Prints "Location of Yashkumar is Amreli in India".


// const candidate2 = {
//     firstName: 'Yagnik',
//     lastName: 'Thakar',
//     designation: 'Class-2 Officer',
// };
// //pass the parameters in function
// locationDetail.apply(candidate2, ["Delhi", "India"]);// Prints "Location of Yagnik is Delhi in India".

//------------------------------------------------------------------------------


// Scenario 3 with bind method :
//We don't wanna use generic function directly. So, bind is helping to store copy data and then we can use. 

//common generic function
let printDetails = function (location, country) {
    console.log("Location of",this.firstName + " is",location +" in " + country);
}

const candidate = {
    firstName: 'Yashkumar',
    lastName: 'Jani',
    designation: 'Front-end Developer',
};
//here we have created the copy of candidate and stored in to the another variable.
let candidateOneData = printDetails.bind(candidate, "Amreli", "India");// Prints "Location of Yashkumar is Amreli in India".
candidateOneData();
console.log(candidateOneData);

const candidate2 = {
    firstName: 'Yagnik',
    lastName: 'Thakar',
    designation: 'Class-2 Officer',
};
let candidateTwoData = printDetails.bind(candidate2, ["Delhi", "India"]);// Prints "Location of Yagnik is Delhi in India".
candidateTwoData();
console.log(candidateTwoData);


