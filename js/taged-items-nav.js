$(document).ready(() => {
    $(".tabs .tab").on("click", function() {
        let tabs = $(this).parent();
        let widget = $(tabs).parent();
        let pages = $(widget).find(".items .item");

        $(tabs).children(".tab").removeClass("tab_active");
        $(this).addClass("tab_active");

        let curr_tag = $(this).attr("data-tag");

        $(pages).addClass("item_hidden");
        $($(widget).find(".items .item[data-item-tag=\""+curr_tag+"\"]")).removeClass("item_hidden");
        
    });
});