
import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

const messages = [
  {
    id: 1,
    text: "what's my availability tomorrow",
    sender: "user",
    time: "22:17"
  },
  {
    id: 2,
    text: "Fetching your events...",
    sender: "kalenda",
    time: "22:17",
  },
  {
    id: 3,
    text: "Based on your event list and the default working hours of 8 AM to 7 PM, here is a summary of your available time slots for tomorrow, Wednesday, 11 June 2025:\n\nWed, 11 Jun 2025:\n- 7:00 AM - 8:15 AM\n- 9:15 AM - 11:00 AM\n- 12:00 PM - 3:30 PM\n- 4:00 PM - 7:00 PM\n\nPlease note that I have used the default working hours of 8 AM to 7 PM for this analysis.",
    sender: "kalenda",
    time: "22:17",
  }
];

const ChatDemoAvailability = () => {
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);

  useEffect(() => {
    const showMessage = (index: number) => {
      setTimeout(() => {
        setVisibleMessages(prev => [...prev, index]);
      }, index * 1500);
    };

    messages.forEach((_, index) => {
      showMessage(index);
    });
  }, []);

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* WhatsApp-style header */}
      <div className="bg-green-600 text-white p-4 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
          <Calendar className="h-5 w-5" />
        </div>
        <div>
          <h3 className="font-semibold">Kalenda AI</h3>
          <p className="text-xs text-green-100">online</p>
        </div>
      </div>

      {/* Chat messages */}
      <div className="p-4 space-y-4 h-96 overflow-y-auto bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} ${
              visibleMessages.includes(index) ? 'animate-fade-in' : 'opacity-0'
            }`}
          >
            <div
              className={`max-w-xs rounded-2xl px-4 py-2 ${
                message.sender === 'user'
                  ? 'bg-blue-500 text-white rounded-br-md'
                  : 'bg-white text-gray-800 rounded-bl-md shadow-sm border'
              }`}
            >
              <p className="text-sm whitespace-pre-line">{message.text}</p>
              <p className={`text-xs mt-1 ${
                message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
              }`}>
                {message.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatDemoAvailability;
