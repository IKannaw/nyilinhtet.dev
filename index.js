const hamburger = document.getElementById('hamburger');
const menuItems = document.getElementById('menu-items');

hamburger.addEventListener('click', () => {
    menuItems.classList.toggle('active');
});

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('#menu-items a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const navLink = document.querySelector(`#menu-items a[href="#${id}"]`);

        if (entry.isIntersecting) {
            navLinks.forEach(link => link.classList.remove('active'));
            navLink.classList.add('active');
        }
    });
}, {
    rootMargin: '-50% 0px -50% 0px', 
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 50) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

