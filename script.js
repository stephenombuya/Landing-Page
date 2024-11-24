// Scroll reveal animation
const sections = document.querySelectorAll('section');

const revealSection = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
};

const observer = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.1
});

sections.forEach(section => {
    observer.observe(section);
});

// Add the CSS class for the effect


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const formMessage = document.getElementById('formMessage');

    if (name && email && message) {
        formMessage.textContent = "Thank you for your message!";
        formMessage.classList.remove('hidden');
        formMessage.style.color = "green";

        // Clear the form fields
        this.reset();
    } else {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.classList.remove('hidden');
        formMessage.style.color = "red";
    }
});


const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});


// Animations

gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1 });
gsap.from(".hero p", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
gsap.from(".hero .btn-primary", { opacity: 0, scale: 0.8, duration: 1, delay: 1 });

gsap.from(".card", {
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3, // delay between elements
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
    }
});


AOS.init({
    duration: 1000, // Animation duration in milliseconds
    once: true, // Whether animation should happen only once
});
