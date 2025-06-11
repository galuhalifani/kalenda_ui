
import { Play, ArrowLeft, Video } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
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
              <AspectRatio ratio={16 / 9} className="bg-gradient-to-br from-blue-100 to-green-100">
                <div className="w-full h-full flex items-center justify-center relative">
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
                    <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                      <div className="text-center text-white">
                        <Video className="h-16 w-16 mx-auto mb-4 opacity-60" />
                        <p className="text-xl mb-2">Demo Video Playing</p>
                        <p className="text-gray-300">Video placeholder - Integration pending</p>
                        <Button
                          variant="outline"
                          onClick={() => setIsPlaying(false)}
                          className="mt-4 text-white border-white hover:bg-white hover:text-gray-900"
                        >
                          Stop Video
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </AspectRatio>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Demo Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">What You'll See in the Demo</h2>
            <p className="mt-4 text-lg text-gray-600">Key features demonstrated in our video walkthrough</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Natural Language Scheduling</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">See how you can schedule meetings using everyday language like "Schedule a call with John tomorrow at 2 PM"</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Conflict Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Watch Kalenda automatically detect scheduling conflicts and suggest alternative times</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Calendar Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Learn how Kalenda seamlessly connects with your Google Calendar to manage events</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Rescheduling Made Easy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Discover how simple it is to move meetings around with natural language commands</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Multi-person Meetings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">See how Kalenda handles scheduling meetings with multiple participants</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Smart Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Watch how Kalenda's AI suggests optimal meeting times based on your availability</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Try It Yourself?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Start managing your calendar the smart way. It's as easy as sending a WhatsApp message.
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => window.open('https://wa.me/6281385142847', '_blank')}
              size="lg"
              className="bg-green-600 hover:bg-green-700"
            >
              Start Using Kalenda
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
            >
              <Link to="/guide">Read the Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Demo;
