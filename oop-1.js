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
console.log(`for type one ${result1}`);

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

//What do we do then? FUNCTIONS - wrapping a set of instructions which can be used over and again, eliminating repetitve code. WRITE ONCE, CALL MANY TIMES!
//In our case, we can wrap our creation of an object in a function, then we can call that function and fill in the properties, and then return the complete object and then store it in a variable