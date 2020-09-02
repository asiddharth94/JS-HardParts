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