$(document).ready(function() {

$(".tw1").click(function() {
    window.location.href = "https://curioscat-api.blogspot.com/?m=0&cc=1";
});

var footheight = $(".footer-x").outerHeight(true)
$('.footer-x').css('margin-bottom', "-"+footheight+'px');

});

