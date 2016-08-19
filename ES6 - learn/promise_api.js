/*

    prmise API
    -----------

    to execute functions async...


*/

// module-1

var hotel = {
    getFood: function() {
        // 45 sec
        var promise = new Promise(function(resolve, reject) {
            setTimeout(function() {
                //resolve('BIRYANI>>>>');
                reject('SORRYYYYYY');
            }, 5000);

        });
        return promise;
    }
};


// module-2

var trainer = {
    doTeach: function() {
        console.log('teaching JS....');
        console.log('feels hungry....');
        console.log('ordering.. meals');
        var promose = hotel.getFood(); //...... sync -call  / blocks of current exe..
        console.log('got promise.. deffering my action..');
        promose.then(function(food) {
            console.log('yummy---' + food);
        }, function(reason) {
            console.log('Hell , shud go outside --' + reason);
        });
        console.log('finishing further tng.... end..');
    }
};

trainer.doTeach();