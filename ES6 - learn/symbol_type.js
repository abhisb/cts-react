// let mySymbol = Symbol('my-symbol');
//console.log(typeof mySymbol);
// console.log(mySymbol.toString());


// var MY_SYMBOL = Symbol('calculate_event');


// var s1 = Symbol('event');
// var s2 = Symbol('event');


// console.log(s1 === s2);


//----------------------------


// let s = Symbol.for('event');
// let s2 = Symbol.for('event2');

// console.log(s === s2);

//---------------------------


// let o = {
//     title: 'Es6',
//     [Symbol.for('article')]: 'exciting es6 featues..'
// };


// console.log(o[Symbol.for('article')]);


//-------------------------------------


// Built-in Symbols


let Blog = function() {

}

Blog.prototype[Symbol.toStringTag] = 'Blog Class';

let blog = new Blog();
console.log(blog.toString());


//-------------------------------------