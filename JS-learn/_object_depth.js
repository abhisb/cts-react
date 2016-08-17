"use strict"

// var person = {
//     name: '',
//     age: 32
// };


// how to property existence ?

// // way-1 :
// console.log(person.hasOwnProperty('name'));

// // way-2
// if (person.name) {
//     console.log('name property exsit..');
// }

// // way-3
// if ("name" in person) {
//     console.log('name property exsit..');
// }

//---------------------------------------------------

// enumerating

// var person = {
//     name: 'Nag',
//     age: 32
// };

// for (var prop in person) {
//     console.log(prop + ":" + person[prop]);
// }


//---------------------------------------------------

// ES-5  - accessor properties


// var person = {
//     _name: 'Nag', // data property
//     set name(newName) { // accessor property
//         console.log('set...');
//         if (newName) {
//             this._name = newName;
//         }
//     },
//     get name() {
//         console.log('get...');
//         return this._name;
//     }
// };


// person.name = "New Nag"; // set
// console.log(person.name); // get


//---------------------------------------------------

// objs constraints


var person = {
    name: 'Nag'
};

// Object.defineProperty(person, "name", { configurable: false, writable: false, enumerable: false });

//
// //delete person.name;
// person.name = '...';
// console.log(person.name);


//Object.preventExtensions(person);
//Object.seal(person);
Object.freeze(person); // immutable obj

//person.newProp = '...';
//delete person.name;
// person.name = '...'

//--------------------------------------------------------