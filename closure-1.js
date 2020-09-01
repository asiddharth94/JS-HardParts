/** A function has two parts
 *      - label (name of the function)
 *      - definition (code inside the function)
 *  When we return a function, only the definition is returned */

function createOuterFunc() {
    function multiplyBy2(num) {
        return num*2;
    }
    
    return multiplyBy2;
}

/** Since we are invoking the createOuterFunc, the constant defined as secondFunc will now hold what's returned from that function, i.e. the 'definition' of multiplyBy2 [think as if both multiplyBy2 and secondFunc labels are pointing to the same code].
 * If we did not had the parentheses, then the secondFunc would've been equal to the createOuterFunc, thus, pointing to createOuterFunc's definition
 */

const secondFunc = createOuterFunc(); 

/** Since, the secondFunc holds the same definition as of multiplyby2,
 * - below line invokes it and returns 10
 */

secondFunc(5);
