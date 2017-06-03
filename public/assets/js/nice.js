$(document).ready(function () {

    // $("html").niceScroll({
    //     cursorcolor: "#f046a2",
    //     cursorborder: "1px solid #f046a2",
    //     enablekeyboard: true,
    //     touchbehavior: true
    //
    // });


    try {
        var divs = $(".item").get().sort(function(){ 
          return Math.round(Math.random())-0.5;
        }).slice(0,6);
        
        $(divs).appendTo(divs[0].parentNode).show();

    } catch (error) {
        
    }

    
});