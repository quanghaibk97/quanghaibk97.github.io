document.addEventListener("DOMContentLoaded", function(){
    var tt_run1 = 'an';
    var dt_run1 = document.getElementById('run1'); 
    var dt_html1 = document.getElementById('html1');
    var dt_html2 = document.getElementById('html2');

    var tt_run2 = 'an';
    var dt_run2 = document.getElementById('run2'); 
    var dt_html12 = document.getElementById('html12');
    var dt_html22 = document.getElementById('html22');

    var tt_run3 = 'an';
    var dt_run3 = document.getElementById('run3'); 
    var dt_html23 = document.getElementById('html23');
    console.log(dt_run3);
    dt_run1.onclick = function(){
        if(tt_run1=='an'){
            console.log(1);
            dt_html1.classList.add('opct');
            dt_html2.classList.remove('opct');
            tt_run1 = 'hien';

        }
        else{
            console.log(2);
            dt_html1.classList.remove('opct');
            dt_html2.classList.add('opct');
            tt_run1 = 'an';
        }
    }

    dt_run2.onclick = function(){
        if(tt_run2=='an'){
            console.log(1);
            dt_html12.classList.add('opct');
            dt_html22.classList.remove('opct');
            tt_run2 = 'hien';

        }
        else{
            console.log(2);
            dt_html12.classList.remove('opct');
            dt_html22.classList.add('opct');
            tt_run2 = 'an';
        }
    }

    dt_run3.onclick = function(){
        if(tt_run3=='an'){
            console.log(1);
            dt_html23.classList.add('cam');
            tt_run3 = 'hien';

        }
        else{
            console.log(2);
            dt_html23.classList.remove('cam');
            tt_run3 = 'an';
        }
    }
})

