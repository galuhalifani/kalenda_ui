
import { MessageSquare, Image, Mic, Calendar, Clock, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Language Input",
    description: "Just text naturally like you would to a friend. 'Dentist appointment tomorrow 2PM' becomes a calendar event instantly.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Image,
    title: "Image Parsing",
    description: "Forward photos of invitations, flyers, or screenshots. Kalenda extracts all the event details automatically.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Mic,
    title: "Voice Support",
    description: "Too busy to type? Send a voice note and let Kalenda transcribe and schedule your events hands-free.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Calendar,
    title: "Google Calendar Sync",
    description: "Seamlessly integrate with your existing Google Calendar. All events sync automatically and securely.",
    gradient: "from-orange-500 to-red-500"
  },
  {
    icon: Clock,
    title: "Smart Availability",
    description: "Ask Kalenda to find free slots in your calendar. It analyzes your schedule and suggests the best times.",
    gradient: "from-indigo-500 to-blue-500"
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays private. We never sell or share your information. Calendar access is optional and revocable.",
    gradient: "from-gray-700 to-gray-900"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to stay organized
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kalenda transforms how you manage your calendar with AI-powered features that understand how you naturally communicate.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4`}>
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
