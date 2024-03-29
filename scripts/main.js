$(document).ready(function () {
    
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
    
    //Live
    $('#buttonZeitraffer').click(function() {
        $('#live').hide();
        $('#zeitraffer').css({"display": "block"});
        $('#buttonLive').css({"background-color": "#f5f5f5", "color": "#323232"});
        $('#buttonZeitraffer').css({"background-color": "#ff0000", "color": "#fff"}); 
    });
    $('#buttonLive').click(function() {
        location.reload();
        $('#live').css({"display": "block"});
        $('#zeitraffer').hide();
        $('#buttonZeitraffer').css({"background-color": "#f5f5f5", "color": "#323232"});
        $('#buttonLive').css({"background-color": "#ff0000", "color": "#fff"}); 
    });
    
    //Impressum

    $('.targetlink').click(function() {
        var $target = $($(this).data("target"));
        $target.slideToggle(600, function() {
            if ($target.is(":visible")) {
                $('html,body').animate({scrollTop: $target.offset().top}, 600);
            }
        });
      });
});