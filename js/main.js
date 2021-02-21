$(function(){
$('.top__slider').slick({
    autoplay: true,
   
    arrows: false,
    dots: true,
    fade: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                dots: false
            }
        },
    ]
});
$('.reviews__slider').slick({

    arrows: false,
    dots: true,

    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1140,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 846,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 585,
            settings: {
                slidesToShow: 1
            }
        },
    ]
});

$('.menu__burger').on('click', function(){
$('.menu__list').toggleClass('menu__list--active');
});
});
