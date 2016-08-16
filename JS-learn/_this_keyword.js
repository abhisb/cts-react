// why we need 'this' keyword ?


/*

    to access object's' properties in functions we need obj's reference 
    else it will try to access context propeties


    best-practice:

    never access obj's propeties in functions using reference-var names,
    always try to use 'this' keyword
    


*/

var person = {
    pname: 'Nag',
    sayName: function() {
        //console.log('im ' + pname);
        //console.log('im ' + person.pname);
        console.log('im ' + this.pname);
    }
};

//person.sayName(); // new-context


var p = person;
person = { pname: 'Ria' };

p.sayName();