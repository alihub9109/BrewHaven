 // Mobile Menu Toggle
 const mobileMenuBtn = document.getElementById('mobileMenuBtn');
 const mainNav = document.getElementById('mainNav');

 mobileMenuBtn.addEventListener('click', () => {
     mainNav.classList.toggle('active');
     mobileMenuBtn.innerHTML = mainNav.classList.contains('active') ? 
         '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
 });

 // Close mobile menu when clicking a link
 const navLinks = document.querySelectorAll('#mainNav a');
 navLinks.forEach(link => {
     link.addEventListener('click', () => {
         if (mainNav.classList.contains('active')) {
             mainNav.classList.remove('active');
             mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
         }
     });
 });

 // Header scroll effect
 const header = document.getElementById('header');
 window.addEventListener('scroll', () => {
     if (window.scrollY > 50) {
         header.classList.add('scrolled');
     } else {
         header.classList.remove('scrolled');
     }
 });

 // Smooth scrolling for anchor links
 document.querySelectorAll('a[href^="#"]').forEach(anchor => {
     anchor.addEventListener('click', function(e) {
         e.preventDefault();
         
         const targetId = this.getAttribute('href');
         if (targetId === '#') return;
         
         const targetElement = document.querySelector(targetId);
         if (targetElement) {
             window.scrollTo({
                 top: targetElement.offsetTop - 70,
                 behavior: 'smooth'
             });
         }
     });
 });

 // Newsletter form submission
 const newsletterForm = document.querySelector('.newsletter-form');
 if (newsletterForm) {
     newsletterForm.addEventListener('submit', function(e) {
         e.preventDefault();
         const emailInput = this.querySelector('input[type="email"]');
         if (emailInput.value) {
             alert('Thank you for subscribing to our newsletter!');
             emailInput.value = '';
         }
     });
 }

 // Animation on scroll
 document.addEventListener('DOMContentLoaded', () => {
    const animateOnScroll = () => {
        const elements = document.querySelectorAll('.menu-item, .testimonial, .location');
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Set initial state for animated elements
    const animatedElements = document.querySelectorAll('.menu-item, .testimonial, .location');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    // Run once on page load
    animateOnScroll();

    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});

