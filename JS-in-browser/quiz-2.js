/*

 event-listerns will executed by obj ( context)
 who emitted that event.

*/


var trainerService = {
    doTeach: function() {
        console.dir(this);
        console.log(this.name + " going to teach React");
    }
};

var trainer = { name: 'Nag' };
var newTrainer = { name: 'Ria' };

var btn = document.getElementById('reactBtn');
//btn.addEventListener('click', trainer.doTeach);

// btn.addEventListener('click', function() {
//     //trainer.doTeach();
//     trainerService.doTeach.call(trainer);
// });

btn.addEventListener('click', trainerService.doTeach.bind(newTrainer));