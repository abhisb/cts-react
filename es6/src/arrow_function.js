"use strict";


// basic syntax


// var getPrice = () => 5.99;
// console.log(typeof getPrice);
// console.log(getPrice());

//---------------------------------


// var getPrice = count => count * 4.00;
// console.log(getPrice(2));



//---------------------------------


// var getPrice = (count, tax) => count * 4.00 * (1 + tax);
// console.log(getPrice(2, .07));

//---------------------------------


// var getPrice = (count, tax) => {
//     var price = count * 4.00;
//     price *= (1 + tax);
//     return price;
// };
// console.log(getPrice(2, .07))

//---------------------------------


function Person(name, age) {
    this.name = name;
    this.age = age;

    // setInterval(function() {
    //     this.age++;
    //     console.log(this.age);
    // }, 1000);

    setInterval(() => {
        this.age++;
        console.log(this.age)
    }, 1000);

}

// var p=new Person('Nag',32);


//----------------------------------------


// var invoice={
//     number:123,
//     process:function(){
//         console.log(this);
//     }
// };


// var invoice = {
//     number: 123,
//     process: () => console.log(this)
// };


var invoice = {
    number: 123,
    process: function() {
        return () => console.log(this.number);
    }
};

// invoice.process()();

var newInstance = {
    number: 456
};

//invoice.process().bind(newInstance)();
//invoice.process().call(newInstance);

//----------------------------------------


// var getPrice = () => 5.99;

// console.log(typeof getPrice);


//----------------------------------------




var nums = [1, 3, 10];
//nums.sort();
nums.sort((a, b) => { a - b });