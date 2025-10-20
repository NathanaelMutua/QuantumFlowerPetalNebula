import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "./ui/button";

// WhatsApp SVG Icon Component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: "bot",
      text: "Hello! Welcome to HighPoint Resort. How can I help you today?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const faqs = [
    {
      question: "Check-in time",
      answer:
        "Check-in time is 2:00 PM and check-out is 11:00 AM.",
    },
    {
      question: "Pool hours",
      answer:
        "Our swimming pool is open daily from 7:00 AM to 8:00 PM.",
    },
    {
      question: "Restaurant hours",
      answer:
        "Our restaurant serves breakfast (7-10 AM), lunch (12-3 PM), and dinner (6-10 PM).",
    },
    {
      question: "Location",
      answer:
        "We are located in Olooloitikosh, Isinya, Kajiado County - in the suburbs of Kitengela.",
    },
  ];

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = { type: "user", text: inputMessage };
    setMessages((prev) => [...prev, userMessage]);

    // Simple FAQ matching
    const lowerInput = inputMessage.toLowerCase();
    let botResponse =
      "Thank you for your question. For detailed inquiries, please contact us at highpointresort@gmail.com or call us.";

    if (
      lowerInput.includes("check-in") ||
      lowerInput.includes("check in") ||
      lowerInput.includes("time")
    ) {
      botResponse = faqs[0].answer;
    } else if (
      lowerInput.includes("pool") ||
      lowerInput.includes("swim")
    ) {
      botResponse = faqs[1].answer;
    } else if (
      lowerInput.includes("restaurant") ||
      lowerInput.includes("food") ||
      lowerInput.includes("dining")
    ) {
      botResponse = faqs[2].answer;
    } else if (
      lowerInput.includes("location") ||
      lowerInput.includes("where") ||
      lowerInput.includes("address")
    ) {
      botResponse = faqs[3].answer;
    } else if (
      lowerInput.includes("book") ||
      lowerInput.includes("reservation")
    ) {
      botResponse =
        "You can book a room or make a reservation through our website or contact us at highpointresort@gmail.com";
    }

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: botResponse },
      ]);
    }, 500);

    setInputMessage("");
  };

  return (
    <>
      {/* WhatsApp Button */}
      {!isOpen && (
        <a
          href="https://wa.me/message/AEGRESS6JWKNI1"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-24 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all z-50 group"
          title="Chat on WhatsApp"
        >
          <WhatsAppIcon className="w-7 h-7" />
          <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp
          </span>
        </a>
      )}

      {/* Chat Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all z-50 group"
          title="Chat with AI"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute right-16 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat with AI
          </span>
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
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.type === "user"
                      ? "bg-red-600 text-white"
                      : "bg-gray-100 text-black"
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
                onChange={(e) =>
                  setInputMessage(e.target.value)
                }
                onKeyPress={(e) =>
                  e.key === "Enter" && handleSendMessage()
                }
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