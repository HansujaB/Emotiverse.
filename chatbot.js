const responses = {
    lonely: "It's okay to feel lonely sometimes. Connecting with friends or family can help.",
    anxious: "Anxiety can be tough. Try deep breathing exercises or talking to someone you trust.",
    happy: "That's wonderful! Keep spreading that joy!",
    sad: "It's natural to feel sad. Talking about it can often help lighten the load.",
    stressed: "Stress is common. Consider taking a break and doing something you enjoy.",
    pressured: "Pressure can be overwhelming. It's important to prioritize your well-being.",
    angry: "Anger is a valid emotion. Finding healthy ways to express it can be beneficial.",
    confused: "Feeling confused can be unsettling. Taking time to reflect may help clarify things.",
    overwhelmed: "When everything feels too much, try breaking tasks into smaller, manageable steps."
};


document.getElementById('send-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const chatBox = document.getElementById('chat-box');


    if (userInput) {
        const userMessage = document.createElement('div');
        userMessage.textContent = "You: " + userInput;
        chatBox.appendChild(userMessage);


        const botMessage = document.createElement('div');
        botMessage.textContent = responses[userInput] || "I'm here for you. Please share more about your feelings.";
        chatBox.appendChild(botMessage);


        document.getElementById('user-input').value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
