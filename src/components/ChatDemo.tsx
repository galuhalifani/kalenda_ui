
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
    text: "Drafting...",
    sender: "kalenda",
    time: "2:46 PM",
  },
  {
    id: 3,
    text: "Here is your event, please review:\n    1. Event Name: Mary's ballet recital\n    2. Event Date and Time: Sat, 16 Dec 2025 15:00 - 16:00 (UTC+7)\n    3. Event Location: Kemang Village\n    4. Event Description: -- Created by kalenda AI\n    5. Attendees (emails): Not added\n    6. Event Timezone: Asia/Jakarta\n    7. Calendar Name: primary\nPlease confirm the above, or let me know if you'd like to modify some details.",
    sender: "kalenda",
    time: "2:46 PM",
  },
  {
    id: 4,
    text: "Ok",
    sender: "user",
    time: "2:46 PM"
  },
  {
    id: 5,
    text: "Adding your event...",
    sender: "kalenda",
    time: "2:47 PM"
  },
  {
    id: 6,
    text: "Event Created!\n\n        📅: Mary's ballet recital\n\n        🕒: Sat, 16 Dec 2025 15:00 UTC+07:00\n\n        👉: https://www.google.com/calendar/event?eid=bWFybzM0",
    sender: "kalenda",
    time: "2:47 PM"
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
