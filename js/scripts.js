$(document).ready(function() {
    // Menu Toggle
    var navigation = $('nav'),
        navigationToggle = $('.toggle');
    navigation.hide();
    navigationToggle.on('click', function() {
        $(this).toggleClass('open');
        navigation.fadeToggle('fast');
    });

    // Scroll Down
    var scrollToggle = $('.scroll'),
        scrollTarget = $('.body');
    scrollToggle.show();
    scrollToggle.on('click', function(e) {
        e.preventDefault();
        $('body').animate({
            scrollTop: scrollTarget.offset().top
        }, 1000);
    });

    // Reveal Animation
    var animatedElements = $('[data-animation]');
    $.each(animatedElements, function(index, value) {
        var $this = $(this),
            animation = $this.data('animation');
        $this.addClass('hidden').viewportChecker({
            classToAdd: 'visible animated ' + animation,
            offset: 100
        });
    });

    // Parallax Ccrolling
    var parallaxElements = $('[data-parallax]'),
        browserWindow = $(window);
    $.each(parallaxElements, function(index, value) {
        var $this = $(value),
            speed = $this.data('parallax');
        browserWindow.scroll(function() {
            var offset = -(browserWindow.scrollTop() / speed);
            $this.css({
                backgroundPosition: '50% ' + offset + 'px'
            });
        });
    });
});