function sendMessage() {
    var userInput = document.getElementById("user-input");
    var userMessage = userInput.value.trim();

    if (userMessage === "") return;

    displayMessage(userMessage, "user");

   
    var botResponse = getBotResponse(userMessage);
    displayMessage(botResponse, "bot");

    userInput.value = "";
}

function displayMessage(message, sender) {
    var chatBox = document.getElementById("chat-box");

    var messageElement = document.createElement("div");
    messageElement.classList.add("chat-message");

    if (sender === "bot") {
        messageElement.classList.add("bot-message");
        messageElement.innerHTML = `<span class="bot-name">TechBot:</span> ${message}`;
    } else {
        messageElement.classList.add("user-message");
        messageElement.innerHTML = `<span class="user-name">You:</span> ${message}`;
    }

    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; 
}

function getBotResponse(message) {
    
    message = message.toLowerCase();

    if (message.includes("technology")) {
        return "Technology is constantly evolving. What specific topic are you interested in?";
    } else if (message.includes("AI") || message.includes("artificial intelligence")) {
        return "Artificial Intelligence (AI) is revolutionizing various industries.";
    } else if (message.includes("programming")) {
        return "Programming is the process of creating software applications.";
    }else if(message.includes("hello") || message.includes("hi") || message.includes("topic")){
        return "hello! this techbot is about Technology"
    }else if(message.includes("techbot")){
        return "Techbot is usually give the brief information about the related topic. This techbot is about Techlogy"
    }else {
        return "I'm sorry, I don't understand. Can you please be more specific?";
    }
}
