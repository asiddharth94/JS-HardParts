/** Object Oriented paradigm - at the core, we are storing functions/properties with their
 * associated data on objects.
 */

/** The fundamental goal - CAN I GET MY RELEVANT FUNCTIONALTY(e.g. incrementScore) ON THE RELEVANT DATA(e.g. user)?
 * If this is achieved, everything falls in place
 */

/** The principle of Encapsulation -
 * bundling of data, along with the methods and properties that operates on the data
 */


//type one - creating object using object literal
const user1 = {
    name: 'Mike',
    score: 3,
    incrementScore: function() {
        return ++this.score;
    }
};

const result1 = user1.incrementScore();

//type two - creating an empty object and assigning properties/methods to it using dot notation

//sqaure bracket notation should only be used if we want to evaluate what's inside the bracket, say, maybe if we don't know the property name yet, like example, if we're getting it from some response. Then we can have the variable fot it in place which will later be evaluated to the property name

const user2 = {};

user2.name = 'Sam';
user2.score = 6;
user2.incrementScore = function() {
    return ++this.score;
};

//type three - using Object.create()

const user3 = Object.create(null); // At the end of this line, an empty object is created.
//even if we pass an object to create(), it still creates an empty object. Similar to what
//we'll get on line 29, but there's a difference because of how it works under the hood.
//We'll see this later :)
user3.name = 'Jon';
user3.score = 9;
user3.incrementScore = function() {
    return ++this.score;
};

//At this point , we're writing very repetitive code, which violates our DRY priniciple

// SOLUTION - 1
//What do we do then? FUNCTIONS - wrapping a set of instructions which can be used over and again, eliminating repetitve code. WRITE ONCE, CALL MANY TIMES!
//In our case, we can wrap our creation of an object in a function, then we can call that function and fill in the individual properties, and then return the complete object and then store it in a variable

function createUserOne(name, score) {
    
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.incrementScore = function() {
        return ++this.score;
    }

    return newUser;
}

const user4 = createUserOne('Amy', 12);
const user5 = createUserOne('Megan', 15);

user4.incrementScore();
user5.incrementScore();

//So, solution 1 is doing our job(creating objects with bundling data and functionality
//together) but it is fundamentally unusable. Now, we'll see why!

//Because each time we create an user object, we allocate space in our computer's memory for
//the user's data and functions. And as we see, we are making same function for each user
//object separately. So, this solution is fundamentally unusable as it is creating a copy
//of the same function for each object. Just think about the space allocation for a huge amount
//of data! (e.g if thousands of users have hundreds of functions attached to each one of them -
//we'll be just wasting space, right? as all objects have exactly the same functions)

//DO WE HAVE A BETTER SOLUTION? YES, WE DO! 

//SOLUTION - 2

//store all our functions in one object , and if the interpreter doesn't find the methods on the
//objects on which it is called, it could look up to our object(the one which has the functions),
//if it's there - LET US CREATE THAT LINK!


const functionStore = {
    incrementScore: function() {
        return ++this.score;
    }
};

function createUserTwo(name, score) {
    const newUser = Object.create(functionStore); //refer Line:42 - this line creates an empty object
                // 'newUser' but when we create an object using Object.create, the newly created
                // object gets a hidden property '__proto__', which creates a 'bond' to the 
                // argument which we pass, functionStore in this case.
    newUser.name = name;
    newUser.score = score;
    return newUser;
}

/**
 * MDN definition - 
 * The Object.create() method creates a new object, using an existing object as the prototype of the
 * newly created object.
 */

 //This built-in feature is called PROTOTYPE CHAIN

const user6 = createUserTwo('Mark', 22);
console.log(user6.incrementScore()); //returns 23 - once it could not find the incrementScore 
//function on user6, it looks up in the functionStore 