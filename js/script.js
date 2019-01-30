$(document).ready(function(){

    $(".js-button-form").click(function(){
        $(".form").fadeIn();
    });

    $(".block__exit").click(function(){
        $(".form").fadeOut();
    });

    $(".js-button-menu-tab").click(function(){
        $(".media-menu").fadeIn();
    });

});