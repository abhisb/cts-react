/**
 * http://usejsdoc.org/
 */




var greet=require('./greet');
greet('es');


var Person=require('./pack1/Person');
var person=new Person('Nag');
person.sayName();
person.name='New Nag';


// in another .js
var Person=require('./pack1/Person');
var p=new Person('Nag');
p.sayName();
