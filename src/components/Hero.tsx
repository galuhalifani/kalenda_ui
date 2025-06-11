
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";
import RotatingChatDemo from "./RotatingChatDemo";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              AI-Powered Calendar Assistant
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Meet{" "}
            <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Kalenda
            </span>
          </h1>
          
          <p className="mt-6 text-xl leading-8 text-muted-foreground lg:text-2xl">
            Your AI calendar assistant that makes scheduling as easy as sending a WhatsApp message. 
            No more tedious calendar apps — just chat naturally.
          </p>
          
          <div className="mt-10 flex items-center justify-center">
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg text-foreground hover:text-foreground">
              <Calendar className="mr-2 h-5 w-5" />
              Try Kalenda
            </Button>
          </div>
        </div>
        
        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative -m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <RotatingChatDemo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
