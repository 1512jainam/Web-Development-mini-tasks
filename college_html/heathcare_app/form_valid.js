// Form Validation for Login and Register
function validateForm(event) {
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const email = document.getElementById('email');

    if (username && username.value.trim() === '') {
        alert('Username is required.');
        event.preventDefault();
    }

    if (password && (password.value.length < 8 || !/\d/.test(password.value) || !/[!@#$%^&*]/.test(password.value))) {
        alert('Password must be at least 8 characters long and contain at least one number and one special character.');
        event.preventDefault();
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
    }
}

// Attach the validation function to forms
document.querySelector('form').addEventListener('submit', validateForm);
