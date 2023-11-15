// Select DOM elements
const navbarLink = document.querySelector('#navbar-link');
const contactForm = document.querySelector('#contact-form');
const emailInput = document.querySelector('#emailInput');
const messageInput = document.querySelector('#messageInput');

// Regular expression to validate e-mails
const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

// Functions that check the validity of text fields
const isValidEmail = () => regex.test(emailInput.value);
const isValidMessage = () => messageInput.value.trim() !== '';

const isValidInputs = () => isValidEmail() && isValidMessage();

const DOMLoaded = () => {
    navbarLink.addEventListener('click', () => window.location.reload());
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        if(isValidInputs())
            contactForm.submit();
    });
};

document.addEventListener('DOMContentLoaded', DOMLoaded)