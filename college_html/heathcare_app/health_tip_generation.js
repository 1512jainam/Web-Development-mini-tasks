// Generate health tips based on symptom severity
document.querySelector('.track-symptoms form').addEventListener('submit', function(event) {
    event.preventDefault();

    const severity = document.getElementById('severity').value;
    let healthTip = '';

    if (severity <= 3) {
        healthTip = "Your symptoms seem mild. Consider rest and hydration.";
    } else if (severity <= 6) {
        healthTip = "Your symptoms are moderate. Monitor closely and consider consulting a healthcare professional.";
    } else {
        healthTip = "Your symptoms are severe. Please seek medical attention immediately.";
    }

    const tipDiv = document.createElement('div');
    tipDiv.classList.add('health-tip');
    tipDiv.textContent = healthTip;

    document.querySelector('main').appendChild(tipDiv);
});
