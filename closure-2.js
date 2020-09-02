/** When a function returns an inner function, and if the inner function
 * is using any data/variable or any sort of thing, which is not defined inside the inner function,
 * (may be defined in outer function or the next to it on the call stack),
 * then the 'return' statement ships this data/variables along with the function definition.
 * -
 * Consider it as a backpack coming out along with the function definition,
 * which holds the things required by the 'returned inner function'.
 * This backpack is a permanent store & will always be available for the 'returned inner function'.
 * This is attached with the function but not stored in the global memory and thus, cannot be accessed directly.
 */

 /** This function returns the definition of incrementCounter along with a backpack
  * which will hold the counter variable. Only the returned definition can use this backpack.
  */
function createOuterFunc() {
    let counter = 0;

    function incrementCounter() {
        return ++counter;
    }

    return incrementCounter;
}

/** The constant secondFunc is a new label for the function definition of incrementCounter 
 * Thus, secondFunc and incrementCounter have the same function definition now
*/

const secondFunc = createOuterFunc();

/** Invokes the function definition
 * - it will first look for the 'counter' variable in local memory (present in the newly created execution context)
 * - if it does not find it there, before moving to the global memory
 * - it checks in the backpack, shipped along with the returned function and updates the value there
 */

secondFunc(); // returns 1
secondFunc(); // returns 2

/** When we call the createOuterFunc(), and the code starts running inside it,
 * Then , immediately as we save the function incrementCounter (when we counter line 18), a hidden property '[[scope]]' on the function incrementCounter, creates a link to the local memory and attaches all the data/properties (not all the data/properties in that local memory but only which our function could ever ask for) to the function definition incrementCounter. (this happens under the hood)
 * We cannot do incrementCounter.[[scope]] as it is a hidden property.
 * Now, when we return the inner function or say, bring out this function into our new function, i.e. secondFunc (as on line 29), it brings out all that local memory that was attached on the [[scope]] property along with it in, what we already discussed, 'the backpack'.
 */

 /** NOTE - INDIVIDUAL BACKPACK 
  * The backpack reutrned along with the definition is unique for the new function label, i.e, if we have say, const thirdFunc = createOuterFunc(), then the backpacks associated with secondFunc and thirdFunc are different/separate and won't interfere or update/modify values or data in other's backpack.
 */