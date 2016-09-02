(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./greet":5,"./pack1/Person":6}],2:[function(require,module,exports){
/**
 * http://usejsdoc.org/
 */

var messages=require('./greet-messages.json');

function greet() {
	console.log(messages['en']);
}

module.exports = greet;
},{"./greet-messages.json":4}],3:[function(require,module,exports){
/**
 * http://usejsdoc.org/
 */

var messages=require('./greet-messages.json');

function greet() {
	console.log(messages['es']);
}

module.exports = greet;
},{"./greet-messages.json":4}],4:[function(require,module,exports){
module.exports=
{
"en":"Hello",
"es":"OLAAA"
}
},{}],5:[function(require,module,exports){
/**
 * http://usejsdoc.org/
 */

var en = require('./en');
var es = require('./es');

function greet(locale) {
	if (locale === 'en') {
		en();
	}
	if (locale === 'es') {
		es();
	}
}



function func() {
	console.log('....');
}

module.exports = greet;
},{"./en":2,"./es":3}],6:[function(require,module,exports){
/**
 * http://usejsdoc.org/
 */



//function Person(name,age){
//	this.name=name;
//	this.age=age;
//}
//
//Person.prototype.sayName=function(){
//	console.log('im '+this.name);
//}


class Person{
	constructor(name,age){
		this.name=name;
		this.age=age;
	}
	sayName(){
		console.log('im '+this.name);
	}
}

//var person=new Person('Nag',32);

module.exports=Person;

},{}]},{},[1]);
