/* 
 * Exercise 4.2 : Create an object called Teacher derived from the Person class,
 * and implement a method called teach which receives a string called subject, andprints out:
 * [teacher's name]is now teaching[subject]
*/

class Person {
    constructor(name) {
        this.name = name;
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    teach() {
        console.log(this.name + " teaches " + this.subject);
    }
}

Person.prototype.initialize = function (name, subject) {
    this.name = name;
    this.subject = subject;
}
// TODO: create the class Teacher and a method teach
var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");
