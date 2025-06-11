
import { useState, useEffect } from "react";
import { Calendar } from "lucide-react";

const messages = [
  {
    id: 1,
    text: "📧 Email received from Ayyalah",
    sender: "kalenda",
    time: "15:26",
    isEmail: true
  },
  {
    id: 2,
    text: "Drafting...",
    sender: "kalenda",
    time: "15:26",
  },
  {
    id: 3,
    text: "Here is your event, please review:\n\n1. Event Name: Singalong Dress Rehearsal\n2. Event Date and Time: Wed, 11 Jun 2025 08:15 UTC+07:00 - Wed, 11 Jun 2025 09:15 UTC+07:00\n3. Event Location: None\n4. Event Description: The rehearsal is only for staff and students. -- Created by kalenda AI\n5. Attendees (emails): Not added\n6. Event Timezone: Asia/Jakarta\n7. Calendar Name: primary\n\nPlease confirm the above, or let me know if you'd like to modify some details.",
    sender: "kalenda",
    time: "15:26",
  },
  {
    id: 4,
    text: "Ok",
    sender: "user",
    time: "15:26"
  },
  {
    id: 5,
    text: "Adding your event...",
    sender: "kalenda",
    time: "15:26"
  },
  {
    id: 6,
    text: "Event Created!\n\n📅: Singalong Dress Rehearsal\n\n🕒: Wed, 11 Jun 2025 08:15 UTC+07:00\n\n👉: https://www.google.com/calendar/event?eid=OWVuN3FlZWRucG",
    sender: "kalenda",
    time: "15:26"
  }
];

const ChatDemoEmail = () => {
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
                  : message.isEmail
                  ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 rounded-bl-md shadow-sm border border-blue-200'
                  : 'bg-white text-gray-800 rounded-bl-md shadow-sm border'
              }`}
            >
              {message.isEmail && (
                <div className="mb-2 p-3 bg-white rounded-lg border shadow-sm">
                  <div className="text-xs text-gray-600 mb-1">
                    <strong>From:</strong> Ayyalah &lt;ayyalah@school.edu&gt;
                  </div>
                  <div className="text-xs text-gray-600 mb-2">
                    <strong>Subject:</strong> Saturday Morning Dress Rehearsal
                  </div>
                  <div className="text-xs text-gray-700 leading-relaxed">
                    Please be informed that we will be holding a Saturday Morning Dress Rehearsal on Wed, June 11...
                    <br />
                    • Kindly send in your child's white attire for the upcoming performance by Wed, June 11 at the latest.
                    <br />
                    • Please come before 8:00 am on the day as we will start the rehearsal at 8:15 am.
                    <br />
                    • The rehearsal is only for staff and students.
                  </div>
                </div>
              )}
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

export default ChatDemoEmail;
