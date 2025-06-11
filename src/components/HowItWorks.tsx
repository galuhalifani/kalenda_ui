
import { ArrowRight, MessageCircle, Brain, Calendar, Search } from "lucide-react";

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
    description: "Our LLM processes your message and extracts all the important event details or requests.",
    color: "text-purple-600",
    bgColor: "bg-purple-100"
  }
];

const branches = [
  {
    icon: Calendar,
    title: "Calendar Updated",
    description: "Event automatically added to your calendar with relevant details.",
    color: "text-green-600",
    bgColor: "bg-green-100"
  },
  {
    icon: Search,
    title: "Calendar Analyzed",
    description: "Kalenda fetches specific event details, agenda, or analyzes your availability.",
    color: "text-orange-600",
    bgColor: "bg-orange-100"
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
            Simple steps to transform your scheduling experience
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          {/* Step 1: Send a Message */}
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <div className={`mx-auto w-16 h-16 ${steps[0].bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                {(() => {
                  const IconComponent = steps[0].icon;
                  return <IconComponent className={`h-8 w-8 ${steps[0].color}`} />;
                })()}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {steps[0].title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {steps[0].description}
              </p>
            </div>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center mb-8">
            <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-90" />
          </div>

          {/* Step 2: AI Understands */}
          <div className="flex justify-center mb-8">
            <div className="text-center">
              <div className={`mx-auto w-16 h-16 ${steps[1].bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                {(() => {
                  const IconComponent = steps[1].icon;
                  return <IconComponent className={`h-8 w-8 ${steps[1].color}`} />;
                })()}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {steps[1].title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {steps[1].description}
              </p>
            </div>
          </div>

          {/* Branching arrows */}
          <div className="flex justify-center mb-8">
            <div className="relative w-64 h-16">
              {/* Left branch */}
              <div className="absolute left-0 top-0">
                <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-15" />
              </div>
              {/* Right branch */}
              <div className="absolute right-0 top-0">
                <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-45" />
              </div>
              {/* Connecting lines */}
              <div className="absolute left-6 top-3 w-52 border-t border-gray-300"></div>
            </div>
          </div>

          {/* Final branches */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
            {branches.map((branch, index) => {
              const IconComponent = branch.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`mx-auto w-16 h-16 ${branch.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                    <IconComponent className={`h-8 w-8 ${branch.color}`} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {branch.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {branch.description}
                  </p>
                </div>
              );
            })}
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
