
import { useState, useEffect } from "react";
import { Calendar, Mic, Play } from "lucide-react";

const messages = [
  {
    id: 1,
    text: "",
    sender: "user",
    time: "12:17",
    isVoice: true,
    duration: "0:05"
  },
  {
    id: 2,
    text: "Drafting...",
    sender: "kalenda",
    time: "12:17",
  },
  {
    id: 3,
    text: "Here is your event, please confirm:\n\n1. Event Name: Italian class\n2. Event Date and Time: Thu, 22 May 2025 19:00 UTC+07:00 - Thu, 22 May 2025 21:00 UTC+07:00\n3. Event Location: Zoom meeting\n4. Event Description: -- Created by kalenda AI\n5. Participants Emails: Not added\n6. Event Timezone: Asia/Jakarta\n7. Event Calendar: primary",
    sender: "kalenda",
    time: "12:17",
  },
  {
    id: 4,
    text: "Confirmed",
    sender: "user",
    time: "12:17"
  },
  {
    id: 5,
    text: "Adding your event...",
    sender: "kalenda",
    time: "12:17"
  },
  {
    id: 6,
    text: "Event Created!\n\n📅: Italian class\n\n🕒: Thu, 22 May 2025 19:00 UTC+07:00\n\n👉: https://www.google.com/calendar/event?eid=YjA5MGkwMDRiM2hyNnI5b3Y1Y2Y3ZvN28gZ2FsdWguYWRpa2FAbQ",
    sender: "kalenda",
    time: "12:17"
  }
];

const ChatDemoItalian = () => {
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
              {message.isVoice ? (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Play className="h-4 w-4 fill-current" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      <div className="flex gap-1">
                        {[...Array(20)].map((_, i) => (
                          <div
                            key={i}
                            className="w-1 bg-white/60 rounded-full"
                            style={{
                              height: `${Math.random() * 16 + 4}px`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-xs text-blue-100">{message.duration}</p>
                  </div>
                  <Mic className="h-4 w-4" />
                </div>
              ) : (
                <p className="text-sm whitespace-pre-line">{message.text}</p>
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

export default ChatDemoItalian;
