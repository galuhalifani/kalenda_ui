
import { useState, useEffect } from "react";
import { Calendar, Check, Clock, MapPin } from "lucide-react";

const messages = [
  {
    id: 1,
    text: "When is padel",
    sender: "user",
    time: "13:04"
  },
  {
    id: 2,
    text: "Fetching your events...",
    sender: "kalenda",
    time: "13:04",
  },
  {
    id: 3,
    text: `Based on your query for "padel," the most likely match from the event list is the "Padel w/ Anna" event.\nHere are the details:\n\n- Event Name: Padel w/ Anna\n- Event Date and Time: Sat, 14 Jun 2025, 09:30 - 10:30 (Asia/Jakarta)\n- Location: Not specified\n- Description: Not specified\n- Participants/Invitees: Not specified\n\nPlease let me know if this is the event you were looking for or if you need more information!`,
    sender: "kalenda",
    time: "13:04",
  }
];

const ChatDemoPadel = () => {
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

export default ChatDemoPadel;
