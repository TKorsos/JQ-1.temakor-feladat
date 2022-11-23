
// basic
$('#basic').css('color','blue');

$('#basicBtn').click(function(){
    $('#basic').text('Az eredeti szöveg helyett ez lesz már!');
});

// selectors
$('#line').css('lineHeight', '3rem');

$('.red').css('color', 'red');

$('span').css('fontSize', '2rem');

$('[target="_blank"]').css('backgroundColor', 'lime');

$('ul li:first-child').css('font-style', 'italic');

// events
$('#events > div').css('margin-bottom', '2rem');

//mouse
$(document).ready(function(){
    $('#clickBtn').click(function(){
        $('#click').css('font-weight', 'bold');
    });
});

$(document).ready(function(){
    $('#dblclickBtn').dblclick(function(){
        $('#dblclick').css('font-weight', 'bold');
    });
});

$(document).ready(function(){
    $('#hover').hover(function(){
        $(this).css('font-weight', 'bold');
    },
    function() {
        $(this).css('font-style', 'italic');
    });
});

$(document).ready(function(){
    $('#mouseenter').mouseenter(function(){
        $(this).css('backgroundColor', 'purple');
    });
});

$(document).ready(function(){
    $('#mouseleave').mouseleave(function(){
        $(this).css('backgroundColor', 'orangered');
    });
});

//keyboard
$(document).ready(function(){
    $('#keypress').keypress(function(){
        $(this).css('backgroundColor', 'lime');
    });
});

$(document).ready(function(){
    $('#keyup').keyup(function(){
        $(this).css('backgroundColor', 'red');
    });
});

//form
$(document).ready(function(){
    $('#change').change(function(){
        $(this).css('fontSize', '5rem');
    });
});

$(document).ready(function(){
    $('#focus').focus(function(){
        $(this).css('borderWidth', '1rem');
    });
});

$(document).ready(function(){
    $('#blur').blur(function(){
        $(this).css('backgroundColor', 'yellow');
    });
});

$(document).ready(function(){
    $('#focusAndBlur').focus(function(){
        $(this).css('borderWidth', '1rem');
    });
    $('#focusAndBlur').blur(function(){
        $(this).css('backgroundColor', 'yellow');
    }
    );
});

//window
$(document).ready(function(){
    $(window).resize(function(){
        $('#size').css({'backgroundColor' : 'blue', 'color' : 'white'});
    });
});

$(document).ready(function(){
    $('#scroll').scroll(function(){
        $(this).css({'backgroundColor' : 'red', 'color' : 'yellow'});
    });
});

//effects
// show-hide
$('#effects div').css('margin-bottom', '2rem');

$(document).ready(function(){
    $('#showBtn').click(function(){
        $('#hide').show();
    });
});

$(document).ready(function(){
    $('#hideBtn').click(function(){
        $('#show').hide();
    });
});

$(document).ready(function(){
    $('#showBtnAnim').click(function(){
        $('#hide').show(3000);
    });
});

$(document).ready(function(){
    $('#hideBtnAnim').click(function(){
        $('#show').hide(4000);
    });
});

$(document).ready(function(){
    $('#toggleBtn').click(function(){
        $('#toggle').toggle();
    });
});

$(document).ready(function(){
    $('#toggleBtnAnim').click(function(){
        $('#toggle').toggle(2000);
    });
});

//fade
$(document).ready(function(){
    $('#fadeInBtn').click(function(){
        $('#fadeIn').fadeIn();
    });
});

$(document).ready(function(){
    $('#fadeInBtnAnim').click(function(){
        $('#fadeIn').fadeIn('slow');
    });
});

$(document).ready(function(){
    $('#fadeOutBtn').click(function(){
        $('#fadeOut').fadeOut();
    });
});

$(document).ready(function(){
    $('#fadeOutBtnAnim').click(function(){
        $('#fadeOut').fadeOut('fast');
    });
});

$(document).ready(function(){
    $('#fadeToggleBtn').click(function(){
        $('#fadeToggle').fadeToggle();
    });
});

$(document).ready(function(){
    $('#fadeToggleBtnAnim').click(function(){
        $('#fadeToggle').fadeToggle(5000);
    });
});

$(document).ready(function(){
    $('#fadeToBtn').click(function(){
        $('#fadeTo').fadeTo('slow', 0.4);
    });
});

//slide
$(document).ready(function(){
    $('#slideDownBtn').click(function(){
        $('#slideDown').slideDown();
    });
});

$(document).ready(function(){
    $('#slideDownBtnAnim').click(function(){
        $('#slideDown').slideDown(5000);
    });
});

$(document).ready(function(){
    $('#slideUpBtn').click(function(){
        $('#slideUp').slideUp();
    });
});

$(document).ready(function(){
    $('#slideUpBtnAnim').click(function(){
        $('#slideUp').slideUp(5000);
    });
});

$(document).ready(function(){
    $('#slideToggleBtn').click(function(){
        $('#slideToggle').slideToggle();
    });
});

$(document).ready(function(){
    $('#slideToggleBtnAnim').click(function(){
        $('#slideToggle').slideToggle(4000);
    });
});

//animate
$(document).ready(function(){
    $('#animateBtn').click(function(){
        $('#animate > p').animate({lineHeight: '2rem'}, 'slow');
    });
});

$(document).ready(function(){
    $('#animateBtnMulti').click(function(){
        $('#animate').animate({
            lineHeight: '2rem',
            top: "150px",
            left: "100px"
        }, 'fast');
    });
});

//callback
$(document).ready(function(){
    $('#callbackBtn').click(function(){
        $('#callback').hide(3000, function(){
            alert('Eltűnik a szöveg majd előjön egy alert üzenet!');
        });
    });
});

$(document).ready(function(){
    $('#nocallbackBtn').click(function(){
        $('#callback').hide(10000);
        alert('Előjön egy alert üzenet majd eltűnik a szöveg!');
    });
});

