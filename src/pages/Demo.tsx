
import { Play, ArrowLeft, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);

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
                {!isPlaying ? (
                  <div className="text-center">
                    <Button
                      size="lg"
                      onClick={() => setIsPlaying(true)}
                      className="mb-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
                    >
                      <Play className="h-6 w-6 mr-2" />
                      Play Demo Video
                    </Button>
                    <p className="text-gray-600">Duration: 3:45 minutes</p>
                  </div>
                ) : (
                  <div className="max-w-sm mx-auto">
                    <video
                      className="w-full h-auto rounded-lg shadow-lg"
                      controls
                      autoPlay
                      onEnded={() => setIsPlaying(false)}
                    >
                      <source src="/Kalenda_Demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

    </div>
  );
};

export default Demo;
