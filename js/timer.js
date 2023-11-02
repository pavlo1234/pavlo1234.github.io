function set_timer(date, timer_elem) {
    let timer = $(timer_elem);
    let display = $(timer).find(".timer__display");
    let digits_keys = ["Days", "Hours", "Minutes", "Seconds"];

    let number = $("<div></div>").addClass("timer__number").append( 
        $("<span></span>").addClass("timer__digits"),
        $("<span></span>").addClass("timer__subtext")
    );
    let filler = $("<span></span>").addClass("timer__filler").text(":");

    let coeff = [24*3600, 3600, 60, 1];
    let N = coeff.length;

    let time_end = new Date(date).getTime();
    
    function change_time(time_now) {
        time_now = new Date().getTime();

        if(time_end < time_now) return;
        time = (time_end - time_now) / 1000;

        for(let i = 0; i < N; i+=1) {
            let count = Math.trunc(time / coeff[i]);
            if(count >= 0) {
                let number_cp = $($(display).find(".timer__number[data-units=\""+digits_keys[i]+"\"]"));
                let filler_cp = $(number_cp).siblings(".timer__filler")[0];
                
                if($(number_cp).length === 0) {
                    number_cp = $(number).clone().attr("data-units", digits_keys[i]);
                    filler_cp = $(filler).clone();
                    $(display).append(number_cp);
                    if(i < N-1) $(display).append(filler_cp);
                }
                $($(number_cp).find(".timer__digits")).text(count+"");
                $($(number_cp).find(".timer__subtext")).text(digits_keys[i]); 
               
                time %= coeff[i];
            }
        }

        setTimeout(change_time, 1000);
    }

    change_time();

    
}
