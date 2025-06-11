import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, X, MessageCircle, Calendar, Shield, Users, Clock, Brain, Edit, Plus, BarChart3, Video } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Guide = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <img 
                src="/lovable-uploads/5a8b5ed6-5d6c-4e4e-8dd8-64dccd82688b.png" 
                alt="Kalenda Logo" 
                className="h-16 w-16"
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              📘 Kalenda — User Guide
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Your AI-powered WhatsApp assistant that helps you stay on top of your schedule with natural conversations. <em>Please note that Kalenda performs best in English</em>
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8 space-y-12">
          
          {/* Demo Video Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Video className="h-5 w-5 text-purple-500" />
                🎥 Kalenda Demo Video
              </CardTitle>
              <CardDescription>
                Watch how Kalenda works in action:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" size="lg" className="px-8 py-3 text-lg text-foreground hover:text-foreground">
                <Link to="/demo">
                  <Calendar className="mr-2 h-5 w-5" />
                  Try Kalenda
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* What Kalenda Can Do */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500" />
                🔍 What Kalenda Can Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Brain className="h-6 w-6 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-blue-700">🧠 Draft Event Details</h3>
                    <p className="text-gray-600 mb-2">Kalenda can extract event details from:</p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 ml-4">
                      <li>Freeform text</li>
                      <li>Images (e.g. screenshots, invites)</li>
                      <li>Voice notes</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Edit className="h-6 w-6 text-orange-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-orange-700">✏️ Modify Drafts</h3>
                    <p className="text-gray-600">You can edit the event details before confirming it gets added to your calendar.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Plus className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-green-700">📅 Add to Calendar</h3>
                    <p className="text-gray-600">Once confirmed, Kalenda adds your event to your calendar (shared or personal).</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Calendar className="h-6 w-6 text-purple-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-purple-700">📤 Fetch Calendar Events</h3>
                    <p className="text-gray-600">Ask Kalenda about your upcoming agenda.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <BarChart3 className="h-6 w-6 text-indigo-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-indigo-700">📊 Analyze Availability Slots</h3>
                    <p className="text-gray-600">Kalenda can scan your schedule and suggest available time slots for new events.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* What Kalenda Cannot Do */}
          <Card className="border-red-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700">
                <X className="h-5 w-5 text-red-500" />
                🚫 What Kalenda Cannot Do
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-700">❌ Edit or Manage Existing Events</h3>
                    <p className="text-gray-600">You cannot change or reschedule existing calendar events via Kalenda.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-700">❌ Delete Events</h3>
                    <p className="text-gray-600">Deleting events must be done manually through Google Calendar.</p>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <p className="text-red-700 text-sm">
                    <strong>Note:</strong> If you're using the <strong>shared public calendar</strong>, please email <strong>kalenda.bot@gmail.com</strong> to request modifications or deletions.
                  </p>
                </div>

                <div className="flex gap-3">
                  <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-700">❌ Send Event Reminders</h3>
                    <p className="text-gray-600">Google Calendar already has automatic reminder settings for your events.</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <X className="h-5 w-5 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-red-700">❌ Add recurring events</h3>
                    <p className="text-gray-600">This feature is still under development.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How to Use Kalenda */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="h-5 w-5 text-blue-500" />
                💬 How to Use Kalenda
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-blue-900">Message Kalenda on WhatsApp: <span className="font-bold">+1 (234) 261-6270</span></p>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li>• By default, Kalenda uses a <strong>public shared calendar</strong> (Kalenda's calendar).</li>
                  <li>• You can try all features using the shared calendar — no limitations.</li>
                  <li>• However, <strong>events added to the public calendar cannot be deleted or modified</strong> by you directly. Please avoid including sensitive information.</li>
                  <li>• To have full control over your events, you can <strong>connect your own Google Calendar</strong> (see below).</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Connecting Google Calendar */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-500" />
                🔐 Connecting Your Google Calendar
              </CardTitle>
              <CardDescription>
                Kalenda can connect to <strong>one calendar at a time</strong>.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="font-semibold text-green-700">✅ Commands:</h3>
                <div className="space-y-3">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <code className="font-mono text-green-800">login</code>
                    <p className="text-green-700 text-sm mt-1">→ Begin OAuth flow to connect your calendar once your email is whitelisted</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <code className="font-mono text-green-800">logout</code>
                    <p className="text-green-700 text-sm mt-1">→ Disconnect your Google Calendar and erase all stored credentials securely</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Adding Events */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Plus className="h-5 w-5 text-purple-500" />
                📝 Adding Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">You can tell Kalenda about an event by:</p>
                <div className="space-y-3">
                  <div>
                    <strong>• Typing:</strong>
                    <div className="bg-purple-50 p-3 rounded-lg mt-2">
                      <p className="text-purple-700 italic">"Lisa's ballet recital Saturday 10am at Kemang Village"</p>
                    </div>
                  </div>
                  <div>
                    <strong>• Forwarding a WhatsApp message</strong>
                  </div>
                  <div>
                    <strong>• Sending a screenshot or event image</strong>
                  </div>
                  <div>
                    <strong>• Sending a voice note</strong>
                  </div>
                </div>
                <p className="text-gray-600 italic">Kalenda will interpret it and show you a draft before adding it to your calendar.</p>
              </div>
            </CardContent>
          </Card>

          {/* Fetching Agenda */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-orange-500" />
                📆 Fetching Your Agenda
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-gray-700">Just ask Kalenda things like:</p>
                <div className="space-y-2">
                  <div className="bg-orange-50 p-2 rounded">
                    <p className="text-orange-700 italic">"What's my schedule today?"</p>
                  </div>
                  <div className="bg-orange-50 p-2 rounded">
                    <p className="text-orange-700 italic">"Do I have anything next Friday?"</p>
                  </div>
                  <div className="bg-orange-50 p-2 rounded">
                    <p className="text-orange-700 italic">"What time is the gala dinner event tomorrow?"</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Finding Available Time Slots */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-indigo-500" />
                📈 Finding Available Time Slots
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <p className="text-gray-700">Ask Kalenda about your free time:</p>
                <div className="space-y-2">
                  <div className="bg-indigo-50 p-2 rounded">
                    <p className="text-indigo-700 italic">"What's my availability for the next 3 days?"</p>
                  </div>
                  <div className="bg-indigo-50 p-2 rounded">
                    <p className="text-indigo-700 italic">"Find available slots for this weekend"</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">Kalenda will scan your calendar and suggest open times.</p>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-teal-500" />
                💡 Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-gray-700">
                <li>• Keep messages clear for best AI interpretation.</li>
                <li>• For sensitive or private events, use your personal calendar.</li>
                <li>• You can switch calendars anytime by logging out and logging-in.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Footer Message */}
          <div className="text-center py-8">
            <p className="text-lg text-gray-700 font-medium">Stay organized. Stay human.</p>
            <p className="text-lg text-gray-700 font-medium">Just message Kalenda.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guide;
