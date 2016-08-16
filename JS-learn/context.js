/*

       Execution Context
       ------------------

       memory/context includes local&arg variables with values to execute set of instructions 



       context - phases
       

       1. context-creation

          all variables in that context are get hoisted(lifting-up) to 
          top with default value ( undefined )

       2. context-execution

           all the instructions will get executed in sequence.

      --------------------------------------------------------------------------------------- 


      by default we have one 'global-execution-context' when initial JS loaded into envi.

      after global-obj will get created.. ( if browser )

      'window'' === this


      all global-variables will become properties of 'global-obj' ( imp-note )

      -----------------------------------------------------------------------------------------


      every function-invocation 
      will one new 'execution-context' which is child of above context.

      -----------------------------------------------------------------------------------------

      best-practice:

      // all variables must declare at top of file/function to avoid hoisting confuse. 

       -----------------------------------------------------------------------------------------

*/



//console.log(a);
//var a = 12;


//-------------------------------


// var a = 12;


// function f1() {
//     var a = 0;
//     console.log(a);
//     a = 13;
// }

// f1(); // will create child-context of global-context

//----------------------------------------------


var a = 12;

function f1() {

    //var a=0;

    function f2() {
        console.log(a);
    }

    f2(); // f2-context  ---> f1-context

    var a = 13;

    //f2(); // f2-context  ---> f1-context

    return f2;

}

var f2 = f1(); // f1-context  ---> global-context
f2(); // f2-context  ---> f1-context