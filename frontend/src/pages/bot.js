import { useState } from 'react';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";


const systemMessage = {
    role: "system", 
    content: "Deal things like you are fashion industry expert and also fashion industry waste problem solver."
}
  
  
  
const Bot = () => {
const [messages, setMessages] = useState([
    {
    message: "Hello, I'm ChatGPT! Ask me anything!",
    sender: "ChatGPT",
    },
]);
const [isTyping, setIsTyping] = useState(false);

const handleSendRequest = async (message) => {
    const newMessage = {
    message: message,
    direction: 'outgoing',
    sender: "user"
    };

    const newMessages = [...messages, newMessage];
    setMessages(newMessages);
    setIsTyping(true);

    try {
    const response = await processMessageToChatGPT(newMessages);
    const content = response.choices[0]?.message?.content;
    if (content) {
        const chatGPTResponse = {
        message: content,
        sender: "ChatGPT",
        };
        setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
    }
    } catch (error) {
    console.error("Error processing message:", error);
    } finally {
    setIsTyping(false);
    }
};

async function processMessageToChatGPT(chatMessages) {
    const apiMessages = chatMessages.map((messageObject) => {
    const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
    return { role: role , content: messageObject.message };
    });

    const apiRequestBody = {
    "model": "gpt-3.5-turbo",
    "messages": [
        systemMessage,
        ...apiMessages,
    ],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);
      setIsTyping(false);
    });
}

return (
    <div className="App">
    <div style={{ position:"relative", height: "400px", width: "400px"  }}>
        <MainContainer>
        <ChatContainer>       
            <MessageList 
            scrollBehavior="smooth" 
            typingIndicator={isTyping ? <TypingIndicator content="ChatGPT is typing" /> : null}
            >
            {messages.map((message, i) => {
                console.log(message)
                return <Message key={i} model={message} />
            })}
            </MessageList>
            <MessageInput placeholder="Send a Message" onSend={handleSendRequest} />        
        </ChatContainer>
        </MainContainer>
    </div>
    </div>
)
}

  export default Bot;