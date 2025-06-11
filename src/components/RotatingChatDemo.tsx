
import { useState, useEffect } from "react";
import ChatDemo from "./ChatDemo";
import ChatDemoPadel from "./ChatDemoPadel";

const RotatingChatDemo = () => {
  const [currentDemo, setCurrentDemo] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false);
      
      setTimeout(() => {
        setCurrentDemo(prev => prev === 0 ? 1 : 0);
        setIsVisible(true);
      }, 300); // Half of transition duration
    }, 8000); // Change demo every 8 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <div 
        className={`transition-opacity duration-600 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {currentDemo === 0 ? <ChatDemo /> : <ChatDemoPadel />}
      </div>
    </div>
  );
};

export default RotatingChatDemo;
