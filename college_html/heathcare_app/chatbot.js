document.getElementById("chatbotHeader").addEventListener("click", function () {
    const chatbot = document.getElementById("chatbot");
    if (chatbot.style.bottom === "0px") {
        chatbot.style.bottom = "-300px";
    } else {
        chatbot.style.bottom = "0px";
    }
});

document.getElementById("chatbotSend").addEventListener("click", function () {
    const inputField = document.getElementById("chatbotInput");
    const message = inputField.value.trim();
    if (message !== "") {
        addMessage("You", message);
        inputField.value = "";
        respondToMessage(message);
    }
});

function addMessage(sender, message) {
    const messagesDiv = document.getElementById("chatbotMessages");
    const messageDiv = document.createElement("div");
    messageDiv.textContent = `${sender}: ${message}`;
    messagesDiv.appendChild(messageDiv);
    messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function respondToMessage(message) {
    const responses = {
        "hello": "Hello! How can I assist you today?",
        "symptoms": "You can track your symptoms using the Track Symptoms page.",
        "tips": "For personalized health tips, visit the Health Tips section.",
        "contact": "You can contact professionals using the Contact page.",
    };

    const lowerMessage = message.toLowerCase();
    const response = responses[lowerMessage] || "I'm sorry, I don't understand that. Please try asking something else.";
    setTimeout(() => addMessage("Chatbot", response), 500);
}
