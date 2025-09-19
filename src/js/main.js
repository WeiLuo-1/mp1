/* Your JS here. */
window.onscroll = function() {
    scrollFunction();
}

function scrollFunction() {
    const navbar = document.getElementById("navbar");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
}

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    const currentScroll = window.scrollY + (window.innerHeight / 2);

    navItems.forEach(item => {
        item.classList.remove('active');
    })

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (currentScroll >= sectionTop && currentScroll < sectionTop + sectionHeight) {
            const correspondingNavItem = document.querySelector(`[href="#${section.id}"]`).parentElement;
            correspondingNavItem.classList.add('active');
        }
    })
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const elementHeight = targetElement.clientHeight;
            const viewportHeight = window.innerHeight;
            
            const scrollPosition = targetElement.offsetTop - (viewportHeight / 2) + (elementHeight / 2);

            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
    });
});