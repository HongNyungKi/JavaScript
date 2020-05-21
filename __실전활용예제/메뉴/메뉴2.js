$(function () {
    $(".menuBar__main li").mouseenter(function (event) {
        //마우스를 가져다댔을때
        $(this).find(".menuBar__sub").slideDown("fast"); //서브메뉴 내려옴
        $(this).find("a").css("color", "black"); //대메뉴의 색이 검은색으로 바뀜
        $(this).find("li").parent().css("background", "darkgray"); //내려온 서브메뉴의 배경색
    }).mouseleave(function (event) {
        $(this).find(".menuBar__sub").slideUp("fast");

        $(this).find("a").css("color", "white");

    })
});