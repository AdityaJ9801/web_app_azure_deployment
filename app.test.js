const { initApp } = require('./app');

function setupDOM() {
    document.body.innerHTML = `
    <section id="contact"></section>
    <button id="cta-btn">Get Started</button>
    <form id="contact-form">
      <input type="text" value="John" required />
      <input type="email" value="john@example.com" required />
      <textarea required>Hello</textarea>
      <button type="submit">Send</button>
    </form>
    <p id="form-msg"></p>
  `;
    initApp();
}

describe('CTA button', () => {
    beforeEach(setupDOM);

    test('scrolls to contact section on click', () => {
        const contact = document.getElementById('contact');
        contact.scrollIntoView = jest.fn();

        document.getElementById('cta-btn').click();

        expect(contact.scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });
    });
});

describe('Contact form', () => {
    beforeEach(setupDOM);

    test('shows success message on submit', () => {
        const form = document.getElementById('contact-form');
        form.dispatchEvent(new Event('submit'));

        expect(document.getElementById('form-msg').textContent).toBe("Message sent! We'll be in touch.");
    });

    test('resets form fields after submit', () => {
        const form = document.getElementById('contact-form');
        form.reset = jest.fn();
        form.dispatchEvent(new Event('submit'));

        expect(form.reset).toHaveBeenCalled();
    });

    test('prevents default form submission', () => {
        const form = document.getElementById('contact-form');
        const event = new Event('submit');
        event.preventDefault = jest.fn();
        form.dispatchEvent(event);

        expect(event.preventDefault).toHaveBeenCalled();
    });
});
