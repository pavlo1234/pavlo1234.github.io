$(document).ready(function(){
    $(window).on("resize", function(){
        if($(window).width() > 1024)
            $(".header__menu").css("display", "flex");
        else 
            $(".header__menu").css("display", "none");
    });
    $(".header__menu-switch").click(function(){
        $(".header__menu").css("top", $(".header").outerHeight())
        $(".header__menu").slideToggle();
        if($(".header__menu").css("display") !== "none")
            $(".header__menu").css("display", "flex");
    });
    
});