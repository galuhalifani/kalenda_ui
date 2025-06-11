import { ArrowLeft, Video } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState } from "react";

const Demo = () => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
          >
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
              Watch how easy it is to manage your calendar through simple
              WhatsApp messages
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
                <div className="max-w-sm mx-auto relative aspect-video rounded-lg shadow-lg overflow-hidden">
                  {!isIframeLoaded && !hasError && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-10">
                      <div className="text-center text-gray-600">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
                        <p className="text-sm">Loading video...</p>
                      </div>
                    </div>
                  )}

                  {hasError ? (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <div className="text-center text-gray-600">
                        <Video className="h-12 w-12 mx-auto mb-2 opacity-50" />
                        <p className="text-sm">Video unavailable</p>
                        <p className="text-xs mt-1">
                          Please try refreshing the page
                        </p>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src="https://drive.google.com/file/d/19IpzDXDelZCNjRDpdMxW-Y2GmP_lyIjD/preview"
                      width="100%"
                      height="100%"
                      allow="autoplay"
                      className="w-full h-full"
                      onLoad={() => setIsIframeLoaded(true)}
                      onError={() => setHasError(true)}
                    />
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