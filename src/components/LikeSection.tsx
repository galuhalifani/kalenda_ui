
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useState } from "react";

const LikeSection = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(42); // Starting with a nice number

  const handleLike = () => {
    if (!liked) {
      setLiked(true);
      setLikeCount(prev => prev + 1);
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-pink-50 to-red-50">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl mb-4">
          Show Your Support
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          If you enjoy or like Kalenda, please click on the like button below
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <Button
            onClick={handleLike}
            size="lg"
            className={`px-8 py-3 text-lg transition-all duration-300 ${
              liked 
                ? "bg-red-500 hover:bg-red-600 text-white" 
                : "bg-white text-red-500 border-2 border-red-500 hover:bg-red-50"
            }`}
            disabled={liked}
          >
            <Heart className={`mr-2 h-5 w-5 ${liked ? "fill-current" : ""}`} />
            {liked ? "Thank you!" : "Like Kalenda"}
          </Button>
          
          <div className="text-sm text-muted-foreground">
            {likeCount} people like Kalenda
          </div>
        </div>
      </div>
      {/* Architecture diagram */}
        <div className="mt-20 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Built on:</h3>
          <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">WhatsApp Twilio</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">OpenAI LLM</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">Flask API</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">Google Calendar</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="px-4 py-2 bg-red-100 text-red-700 rounded-full font-medium">Redis</span>
            </div>
          </div>
        </div>
    </section>
  );
};

export default LikeSection;
