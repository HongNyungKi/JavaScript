$(function () {
    $(".menu--main li").hover(function () {
        $(this).find(".menu--sub").fadeToggle(220);
    })
});