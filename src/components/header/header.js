const menu = document.querySelector('.menu-js');
const catalog = document.querySelector('.catalog-js');


menu.addEventListener('click', () => {
    menu.classList.toggle('_active');
})

catalog.addEventListener('click', (e) => {
    const link = e.target;
    if(link.classList.contains('catalog-link-js')) {
        catalog.classList.toggle('_menu_open');
        link.closest('LI').classList.toggle('_open');
    }
})