import fullPageSlider from './components/fullPageSlider.js'

document.addEventListener('DOMContentLoaded', function () {
    fullPageSlider({
        root: '#slider',
        container: '.slider__container',
        sliderItemClass: '.slider__item',
        pagination: '.slider__nav',
        mobile: false
    })
});
