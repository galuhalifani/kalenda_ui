
import { Play, ArrowLeft, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsLoading(false);
      console.log("Video loaded successfully");
    };

    const handleError = (e: Event) => {
      console.error("Video loading error:", e);
      setHasError(true);
      setIsLoading(false);
    };

    const handleCanPlay = () => {
      setIsLoading(false);
    };

    video.addEventListener('loadeddata', handleLoadedData);
    video.addEventListener('error', handleError);
    video.addEventListener('canplay', handleCanPlay);

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData);
      video.removeEventListener('error', handleError);
      video.removeEventListener('canplay', handleCanPlay);
    };
  }, []);

  const handlePlayClick = async () => {
    if (videoRef.current && !isLoading) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.log("Play failed:", error);
        setHasError(true);
      }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/5a8b5ed6-5d6c-4e4e-8dd8-64dccd82688b.png" 
                alt="Kalenda Logo" 
                className="h-16 w-16"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              See Kalenda in Action
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Watch how easy it is to manage your calendar through simple WhatsApp messages
            </p>
          </div>
        </div>
      </section>

      {/* Video Demo */}
      <section className="py-16">
        <div className="mx-auto max-w-md px-6 lg:px-8">
          <Card className="overflow-hidden">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center gap-3 justify-center">
                <Video className="h-6 w-6 text-blue-600" />
                Kalenda Demo Video
              </CardTitle>
              <CardDescription>
                See how natural language scheduling works with Kalenda
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-blue-100 to-green-100 p-4">
                <div className="max-w-sm mx-auto relative">
                  {hasError ? (
                    <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <Video className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Video unavailable</p>
                        <p className="text-xs mt-1">Please try refreshing the page</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <video
                        ref={videoRef}
                        className="w-full h-auto rounded-lg shadow-lg"
                        controls
                        preload="metadata"
                        playsInline
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onEnded={() => setIsPlaying(false)}
                        poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236b7280'%3EKalenda Demo%3C/text%3E%3C/svg%3E"
                      >
                        <source src="/Kalenda_Demo.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      
                      {isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
                          <div className="text-center text-gray-600">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                            <p className="text-sm">Loading video...</p>
                          </div>
                        </div>
                      )}
                      
                      {!isPlaying && !isLoading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
                          <Button
                            onClick={handlePlayClick}
                            size="lg"
                            className="bg-white/90 text-black hover:bg-white"
                          >
                            <Play className="h-6 w-6 mr-2" />
                            Play Demo
                          </Button>
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Demo;
