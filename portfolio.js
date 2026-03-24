const themeBtn = document.getElementById('theme-toggle');
const body = document.body;

themeBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    themeBtn.textContent = body.classList.contains('light-mode') ? '🌙' : '☀️';
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('button');
    const originalContent = btn.innerHTML;

    btn.disabled = true;
    btn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
    
    setTimeout(() => {
        alert("Thanks for visiting my Profolio! Your message has been sent successfully.");
        this.reset();
        btn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
        btn.style.background = '#10b981'; // Success Green
        
        setTimeout(() => {
            btn.innerHTML = originalContent;
            btn.style.background = ''; // Reset to primary
            btn.disabled = false;
        }, 2000);
    }, 1500);
});

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});