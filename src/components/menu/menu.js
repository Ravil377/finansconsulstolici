const asideMenu = document.querySelector('.aside-menu-js');

asideMenu && asideMenu.addEventListener('click', (e) => {
    const li = e.target.closest('li');
    li && li.classList.toggle('_active');
})