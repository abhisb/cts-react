"use strict";


/*

    to loop any iterable objects.

*/

var categories = ["hw", "sw", 'someware'];

for (var item of categories) {
    console.log(item);
}

//---------------------------------------

var codes = "ABCDE";
var count = 0;
for (var code of codes) {
    console.log(code);
    count++;
}
console.log(count);


//---------------------------------------