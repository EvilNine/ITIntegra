const fullPageSlider = (options) => {
    
    const root = document.querySelector(options.root);
    const container = root.querySelector(options.container);
    const pages = root.querySelectorAll(options.sliderItemClass);
    const pagination = root.querySelectorAll(`${options.pagination} button`);
    const firstSlide = pages[0]
    const numOfPages = pages.length;

    let pageIndex = 0;

    firstSlide.classList.add('active')
    firstSlide.style.transform = 'translateX(0)'
    
    pagination.forEach((dot, index) => {
        dot.addEventListener('click',()=> {
            container.style.transform =  `translateY(-${index*100}vh)` 
            document.querySelector(`${options.pagination} button.active`).classList.remove('active')
            dot.classList.add('active');
        })
    })
    window.addEventListener('wheel', e => {
        if (0 < pageIndex && e.deltaY < 0) {
            pageIndex--;
        }
        else if (pageIndex < numOfPages - 1 && e.deltaY > 0) {
            pageIndex++;
        }
        let position = "-" + pageIndex * 100;
        
        container.style.transform = "translateY(" + position + "vh)";
    
        pagination.forEach(dot => dot.classList.remove("active"));
        pagination[pageIndex].classList.add("active");
        pages.forEach(e => e.classList.remove('active'))
        pages[pageIndex].classList.add('active')
    });
   
}


export default fullPageSlider