var trainer = {
    doTeach: function() {
        var name = 'Nag'; // moved to heap when context is destroy
        console.log(name + ' teaching...');
        setTimeout(function() {
            try {
                // var v = 200;
                // if (v === 100) {
                //     throw new Error('oops...');
                // }
                console.log(name + ' after timout, teaching further...');
            } catch (e) {
                console.log('i caught ' + e.message);
            }
        }, 5000);
    }
};

trainer.doTeach();