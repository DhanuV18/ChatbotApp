import React, { useState } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const ChatbotApp = () => {
    const [messages, setMessages] = useState([
        {
            _id: 1,
            text: "Hello! I am AI chatbot. How can I help you?",
            createdAt: new Date(),
            user: { _id: 2, name: "Chatbot" },
        },
    ]);

    const handleSend = (newMessages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, newMessages)
        );

        const userMessage = newMessages[0].text;
        const botResponse = generateChatbotResponse(userMessage);

        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, [
                {
                    _id: Math.round(Math.random() * 1000000),
                    text: botResponse,
                    createdAt: new Date(),
                    user: { _id: 2, name: "Chatbot" },
                },
            ])
        );
    };

    const generateChatbotResponse = (userMessage) => {
        switch (userMessage.toLowerCase()) {
            case "hello":
                return "Hi! How can I assist you today?";
            case "hi":
                return "Hi! How can I assist you today?";
            case "What is your name?":
                return "My name is AI Chatbot created by Dhanu";
            case "how are you":
                return "I am great! Thanks";
            case "bye":
                return "Goodbye! If you need any help, plz feel free to ask me!";
            default:
                return "I'm sorry, I didn't understand that. Can you please repeat?";
        }
    };

    return (
        <GiftedChat
            messages={messages}
            onSend={(newMessages) => handleSend(newMessages)}
            user={{ _id: 1, name: "User" }}
        />
    );
};

export default ChatbotApp;
