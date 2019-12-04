document.addEventListener("DOMContentLoaded", function(){
    var tt_mn1 = 'duoi';
    var dt_mn1 = document.getElementById('mn1'); 

    window.addEventListener('scroll', function(){
        // console.log(window.pageYOffset);
        if(pageYOffset > (545)){
            if(tt_mn1=='duoi'){
                dt_mn1.classList.remove('opct');
                tt_mn1 = 'tren';
            }
        }
        if(pageYOffset < (545)){
            if(tt_mn1=='tren'){
                dt_mn1.classList.add('opct');
                tt_mn1 = 'duoi';
            }
        }
    })

    var tt_ds = 'an';
    var dt_icon = document.getElementById('icon'); 
    var dt_ds = document.getElementById('ds');
    
    dt_icon.onclick = function(){
        if(tt_ds=='an'){
            console.log(1);
            dt_ds.classList.remove('opct');
            tt_ds = 'hien';

        }
        else{
            console.log(2);
            dt_ds.classList.add('opct');
            tt_ds = 'an';
        }
    }
})