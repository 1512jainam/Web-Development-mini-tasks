// Confirmation Dialog before form submission
document.querySelector('form').addEventListener('submit', function(event) {
    if (!confirm('Are you sure you want to submit the form?')) {
        event.preventDefault();
    }
});
