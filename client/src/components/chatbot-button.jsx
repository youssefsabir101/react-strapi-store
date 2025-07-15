"use client"

import { useState, useRef, useEffect } from "react"
import { Bot, X, Send } from "lucide-react" 
export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { id: "1", role: "assistant", content: "Hello! How can I assist you today?" },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)

  // Scroll to the bottom of the chat when messages update
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleChatbotClick = () => {
    setIsOpen(!isOpen)
  }

const generateFakeResponse = (userMessage) => {
  const lowerCaseMessage = userMessage.toLowerCase();

  if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi") || lowerCaseMessage.includes("hey")) {
    return "Hello! 👋 Welcome to SabDecor – your home of stylish and affordable furniture. What can I help you with today?";
  } else if (
    lowerCaseMessage.includes("product") ||
    lowerCaseMessage.includes("item") ||
    lowerCaseMessage.includes("catalog") ||
    lowerCaseMessage.includes("collection")
  ) {
    return "We’ve got something for every room – sofas, beds, dining sets, and more! Are you looking for something specific?";
  } else if (lowerCaseMessage.includes("sofa") || lowerCaseMessage.includes("couch")) {
    return "We have a range of sofas from classic to modern. Would you prefer a fabric or leather finish?";
  } else if (lowerCaseMessage.includes("bed") || lowerCaseMessage.includes("bedroom")) {
    return "Our bedroom sets combine comfort and style. Are you looking for a full set or just a bed frame?";
  } else if (
    lowerCaseMessage.includes("shipping") ||
    lowerCaseMessage.includes("delivery") ||
    lowerCaseMessage.includes("ship")
  ) {
    return "Standard shipping takes 3–5 business days and is free on orders above $200. Need express delivery?";
  } else if (lowerCaseMessage.includes("delivery time") || lowerCaseMessage.includes("how long")) {
    return "Most of our deliveries arrive within 5 business days. We'll send you tracking info once it's on the way!";
  } else if (
    lowerCaseMessage.includes("return") ||
    lowerCaseMessage.includes("refund") ||
    lowerCaseMessage.includes("exchange")
  ) {
    return "No worries! We offer hassle-free returns within 30 days. Just make sure the item is in original condition.";
  } else if (lowerCaseMessage.includes("how to return")) {
    return "To start a return, please head to our Returns page and enter your order number. Need help with it?";
  } else if (
    lowerCaseMessage.includes("contact") ||
    lowerCaseMessage.includes("support") ||
    lowerCaseMessage.includes("help")
  ) {
    return "Our support team is here for you 24/7. You can email us at sabircode.me@gmail.com or call 1-800-SABDECOR.";
  } else if (lowerCaseMessage.includes("live chat") || lowerCaseMessage.includes("agent")) {
    return "I’ll do my best to help! If you prefer to chat with a live agent, please visit our Contact Us page.";
  } else if (lowerCaseMessage.includes("order") || lowerCaseMessage.includes("track")) {
    return "You can track your order anytime by entering your order number on our Track Order page.";
  } else if (lowerCaseMessage.includes("payment") || lowerCaseMessage.includes("pay")) {
    return "We accept Visa, MasterCard, PayPal, and more. All payments are 100% secure.";
  } else if (
    lowerCaseMessage.includes("discount") ||
    lowerCaseMessage.includes("promo") ||
    lowerCaseMessage.includes("offer")
  ) {
    return "Good news! We’re running a summer sale – get up to 30% off selected items. Don’t miss out!";
  } else if (lowerCaseMessage.includes("thanks") || lowerCaseMessage.includes("thank you")) {
    return "You're welcome! 😊 If you need help with anything else, just let me know.";
  } else if (lowerCaseMessage.includes("bye") || lowerCaseMessage.includes("goodbye")) {
    return "Thanks for visiting SabDecor! We hope to see you again soon. Take care!";
  } else {
    return "Hmm, I didn’t catch that. Can you try rephrasing? I can help with furniture, shipping, returns, and more!";
  }
};


  const handleSendMessage = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const newUserMessage = { id: Date.now().toString(), role: "user", content: input.trim() }
    setMessages((prevMessages) => [...prevMessages, newUserMessage])
    setInput("")
    setIsLoading(true)

    // Simulate a delay for the "AI" response
    setTimeout(() => {
      const fakeResponseContent = generateFakeResponse(newUserMessage.content)
      const newAssistantMessage = { id: (Date.now() + 1).toString(), role: "assistant", content: fakeResponseContent }
      setMessages((prevMessages) => [...prevMessages, newAssistantMessage])
      setIsLoading(false)
    }, 800) 
  }

  return (
    <>
      
      <button
        onClick={handleChatbotClick}
        className="fixed bottom-40 right-8 z-50 p-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white shadow-lg hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-violet-300 flex items-center justify-center w-12 h-12"
        aria-label="Open chatbot"
      >
        <Bot className="w-7 h-7" />
      </button>

      
      {isOpen && (
        <div className="fixed bottom-60 right-8 z-50 w-[350px] h-[500px] flex flex-col shadow-2xl border border-violet-200 rounded-2xl overflow-hidden bg-white">
          
          <div className="flex flex-row items-center justify-between p-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-t-xl">
            <h2 className="text-lg font-bold">SabDecor Assistant</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Close chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          
          <div className="flex-1 p-4 overflow-y-auto custom-scrollbar">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center text-gray-500">
                <Bot className="w-12 h-12 text-violet-400 mb-4" />
                <p>How can I help you today?</p>
              </div>
            ) : (
              messages.map((m) => (
                <div key={m.id} className={`mb-4 ${m.role === "user" ? "text-right" : "text-left"}`}>
                  <div
                    className={`inline-block p-3 rounded-lg max-w-[80%] ${
                      m.role === "user" ? "bg-violet-100 text-violet-800" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {m.content}
                  </div>
                </div>
              ))
            )}
            {isLoading && (
              <div className="text-left mb-4">
                <div className="inline-block p-3 rounded-lg bg-gray-100 text-gray-800 animate-pulse">Typing...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          
          <div className="p-4 border-t border-gray-200">
            <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-4 py-2 border-2 border-violet-200 rounded-xl focus:border-violet-500 focus:ring-2 focus:ring-violet-200 outline-none transition-all text-sm"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="px-4 py-2 bg-gradient-to-r from-violet-600 to-purple-600 text-white font-semibold rounded-xl hover:from-violet-700 hover:to-purple-700 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                <span className="sr-only">Send message</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
