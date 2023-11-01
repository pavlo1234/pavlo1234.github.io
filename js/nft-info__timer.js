$(document).ready(() => {
    let timer_elem = ".nft-info__timer"; 
    set_timer($(timer_elem).attr("data-time-end"), timer_elem);
});