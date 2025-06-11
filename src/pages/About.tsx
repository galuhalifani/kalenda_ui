
import { MessageSquare, Brain, Calendar, Camera, Mic, Users, Shield, ArrowLeft, Zap, Clock, Heart } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-green-50 to-purple-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <img 
                  src="/lovable-uploads/5a8b5ed6-5d6c-4e4e-8dd8-64dccd82688b.png" 
                  alt="Kalenda Logo" 
                  className="h-24 w-24 drop-shadow-lg"
                />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-6">
              Kalenda
            </h1>
            <div className="flex justify-center mb-6">
              <Badge variant="outline" className="text-lg px-4 py-2 bg-white/50 backdrop-blur-sm">
                Your AI Calendar Assistant
              </Badge>
            </div>
            <p className="text-xl leading-8 text-gray-600 max-w-4xl mx-auto">
              A smart WhatsApp-based assistant powered by a <span className="font-semibold text-blue-600">Large Language Model (LLM)</span> to help busy individuals and families manage their schedules effortlessly through <span className="font-semibold text-green-600">natural language understanding</span> and <span className="font-semibold text-purple-600">Google Calendar API Integration</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Background Story */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Background</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </div>
          
          <Card className="border-2 border-gray-100 bg-gradient-to-br from-gray-50 to-white">
            <CardContent className="p-8">
              <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                Between school events, birthday invites, doctor appointments, and daily chaos, staying organized is harder than it looks — especially when you're the default scheduler at home. Opening Google Calendar and typing in each event one-by-one can be tedious.
              </p>
              
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-start gap-3">
                  <MessageSquare className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Make scheduling feel conversational, not technical</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Zap className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Create events by sending a text, screenshot, or voice note</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Simplify calendar management for busy parents, professionals, and caretakers</h4>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-medium text-gray-900">Reduce mental load from remembering dates, times, and deadlines</h4>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🔧 Key Features</h2>
            <p className="text-lg text-gray-600">Powerful capabilities that make scheduling effortless</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="hover:shadow-lg transition-shadow border-2 border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <MessageSquare className="h-6 w-6 text-blue-600" />
                  Natural Language Input
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">Add events simply by texting things like:</p>
                <div className="bg-blue-50 p-3 rounded-lg italic text-blue-800">
                  "Mary's ballet recital Saturday 3PM at Kemang Village"
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-green-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <Camera className="h-6 w-6 text-green-600" />
                  Image Parsing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Forward a photo of a flyer or invitation — Kalenda will extract event info automatically</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-purple-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <Mic className="h-6 w-6 text-purple-600" />
                  Voice Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Don't feel like typing? Send a voice note — Kalenda transcribes and schedules it for you</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-orange-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <Calendar className="h-6 w-6 text-orange-600" />
                  Fetch Calendar Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Kalenda is able to fetch and summarize your calendar events</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-teal-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <Clock className="h-6 w-6 text-teal-600" />
                  Analyze Availability Slots
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Kalenda's smart analyzer can find you availability based on your current calendar slots</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow border-2 border-indigo-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-lg">
                  <Brain className="h-6 w-6 text-indigo-600" />
                  Google Calendar Integration
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Securely connect your Google Calendar so Kalenda can add and fetch events directly to your own calendar</p>
                <Badge variant="outline" className="text-xs">Optional</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🔁 How It Works</h2>
          </div>
          
          <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-100">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2">
                  <MessageSquare className="h-8 w-8 text-blue-600" />
                  <span className="font-semibold text-gray-900">User Input</span>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="flex items-center gap-2">
                  <Brain className="h-8 w-8 text-purple-600" />
                  <span className="font-semibold text-gray-900">Human Language Processing with AI</span>
                </div>
                <div className="text-2xl text-gray-400">→</div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-8 w-8 text-green-600" />
                  <span className="font-semibold text-gray-900">Calendar Action</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Who It's For</h2>
            <p className="text-lg text-gray-600">Kalenda is perfect for:</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Parents</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Juggling school, daycare, and appointments</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-lg">Professionals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Who prefer messaging over app interfaces</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Anyone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Who wants to get organized without opening a calendar app</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Privacy & Architecture */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  Privacy First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  We never sell or share your data. Calendar access is optional and revocable. See{" "}
                  <Link to="/privacy" className="text-green-600 hover:text-green-700 underline font-medium">
                    Privacy Policy
                  </Link>{" "}
                  for details.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-blue-600" />
                  🛠️ Architecture Overview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                  <div className="whitespace-nowrap text-gray-700">
                    User (WhatsApp) ──▶ Twilio Webhook ──▶ Flask API (Kalenda) ──▶ [ AI: GPT / Whisper ] ──▶ Google Calendar API ──▶ MongoDB
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Organized?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Stay organized. Stay human. Just message Kalenda.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="https://wa.me/12342616270?text=Hi%20Kalenda!" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get Started
            </Link>
            <Link 
              to="/demo" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold"
            >
              Try Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
