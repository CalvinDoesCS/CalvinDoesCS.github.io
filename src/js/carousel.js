const { default: Swiper } = require("swiper");

var swiper = new Swiper("./mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
    }
})