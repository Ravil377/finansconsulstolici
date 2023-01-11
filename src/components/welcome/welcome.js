import Swiper, { Pagination, EffectFade, Autoplay } from "swiper";
Swiper.use([Pagination, EffectFade, Autoplay]);

const welcome = '.welcome-js';

if(document.querySelector(welcome)) {
    const welcomeSlider = new Swiper(welcome, {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: "fade",
        fadeEffect: {
            crossFade: true,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    })
}