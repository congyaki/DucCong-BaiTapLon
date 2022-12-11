$(window).on('load', function(event){
    $('.container-loader').fadeOut('fast');
});


$(".menu-toggle-btn").click(function(){
    $(this).toggleClass("fa-times");
    $(".navigation-menu").toggleClass("active");                                            
});

$(window).on('scroll', function(event){
    $('header').toggleClass("sticky", window.scrollY > 0);
});

ScrollReveal ({
    reset: false,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.heading-content, .heading', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('.slider-km', { delay: 200, origin: 'bottom' });
ScrollReveal().reveal('.tour-content-item-img', { delay: 100, origin: 'left' });
ScrollReveal().reveal('.tour-content-item-text', { delay: 100, origin: 'right' });
ScrollReveal().reveal('.hotel-hot, .villa-hot, .ddnb', { delay: 100, origin: 'bottom' });
ScrollReveal().reveal('.review-item1', { delay: 100, origin: 'left'});
ScrollReveal().reveal('.review-item2', { delay: 100, origin: 'bottom'});
ScrollReveal().reveal('.review-item3', { delay: 100, origin: 'right'});
