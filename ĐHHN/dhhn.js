$(document).ready(function(){
    var fixed = $(".content .left").offset().top;
    console.log(fixed)
    $(document).scroll(function () { 
        if($("html, body").scrollTop() > fixed) {
            $(".left").addClass("active");
            $(".right").addClass("left250")
        }
        else {
            $(".left").removeClass("active");
            $(".right").removeClass("left250")
        }
    });
})