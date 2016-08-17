// why we need 'this' keyword ?

/*

    to access obj's properties in function we need obj's reference

    best-practice:-

    Never access obj's properties in function with reference var-names ,
    try to use 'this' keyword.

*/

//-----------------------------------------------------------------------

// var person = {
//     pname: 'Nag', // property of person-obj
//     sayName: function() {
//         //console.log('im '+pname);
//         //console.log('im '+person.pname);
//         console.log('im ' + this.pname);
//     }
// };

// //person.sayName(); // New context

// var p = person;
// person = { pname: 'Ria' };

// p.sayName();


//-----------------------------------------------------------------------



// var p1 = { name: 'Nag', sayName: function() { console.log('im ' + this.name) } };
// var p2 = { name: 'Ria', sayName: function() { console.log('im ' + this.name) } };


//-----------------------------------------------------------------------


/*

imp-note:

  --> every function invocation will create new 'execution-context'
  --> Each execution-context must be owned by 'one-object' ( this )



  by default every function binded to global-obj.


  **any function binded with an object , called as 'method'

*/


function sayNameForAll() {
    console.log('im ' + this.name);
}


// static function-binding

// var p1 = { name: 'Nag', sayName: sayNameForAll };
// var p2 = { name: 'Ria', sayName: sayNameForAll };


// sayNameForAll(); // im ?? : function-invocation   ( context owned by global-obj ) ( this ---> global-obj )
// p1.sayName(); // im Nag   : method-invocation     ( context owned by invoker-obj) ( this ---> invoker-obj)
// p2.sayName(); // im Ria


//-----------------------------------------------------------------------



var p1 = { name: 'Nag' };
var p2 = { name: 'Ria' };


var personUtil = {
    sayName: function(message, from) {
        console.log(message + ' im ' + this.name + " : " + from);
    },
    sayAge: function() {
        console.log('im ' + this.age + " old");
    }
};


//personUtil.sayName();  


// dynamic function-binding

// way-1
// personUtil.sayName.call(p1, "Hello", "BLR");
// personUtil.sayName.call(p2, "Hi", "CHN");

// way-2
// personUtil.sayName.apply(p1, ["Hello", "BLR"]);
// personUtil.sayName.apply(p2, ["Hi", "CHN"]);

// way-3  
var p1SaynameFunc = personUtil.sayName.bind(p1, "Dude", "IND"); // ( much used in ReactJS )

// on-event
setTimeout(p1SaynameFunc, 5000); // 


//-----------------------------------------------------------------------


// Constructor Functions


/*

    i need similar objects  e.g persons
    
    shud use either ConstructorFunction or Class ( from ES6 )

*/


function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayName = function() {
        console.log('im ' + this.name)
    };
    this.sayAge = function() {
        console.log('im ' + this.age)
    }
}

var p1 = new Person('Nag', 32); // constructor-invocation ( context owned by new-obj) ( this --> new-obj )
var p1 = new Person('Ria', 1);


//------------------------------------------------------------------------




/*

   in JS-lang , we can invoke functions in 4 ways

   1. function-invocation          ( this ---> global-obj  )
   2. method-invocation            ( this ---> invoker-obj )
   3. call/apply/bind invocation   ( this ---> arg-obj     )
   4. constructor-invocation       ( this ---> new-obj     )

*/