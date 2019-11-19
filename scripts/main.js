$(document).ready(function () {
    
    
    // timer countdown
    
    function getNormalisedDatetime(dString) { // yyyy-mm-dd hh:mm:ss
        var parts = dString.split(" ");
        var dParts = parts[0].split("-");
        var tParts = parts[1].split(":");
        return new Date(dParts[0],dParts[1]-1,dParts[2],tParts[0],tParts[1],tParts[2]);
    }
    function pad(num) {
        return ("0"+num).slice(-2);
    }
    
    // Set the date we're counting down to
    var countDownDate = getNormalisedDatetime("2019-11-25 01:00:00").getTime();
    
    // Update the count down every 1 second
    var x = setInterval(function() {
        
        // Get todays date and time
        var now = new Date().getTime();
        
        // Find the distance between now an the count down date
        var distance = countDownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        
        // Display the result in the element with id="countdown"
        document.getElementById("countdown").innerHTML = days + " Tagen " + hours + " Stunden " + minutes + " Minuten " + seconds + " Sekunden ";
        
        // If the count down is finished, write some text 
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

    function ScrollToTop() {
      setTimeout(function() {
        $('html, body').animate({
          scrollTop: $($accordion_title).offset().top - 20
        }, 600);
      }, 600);
    }
    
    //Impressum
    

    $('.togglelink').click(function() {
        var totoggle = $(this).attr("data-toggle");
        $(totoggle).toggle();
        
        if ($(totoggle).is(":visible")) {
            $('html,body').animate({scrollTop:$(totoggle).offset().top}, 1000,'easeInOutExpo');
        } 
        
    });
});