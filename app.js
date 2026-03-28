function initApp() {
    document.getElementById('cta-btn').addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('form-msg').textContent = "Message sent! We'll be in touch.";
        e.target.reset();
    });
}

if (typeof module !== 'undefined') {
    module.exports = { initApp };
} else {
    initApp();
}
