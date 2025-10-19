import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from './ui/button';

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hello! Welcome to HighPoint Resort. How can I help you today?' }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const faqs = [
    { question: 'Check-in time', answer: 'Check-in time is 2:00 PM and check-out is 11:00 AM.' },
    { question: 'Pool hours', answer: 'Our swimming pool is open daily from 7:00 AM to 8:00 PM.' },
    { question: 'Restaurant hours', answer: 'Our restaurant serves breakfast (7-10 AM), lunch (12-3 PM), and dinner (6-10 PM).' },
    { question: 'Location', answer: 'We are located in Olooloitikosh, Isinya, Kajiado County - in the suburbs of Kitengela.' },
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = { type: 'user', text: inputMessage };
    setMessages(prev => [...prev, userMessage]);

    // Simple FAQ matching
    const lowerInput = inputMessage.toLowerCase();
    let botResponse = "Thank you for your question. For detailed inquiries, please contact us at highpointresort@gmail.com or call us.";

    if (lowerInput.includes('check-in') || lowerInput.includes('check in') || lowerInput.includes('time')) {
      botResponse = faqs[0].answer;
    } else if (lowerInput.includes('pool') || lowerInput.includes('swim')) {
      botResponse = faqs[1].answer;
    } else if (lowerInput.includes('restaurant') || lowerInput.includes('food') || lowerInput.includes('dining')) {
      botResponse = faqs[2].answer;
    } else if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('address')) {
      botResponse = faqs[3].answer;
    } else if (lowerInput.includes('book') || lowerInput.includes('reservation')) {
      botResponse = "You can book a room or make a reservation through our website or contact us at highpointresort@gmail.com";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    }, 500);

    setInputMessage('');
  };

  return (
    <>
      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all z-50"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-white rounded-lg shadow-2xl z-50 flex flex-col max-h-[600px]">
          {/* Header */}
          <div className="bg-red-600 text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" />
              <span>Chat with us</span>
            </div>
            <button onClick={() => setIsOpen(false)}>
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 min-h-[300px] max-h-[400px]">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-100 text-black'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Questions */}
          <div className="px-4 pb-2 flex flex-wrap gap-2">
            {faqs.map((faq, index) => (
              <button
                key={index}
                onClick={() => setInputMessage(faq.question)}
                className="text-xs px-2 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-700"
              >
                {faq.question}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-red-600"
              />
              <Button
                onClick={handleSendMessage}
                className="bg-red-600 hover:bg-red-700 text-white px-4"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
