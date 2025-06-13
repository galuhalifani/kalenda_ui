
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { ArrowRight, MessageCircle, Brain, Calendar, Search } from "lucide-react";

const LikeSection = () => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkIfUserLiked = async () => {
      try {
        const serverUrl = import.meta.env.VITE_SERVER_URL;
        const response = await fetch(`${serverUrl}/checkLike`);
        if (response.ok) {
          const hasLikedString = await response.text();
          const hasLiked = hasLikedString.toLowerCase() === 'true';
          setLiked(hasLiked);
        }
      } catch (error) {
        console.error('Error checking like status:', error);
      }
    };

    const fetchLikeCount = async () => {
      try {
        const serverUrl = import.meta.env.VITE_SERVER_URL;
        const response = await fetch(`${serverUrl}/getlikes`);
        if (response.ok) {
          const likesString = await response.text();
          const likes = parseInt(likesString, 10);
          setLikeCount(isNaN(likes) ? 0 : likes);
        }
      } catch (error) {
        console.error('Error fetching like count:', error);
      } finally {
        setLoading(false);
      }
    };

    const initializeData = async () => {
      await Promise.all([checkIfUserLiked(), fetchLikeCount()]);
    };

    initializeData();
  }, []);

  const handleLike = async () => {
    if (!liked && !loading) {
      try {
        const serverUrl = import.meta.env.VITE_SERVER_URL;
        const response = await fetch(`${serverUrl}/likes`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        
        if (response.ok) {
          setLiked(true);
          setLikeCount(prev => prev + 1);
        }
      } catch (error) {
        console.error('Error adding like:', error);
      }
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
            disabled={liked || loading}
          >
            <Heart className={`mr-2 h-5 w-5 ${liked ? "fill-current" : ""}`} />
            {loading ? "Loading..." : liked ? "Thank you!" : "Like Kalenda"}
          </Button>
          
          <div className="text-sm text-muted-foreground">
            {likeCount} people like Kalenda
          </div>
        </div>
      </div>
      
      {/* Separator before Built on section */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 mt-16 mb-8">
        <Separator />
      </div>
      
      {/* Architecture diagram */}
        <div className="mb-3 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-8">Built on:</h3>
          <div className="bg-white rounded-2xl shadow-lg p-8 mx-auto max-w-4xl">
            <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-gray-600">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full font-medium">WhatsApp Twilio</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full font-medium">Flask API</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full font-medium">OpenAI LLM</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="px-4 py-2 bg-yellow-100 text-brown-700 rounded-full font-medium">OpenAI Whisper</span>
              <ArrowRight className="h-4 w-4 text-gray-400" />
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full font-medium">Google Calendar</span>
            </div>
          </div>
        </div>
    </section>
  );
};

export default LikeSection;
