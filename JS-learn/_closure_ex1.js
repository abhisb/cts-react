// ex1 - : counter module



// function init() {

//     var count = 0; // private

//     // public - methods ( closures )
//     return {
//         doCount: function() {
//             count++;
//         },
//         getCount: function() {
//             return count;
//         }
//     };

// }


// var counter = init();

//--------------------------------------------------


//design pattern : IIFE ( Immdiatly Executable Function Expression or Self Executable function)


var counter = (function() {


    var count = 0; // private

    // public - methods ( closures )
    return {
        doCount: function() {
            count++;
        },
        getCount: function() {
            return count;
        }
    };

})();