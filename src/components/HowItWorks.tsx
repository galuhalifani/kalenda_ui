
import { ArrowRight, MessageCircle, Brain, Calendar } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Send a Message",
    description: "Text, voice note, or image - communicate however feels natural to you.",
    color: "text-blue-600",
    bgColor: "bg-blue-100"
  },
  {
    icon: Brain,
    title: "AI Understands",
    description: "Our LLM processes your message and extracts all the important event details.",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    icon: Calendar,
    title: "Calendar Updated",
    description: "Event automatically added to your calendar with reminders and all details.",
    color: "text-green-600",
    bgColor: "bg-green-100"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How Kalenda Works
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Three simple steps to transform your scheduling experience
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step */}
                <div className="text-center">
                  <div className={`mx-auto w-16 h-16 ${step.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <step.icon className={`h-8 w-8 ${step.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full transform -translate-y-1/2 w-8">
                    <ArrowRight className="h-6 w-6 text-gray-400 mx-auto" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* Architecture diagram */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Built on Robust Architecture</h3>
          <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">WhatsApp</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">Twilio</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">Flask API</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">GPT AI</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium">Google Calendar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
