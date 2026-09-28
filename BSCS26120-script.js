
const chatLog = document.getElementById('chatLog');
const userInput = document.getElementById('userInput');

function addMessage(text, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');

  if (sender === 'user') {
    messageDiv.classList.add('user-message');
  } else if (sender === 'bot'){
    messageDiv.classList.add('bot-message');
  }

  messageDiv.textContent = text;
  chatLog.appendChild(messageDiv);
  chatLog.scrollTop = chatLog.scrollHeight;
}


function handleUserMessage() {
  const userText = userInput.value;
  if(userText==''){
    return 0;

  }
  else
  {
     addMessage(userText,'user')
     const botText= "you should" + userText;
     addMessage(botText,'bot')
  }

  //Check if the user input in empty or not.
  //If it is empty, do nothing, display nothing.
  //Otherwise, first display the user input as a message using the addMessage function above.
  //then display the bot reply as a bot message using the addMessage function above.
  //refer to lab manual images to see how to structure the bot message.
}