const hamburger = document.getElementById('hamburger');
const menuItems = document.getElementById('menu-items');

hamburger.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});