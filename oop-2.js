function UserCreator(name, score) {
    this.name = name;
    this.score = score;
}

UserCreator.prototype.increment = function() {

    console.log('outer func', this); // refers to the created object (i.e, what's on the left of the dot)

    // function add1() {
    //     this.score++;
    //     console.log('inner func', this); // refers to window object
    // }

    const add1 = () => this.score++; //in arrow functions, 'this' is lexically scoped, i.e, it refers
    //to where it is defined. => THE 'THIS' INSIDE THE ARROW FUNCTION'S EXECUTION CONTEXT WILL REFER TO 
    //WHATEVER WAS THE VALUE OF 'THIS', WHEN THE ARROW FUNCTION WAS DEFINED.

    add1();
}

UserCreator.prototype.login = function() {
    console.log('Login');
}

const user1 = new UserCreator('Eva', 10);

user1.increment();

//NOTE - in simple terms, lexical scoping means, where I was saved determines something about me
// when I get called, 'this' in our case

// the syntactic sugar - CLASS

class UserCreator1 {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }

    increment() {
        this.score++;
    }

    login() {
        console.log("Login");
    }
}

const user2 = new UserCreator1('Will', "12");

user2.login();

//under the hood, this example is doing exact same as what we did in first example. exact same!
//here also, when we declare UserCreator1, it automatically gets an object attached to it (similarly,
//like we had for our function-object combos) , and that object has a property "prototype" which was our
//empty object for the shared functions.

//ON A VERY HIGH LEVEL, just think of it as - the function bit of our func-obj combo,
//goes inside constructor & the object bit, where we store our shared functions , 
//are just listed out inside the class. These listed funcs are then grabbed and then put to the
//'prototype' object automatically for us

// Refresher => the 'prototype' object - here, we put all the functions that we want the returned
// objects from calling UserCreator to have access to

//When it comes to subclassing, classes implements some things under the hood quite differently,
//we'll see that in next sections. till this point, its exact same (i'm repeating this a lot :D)