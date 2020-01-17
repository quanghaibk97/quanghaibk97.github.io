// document.addEventListener("DOMContentLoaded", function(){
//     var tt_mn1 = 'duoi';
//     var tt_mn2 = '0';
//     var dt_mn = document.getElementById('mn'); 
//     window.addEventListener('scroll', function(){
//         if(pageYOffset > 450){
//             if(tt_mn1=='duoi'){
//                 tt_mn1 = 'tren';
//             }else if(tt_mn2 > pageYOffset){
//                 dt_mn.classList.remove('opct');
//             }else{
//                 dt_mn.classList.add('opct');
//             }
//         }
//         if(pageYOffset < 450){
//             if(tt_mn1=='tren'){
//                 dt_mn.classList.add('opct');
//                 tt_mn1 = 'duoi';
//             }
//         }
//         tt_mn2 = pageYOffset;
//     })
// })

// start time line
function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
var items = document.querySelectorAll(".timeline li");
// code for the isElementInViewport function

function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
        if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
        }
    }
}
window.addEventListener("load", callbackFunc);
window.addEventListener("scroll", callbackFunc);
// end timeline