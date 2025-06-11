
import { useState, useEffect } from "react";
import { Calendar, Check, Clock, MapPin } from "lucide-react";

const messages = [
  {
    id: 1,
    text: "Mary's ballet recital Saturday 3PM at Kemang Village",
    sender: "user",
    time: "2:45 PM"
  },
  {
    id: 2,
    text: "Perfect! I've added Mary's ballet recital to your calendar:\n\n📅 Saturday, Dec 16\n⏰ 3:00 PM\n📍 Kemang Village\n\nWould you like me to set a reminder?",
    sender: "kalenda",
    time: "2:46 PM",
    hasEvent: true
  },
  {
    id: 3,
    text: "Yes, 30 minutes before please",
    sender: "user",
    time: "2:46 PM"
  },
  {
    id: 4,
    text: "✅ Reminder set for 2:30 PM. You're all set! Enjoy the recital! 🩰",
    sender: "kalenda",
    time: "2:46 PM"
  }
];

const ChatDemo = () => {
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
              {message.hasEvent && (
                <div className="mt-2 p-2 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 text-green-700">
                    <Calendar className="h-4 w-4" />
                    <span className="text-xs font-medium">Event Created</span>
                  </div>
                </div>
              )}
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

export default ChatDemo;
