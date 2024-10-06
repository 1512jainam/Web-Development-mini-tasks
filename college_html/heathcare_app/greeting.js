// Display a personalized greeting after login
document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const loginForm = document.querySelector('.login form');

    if (loginForm) {
        loginForm.addEventListener('submit', function() {
            localStorage.setItem('username', usernameInput.value);
        });
    }

    const greetingElement = document.querySelector('.welcome h1');
    if (greetingElement && localStorage.getItem('username')) {
        greetingElement.textContent = `Welcome, ${localStorage.getItem('username')}!`;
    }
});
