document.addEventListener('DOMContentLoaded', function() {

    console.log('DOM ready..');
    
    var box = document.querySelector('.jumbotron');
    var hidebtn = document.querySelector('.btn-danger');
    var showBtn = document.querySelector('.btn-primary');


    hidebtn.addEventListener('click', function(e) {
        box.style.display = 'none';
    });

    showBtn.addEventListener('click', function(e) {
        box.style.display = '';
    });

});


//---------------------------------------------------