// Add functionality to dynamically add multiple symptom entries
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.createElement('button');
    addButton.textContent = 'Add Another Symptom';
    document.querySelector('.track-symptoms form').appendChild(addButton);

    addButton.addEventListener('click', function(event) {
        event.preventDefault();
        const newEntry = document.createElement('div');
        newEntry.innerHTML = `
            <label for="symptoms">Symptoms:</label>
            <textarea id="symptoms" name="symptoms" required></textarea>
            <label for="severity">Severity (1-10):</label>
            <input type="number" id="severity" name="severity" min="1" max="10" required>
        `;
        document.querySelector('.track-symptoms form').appendChild(newEntry);
    });
});
