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
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: '#foot_slier .btn_right',
            prevEl: '#foot_slier .btn_left',
        },
    });
}