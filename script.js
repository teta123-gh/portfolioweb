// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Modal functionality
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalDesc = document.getElementById('modal-description');
    const modalClose = document.getElementById('modal-close');

    const projects = {
        1: { title: 'My Rider / Python Driver Support App', description: 'This App was built using HTML, CSS, and JavaScript. It showcases projects and skills with a clean, responsive design.' },
        2: { title: 'Student Peer Mentoring Platform', description: 'The application was built using HTML, CSS, and JavaScript for the front-end, with Python (Flask/Django) and SQLite/PostgreSQL powering the back-end and database management.' },
        3: { title: 'CitizenInfo / Web-Based Citizen Registration System', description: ' Built a full-stack web application for registering and managing citizen information using PHP, JavaScript, HTML, and CSS. The system included secure data entry forms, validation, and a back-end interface for storing and retrieving citizen records. Focused on both front-end user experience and back-end data handling.' }
    };

    document.querySelectorAll('.open-modal').forEach(button => {
        button.addEventListener('click', () => {
            const projectId = button.getAttribute('data-project');
            modalTitle.textContent = projects[projectId].title;
            modalDesc.textContent = projects[projectId].description;
            modal.style.display = 'block';
        });
    });

    modalClose.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (name.value === '' || email.value === '' || message.value === '') {
            alert('Please fill in all fields.');
            return;
        }
        // Simple email validation
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            alert('Please enter a valid email.');
            return;
        }
        alert('Thank you for your message!');
        contactForm.reset();
    });

    // Slider functionality
    const slides = document.querySelectorAll('.slides');
    let currentSlide = 0;
    document.getElementById('prev').addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    });
    document.getElementById('next').addEventListener('click', () => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    });
    
});
let dark = localStorage.getItem('dark')
const themeSwitch = document.getElementById('theme-switch')

const enableDark = () => {
    document.body.classList.add('dark')
    localStorage.setItem('dark','active')
}

const disableDark = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('dark', null)
}

if (dark === "active") enableDark()

themeSwitch.addEventListener("click", () => {
    dark = localStorage.getItem('dark')
    dark !== "active" ? enableDark() : disableDark()
})

