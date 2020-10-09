$(document).ready(function(){

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////// NAVBAR CHANGE ////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    window.addEventListener("scroll", function () {
        var nav = document.querySelector("nav");
        nav.classList.toggle("sticky", window.scrollY > 0);
    })

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////// ELEMENTS FADE ////////////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    var rightAnimationElements = $('.right-animation-element');
    var leftAnimationElements = $('.left-animation-element');
    var downAnimationElements = $('.down-animation-element');
    var innerDownAnimationElements = $('.inner-down-animation-element');

    $(window).on('scroll resize', function () {
        var windowHeight = $(window).height();
        var windowTopPosition = $(window).scrollTop();
        var windowBottomPosition = (windowTopPosition + windowHeight);

        rightAnimationElements.each(function () {
            var element = $(this);
            var elementHeight = element.outerHeight();
            var elementTopPosition = element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition) ) {
                element.addClass('fade-from-right');
            } 
            else {
                element.removeClass('fade-from-right');
            }
        });
        
        leftAnimationElements.each(function () {
            var element = $(this);
            var elementHeight = element.outerHeight();
            var elementTopPosition = element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition) ) {
                element.addClass('fade-from-left');
            } 
            else {
                element.removeClass('fade-from-left');
            }
        });

        downAnimationElements.each(function () {
            var element = $(this);
            var elementHeight = element.outerHeight();
            var elementTopPosition = element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition) ) {
                element.addClass('fade-from-down-image');
            } 
            else {
                element.removeClass('fade-from-down-image');
            }
        });
        
        innerDownAnimationElements.each(function () {
            var element = $(this);
            var elementHeight = element.outerHeight();
            var elementTopPosition = element.offset().top;
            var elementBottomPosition = (elementTopPosition + elementHeight);

            if ((elementBottomPosition >= windowTopPosition) &&
                (elementTopPosition <= windowBottomPosition) ) {
                element.addClass('fade-from-down-text');
            } 
            else {
                element.removeClass('fade-from-down-text');
            }
        });

        
    });
    $(window).trigger('scroll');

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

})