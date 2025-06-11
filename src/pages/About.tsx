
import { Users, Target, Lightbulb, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const About = () => {
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
                className="h-20 w-20"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              About Kalenda
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Revolutionizing calendar management through AI-powered WhatsApp conversations
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-blue-600" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To simplify calendar management for everyone by making scheduling as easy as sending a WhatsApp message. We believe that technology should work for people, not the other way around.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Lightbulb className="h-6 w-6 text-green-600" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  A world where scheduling conflicts are a thing of the past, and everyone can focus on what truly matters - the conversations and connections that happen during meetings.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
            <p className="mt-4 text-lg text-gray-600">How Kalenda came to life</p>
          </div>
          
          <div className="prose prose-lg mx-auto">
            <p className="text-gray-700 leading-relaxed mb-6">
              Kalenda was born from a simple frustration: the endless back-and-forth emails trying to find a time that works for everyone. Our founders, experienced professionals who spent countless hours managing calendars, realized there had to be a better way.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              In 2024, with the rise of conversational AI, we saw an opportunity to transform how people interact with their calendars. Instead of learning new apps or complex interfaces, why not just talk to your calendar like you would talk to a personal assistant?
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Today, Kalenda serves thousands of users across Indonesia and beyond, helping them reclaim hours of their time previously lost to scheduling coordination. Every message sent through our platform represents a small victory against the chaos of modern calendar management.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Values</h2>
            <p className="mt-4 text-lg text-gray-600">What drives us every day</p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Simplicity First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We believe the best technology is invisible. Kalenda works through WhatsApp - no new apps to learn or passwords to remember.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Privacy by Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Your calendar data is yours. We never sell your information and only access what's necessary to provide our service.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Human-Centered AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Our AI is designed to understand natural language and context, making interactions feel genuinely conversational.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Reliability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">When you trust us with your schedule, we take that responsibility seriously. Our systems are built for consistency and dependability.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Continuous Innovation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We're constantly improving based on user feedback and advancing AI capabilities to make scheduling even smarter.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Accessibility</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Calendar management should be available to everyone, regardless of technical skill level or device limitations.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">The Team Behind Kalenda</h2>
            <p className="mt-4 text-lg text-gray-600">Passionate individuals building the future of calendar management</p>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Users className="h-6 w-6 text-blue-600" />
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kalenda is built by a diverse team of engineers, designers, and AI specialists based in Indonesia. We combine deep technical expertise with a genuine understanding of the scheduling challenges faced by modern professionals.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">AI Engineering</Badge>
                <Badge variant="outline">WhatsApp Integration</Badge>
                <Badge variant="outline">Calendar APIs</Badge>
                <Badge variant="outline">Natural Language Processing</Badge>
                <Badge variant="outline">User Experience</Badge>
                <Badge variant="outline">Data Security</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Learn More?</h2>
          <p className="text-lg text-gray-600 mb-8">
            We'd love to hear from you. Reach out with questions, feedback, or just to say hello.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/guide" 
              className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Guide
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
