import Swiper, { Navigation } from "swiper";
Swiper.use([Navigation]);

const useful = '.useful-js ';

if(document.querySelector(useful)) {
    const usefulSlider = new Swiper(useful, {
        slidesPerView: 'auto',
        spaceBetween: 20,
        centeredSlidesBounds: true,
        effect: "fade",
        loop: true,
        fadeEffect: {
          crossFade: true
        },
        breakpoints: {
            1200: {
                slidesPerView: 3,
                spaceBetween: 40,
            }
        },
        navigation: {
            nextEl: '.useful__button-next-js',
            prevEl: '.useful__button-prev-js',
        },
    })
}
