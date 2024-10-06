// Show/Hide Password
document.addEventListener('DOMContentLoaded', function() {
    const togglePassword = document.createElement('button');
    togglePassword.textContent = 'Show Password';
    const passwordField = document.getElementById('password');
    passwordField.parentNode.appendChild(togglePassword);

    togglePassword.addEventListener('click', function(event) {
        event.preventDefault();
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            togglePassword.textContent = 'Hide Password';
        } else {
            passwordField.type = 'password';
            togglePassword.textContent = 'Show Password';
        }
    });
});
