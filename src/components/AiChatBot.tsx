import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

export default function AiChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Welcome to TapRide! How can I help you today? (English/සිංහල/தமிழ்)\n\nTapRide වෙත සාදරයෙන් පිළිගනිමු! අද මම ඔබට කෙසේ උදව් කළ යුතුද?\n\nTapRide உங்களை அன்புடன் வரவேற்கிறது! இன்று நான் உங்களுக்கு எவ்வாறு உதவ வேண்டும்?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setInput('');
    setIsTyping(true);

    // Mock AI response delay
    setTimeout(() => {
      let botResponse = "I'm not quite sure about that. But as a virtual assistant for TapRide, I can help you book tickets, check prices, or explain how the 60:40 seat split works.";
      
      const lower = userMsg.toLowerCase();
      
      if (/sinhala|සිංහල/.test(lower)) {
        botResponse = "ඔව්, මට සිංහල තේරෙනවා. ටිකට් පත් වෙන්කරවා ගැනීම සඳහා කරුණාකර 'Book Single Spot Trip' බොත්තම ඔබන්න.";
      } else if (/tamil|தமிழ்/.test(lower)) {
        botResponse = "ஆம், எனக்கு தமிழ் புரியும். டிக்கெட் முன்பதிவு செய்ய 'Book Single Spot Trip' பட்டனை கிளிக் செய்யவும்.";
      } else if (/price|cost|how much|මිල/.test(lower)) {
        botResponse = "Spot fares depend on the route (e.g. Anuradhapura to Polonnaruwa is Rs. 150). If you commute daily, our Monthly Season Passes offer a massive 25% discount!";
      } else if (/what are you|who are you/.test(lower)) {
        botResponse = "I am the TapRide AI Assistant! I am an intelligent virtual agent designed to help passengers find routes, book seats, and understand our digital ticketing system.";
      } else if (/what can you do|help/.test(lower)) {
        botResponse = "I can help you check bus schedules, explain ticket pricing, guide you through the booking process, or answer any questions about our 60:40 split system.";
      } else if (/how to book|book a seat/.test(lower)) {
        botResponse = "Booking is easy! Just click 'Book Single Spot Trip' on the home page, select your route, pick an available green seat on the live map, and confirm to generate your QR ticket.";
      } else if (/\b(hi|hello|hey|yo|greetings)\b/.test(lower)) {
        botResponse = "Hello there! How can I assist you with TapRide today?";
      } else if (/permission|authority|who owns|created by|creator|who made/.test(lower)) {
        botResponse = "TapRide is an academic project developed by students from The Open University of Sri Lanka (OUSL), specifically designed to modernize the private bus network in the North Central Province.";
      } else if (/functions|features|what can i do|website/.test(lower)) {
        botResponse = "On this platform, you can book daily spot tickets, purchase 30-day season passes, check live bus schedules, and view real-time 54-seat layouts with our 60:40 hybrid booking engine.";
      } else if (/cancel|refund/.test(lower)) {
        botResponse = "You can cancel spot tickets up to 2 hours before departure for a full refund to your TapRide wallet. Monthly passes have a 24-hour grace period for refunds.";
      } else if (/contact|support|help/.test(lower)) {
        botResponse = "You can reach out to our support team at support@tapride.lk or navigate to the 'Contact Authority' link in the website footer.";
      }

      setMessages(prev => [...prev, { role: 'bot', text: botResponse }]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 p-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-2xl transition-all transform hover:scale-110 z-50 ${isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'}`}
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-80 sm:w-96 bg-white dark:bg-[#121622] border border-gray-200 dark:border-gray-800 rounded-2xl shadow-2xl z-50 flex flex-col transition-all origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`} style={{ height: '500px', maxHeight: '80vh' }}>
        
        {/* Header */}
        <div className="bg-blue-600 p-4 rounded-t-2xl flex justify-between items-center text-white">
          <div className="flex items-center gap-2">
            <Bot className="w-5 h-5" />
            <div>
              <h3 className="font-bold text-sm">TapRide AI Assistant</h3>
              <p className="text-[10px] text-blue-200">English | සිංහල | தமிழ்</p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-blue-700 p-1.5 rounded-lg transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-[#0a0f1c] space-y-4">
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {msg.role === 'bot' && <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0 mt-1"><Bot className="w-3 h-3 text-white" /></div>}
              <div className={`p-3 rounded-2xl max-w-[80%] text-sm whitespace-pre-wrap ${msg.role === 'user' ? 'bg-blue-600 text-white rounded-tr-sm' : 'bg-white dark:bg-[#1a2235] text-gray-800 dark:text-gray-200 border border-gray-200 dark:border-gray-700 rounded-tl-sm'}`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex gap-2 justify-start">
              <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center shrink-0"><Bot className="w-3 h-3 text-white" /></div>
              <div className="p-3 rounded-2xl bg-white dark:bg-[#1a2235] border border-gray-200 dark:border-gray-700 rounded-tl-sm flex items-center gap-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.15s' }}></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.3s' }}></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form onSubmit={handleSend} className="p-4 bg-white dark:bg-[#121622] rounded-b-2xl border-t border-gray-200 dark:border-gray-800 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 bg-gray-100 dark:bg-[#1a2235] border border-transparent focus:border-blue-500 focus:bg-white dark:focus:bg-[#0a0f1c] outline-none rounded-xl px-4 py-2 text-sm text-gray-900 dark:text-white transition-all"
          />
          <button type="submit" disabled={!input.trim() || isTyping} className="bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white p-2.5 rounded-xl transition-colors">
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
}
