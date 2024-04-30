const accordions = document.querySelectorAll('.acordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
        const arrow = accordion.querySelector('.arrow');
        arrow.classList.toggle('active');
    });
});
