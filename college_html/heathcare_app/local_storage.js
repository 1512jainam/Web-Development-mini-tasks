// Save symptoms to local storage
document.querySelector('.track-symptoms form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const date = document.getElementById('date').value;
    const symptoms = document.getElementById('symptoms').value;
    const severity = document.getElementById('severity').value;

    const symptomEntry = { date, symptoms, severity };
    let symptomHistory = JSON.parse(localStorage.getItem('symptomHistory')) || [];
    symptomHistory.push(symptomEntry);
    localStorage.setItem('symptomHistory', JSON.stringify(symptomHistory));

    alert('Symptom entry saved!');
});

// Display saved symptoms
document.addEventListener('DOMContentLoaded', function() {
    const symptomHistory = JSON.parse(localStorage.getItem('symptomHistory')) || [];
    const historySection = document.createElement('section');
    historySection.classList.add('symptom-history');

    symptomHistory.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.innerHTML = `<strong>Date:</strong> ${entry.date}<br>
                              <strong>Symptoms:</strong> ${entry.symptoms}<br>
                              <strong>Severity:</strong> ${entry.severity}`;
        historySection.appendChild(entryDiv);
    });

    document.querySelector('main').appendChild(historySection);
});
