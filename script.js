const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Existing burger menu code
const burger = document.querySelector('.burger');
const nav = document.querySelector('nav ul');

burger.addEventListener('click', () => {
    nav.classList.toggle('active');
});

// Contact form validation
const contactForm = document.getElementById('contactForm');

if(contactForm){
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const date = document.getElementById('eventDate').value;

        if(name === '' || email === '' || message === '' || date === ''){
            alert('Please fill in all fields');
            return;
        }

        // Simple email validation
        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!email.match(emailPattern)){
            alert('Please enter a valid email');
            return;
        }

        alert('Thank you! Your message has been sent.');
        contactForm.reset();
    });
}
