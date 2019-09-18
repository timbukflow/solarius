$(document).ready(function () {
    
    
    // timer countdown
    var countDownDate = new Date("21 September 2019 17:50:00 GMT+02:00").getTime();
    var x = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById("countdowntimer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
        if (distance < 0) {
            $('#countdown').fadeOut("slow");
        }
    }, 1000);
    
    
    //Responsive Navigation
    
    $('.menu').click(function() {
        $('.menu').hide();
        $('.topnav .navresp').css('display', 'block');
        $('.close').css('display', 'block');
    });
    
     $('.close').click(function() {
        $('.menu').show();
        $('.topnav .navresp').hide();
        $('.close').hide();
    });
    
    
    //Sroll resizing Navigation
    
    $(document).on('scroll', function () {
        if ($(document).scrollTop() > 10) {
        $('#navcontainer').css('padding', '20px 5%'); 
    }   else {
        $('#navcontainer').css('padding', '40px 5%'); 
    }
    });
    
    //Accordion
    
    $('.accordionButton').click(function() {
        event.preventDefault();
        $(this).toggleClass('openred');
        $accordion_title = $(this);
        $accordion_content = $(this).next('.accordion-list');
        $('.accordion-list').not($accordion_content).slideUp();
        $('.accordion-list').not($accordion_content).prev('.accordionButton').removeClass('openred');
        $accordion_content.stop(true, true).slideToggle(400);
        if ($(this).hasClass('openred')) {
          ScrollToTop();
    }
    });

    /*function ScrollToTop() {
      setTimeout(function() {
        $('html, body').animate({
          scrollTop: $($accordion_title).offset().top - 20
        }, 600);
      }, 600);
    }*/
    
    //Impressum
    

    $('.togglelink').click(function() {
        var totoggle = $(this).attr("data-toggle");
        $(totoggle).toggle();
        
        if ($(totoggle).is(":visible")) {
            $('html,body').animate({scrollTop:$(totoggle).offset().top}, 1000,'easeInOutExpo');
        } 
        
    });
});