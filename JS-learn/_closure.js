/*

    A closure is a function having access to the parent scope,
    even after the parent function has closed.


    why we need ?

    2 advantages:

     --> to abstract public behav of any module
     --> while executing asynchronously on event , still able to access parent-scoped data.

*/

function teach(sub) {

    console.log('teaching...' + sub);
    var notes = sub + " notes"

    var i = 100;

    function learn() {
        console.log('learning with ' + notes);
    }

    console.log('teaching ends....');

    return learn;

} // context destroyed... ( arg & local variables removed from stack-memory )


var learnFunc = teach('JS'); // context created....with arg & local variables

learnFunc();
learnFunc();