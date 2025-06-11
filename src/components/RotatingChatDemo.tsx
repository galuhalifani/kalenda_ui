
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ChatDemo from "./ChatDemo";
import ChatDemoPadel from "./ChatDemoPadel";
import ChatDemoEmail from "./ChatDemoEmail";
import ChatDemoAvailability from "./ChatDemoAvailability";
import ChatDemoItalian from "./ChatDemoItalian";

const RotatingChatDemo = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const demos = [
    <ChatDemo key="demo1" />, 
    <ChatDemoPadel key="demo2" />, 
    <ChatDemoEmail key="demo3" />,
    <ChatDemoAvailability key="demo4" />,
    <ChatDemoItalian key="demo5" />
  ];

  const nextDemo = () => {
    setCurrentDemo(prev => (prev + 1) % demos.length);
  };

  const prevDemo = () => {
    setCurrentDemo(prev => (prev - 1 + demos.length) % demos.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextDemo();
    }, 8000); // Change demo every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      {/* Chat demos container with slide transition */}
      <div className="overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentDemo * 100}%)` }}
        >
          {demos.map((demo, index) => (
            <div key={index} className="w-full flex-shrink-0">
              {demo}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevDemo}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Previous demo"
      >
        <ChevronLeft className="h-5 w-5 text-gray-700" />
      </button>

      <button
        onClick={nextDemo}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
        aria-label="Next demo"
      >
        <ChevronRight className="h-5 w-5 text-gray-700" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {demos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentDemo(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentDemo 
                ? 'bg-blue-500 w-6' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to demo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default RotatingChatDemo;
