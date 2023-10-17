let trustBg = document.querySelector('.trust_bg');
function getTrustBg() {
    let trustText = document.querySelector('#trust .texts');
    trustBg.style.left = trustText.getBoundingClientRect().left + 'px';
}

if (trustBg) {
    getTrustBg();
}

window.addEventListener('resize', function () {
    if (trustBg) {
        getTrustBg();
    }
})

let foot_slider_el = document.querySelector('#foot_slier .foot_slider');
if (foot_slider_el) {
    let foot_slider = new Swiper(foot_slider_el, {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '#foot_slier .btn_right',
            prevEl: '#foot_slier .btn_left',
        },
        breakpoints: {
            768: {
                slidesPerView: 4,
                spaceBetween: 20
            }
        }
    });
}

if ($('.mobile_menu').length) {
    $('.mobile_menu .menu_dropdown .menu_dropdown_items_wrapper').slideUp(0);
    $('.mobile_menu .menu_dropdown').each(function (idx, el) {
        $(el).find('.menu_dropdown_title').click(function () {
            $('.mobile_menu .menu_dropdown .menu_dropdown_items_wrapper').not($(el).find('.menu_dropdown_items_wrapper')).slideUp(200);
            $(el).find('.menu_dropdown_items_wrapper').slideToggle(200);
        })
    })
}

$('header .bars').click(function () {
    $('.mobile_menu').removeClass('noActive')
    $('.mobile_menu').addClass('active')
})

$('.mobile_menu .header_close').click(function () {
    $('.mobile_menu').removeClass('active')
    $('.mobile_menu').addClass('noActive')
})

$('.btn_link').click(function(e){
    e.preventDefault()
})