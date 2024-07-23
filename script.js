// Function to load Botpress webchat scripts dynamically
function loadBotpressWebchat() {
    // Create the first script element for the webchat inject script
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    document.body.appendChild(script1);

    // Create the second script element for the webchat config script
    const script2 = document.createElement('script');
    script2.src = 'https://mediafiles.botpress.cloud/0e9352ea-bc1e-4f31-8786-157966d4fe37/webchat/config.js';
    script2.defer = true;
    document.body.appendChild(script2);
}

// Function to show the chat interface after user details are entered
function showChat() {
    // Get username and email values from input fields
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;

    // Check if both username and email are provided
    if (username && email) {
        // Hide the user form
        document.getElementById('user-form').style.display = 'none';
        // Show the chat container
        document.getElementById('chat-container').style.display = 'flex';

        // Display a welcome message with the user's name
        document.getElementById('welcome-message').textContent = `Hi ${username}, welcome to Mining Chatbot`;

        // Load the Botpress webchat scripts
        loadBotpressWebchat();

        // Initialize the Botpress webchat with user details
        window.botpressWebChat.init({
            hostUrl: "https://cdn.botpress.cloud/webchat/v1",
            botId: "0e9352ea-bc1e-4f31-8786-157966d4fe37",
            userId: username,
            email: email
        });
    } else {
        // Alert the user if either username or email is missing
        alert("Please enter both username and email.");
    }
}
