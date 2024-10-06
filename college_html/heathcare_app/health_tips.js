// Health Tips Carousel
document.addEventListener('DOMContentLoaded', function() {
    const tips = [
        "Stay hydrated by drinking at least 8 glasses of water a day.",
        "Incorporate physical activity into your daily routine.",
        "Eat a balanced diet rich in fruits and vegetables.",
        "Get at least 7-8 hours of sleep each night."
    ];

    let currentTipIndex = 0;
    const tipElement = document.querySelector('.feature h2');
    const tipTextElement = document.querySelector('.feature p');

    function showTip(index) {
        tipTextElement.textContent = tips[index];
    }

    document.querySelector('.btn-prev').addEventListener('click', function() {
        currentTipIndex = (currentTipIndex > 0) ? currentTipIndex - 1 : tips.length - 1;
        showTip(currentTipIndex);
    });

    document.querySelector('.btn-next').addEventListener('click', function() {
        currentTipIndex = (currentTipIndex < tips.length - 1) ? currentTipIndex + 1 : 0;
        showTip(currentTipIndex);
    });

    showTip(currentTipIndex);
});
