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


const carouselContainer = document.querySelector('.carousel-container');
const slidesWrapper = document.querySelector('.slides-wrapper');
const slides = document.querySelectorAll('.slide');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');

let currentSlide = 0; 

function moveToSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const newTransform = `translateX(-${currentSlide * slides[0].offsetWidth}px)`;
    slidesWrapper.style.transform = newTransform;
}

nextArrow.addEventListener('click', () => {
    moveToSlide(currentSlide + 1);
});

prevArrow.addEventListener('click', () => {
    moveToSlide(currentSlide - 1);
});

const openModalBtns = document.querySelectorAll('.modal-open-img');

openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const modalId = btn.id.replace('open-modal-btn-', 'my-modal-');
        const modal = document.getElementById(modalId);
        modal.classList.add('is-visible');
    });
});

const closeBtns = document.querySelectorAll('.close-btn');

closeBtns.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
        const modal = closeBtn.closest('.modal');
        modal.classList.remove('is-visible');
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('is-visible');
    }
});