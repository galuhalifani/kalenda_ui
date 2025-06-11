
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

          {/* Arrow down */}
          <div className="flex justify-center mb-8">
            <ArrowRight className="h-6 w-6 text-gray-400 transform rotate-90" />
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
      </div>
    </section>
  );
};

export default HowItWorks;
