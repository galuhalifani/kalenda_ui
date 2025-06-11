
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, MessageCircle, Clock, Users, Shield, Smartphone } from "lucide-react";

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
              How to Use Kalenda
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              Your complete guide to scheduling meetings effortlessly with WhatsApp and AI
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <Tabs defaultValue="setup" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="setup" className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                Setup
              </TabsTrigger>
              <TabsTrigger value="scheduling" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Scheduling
              </TabsTrigger>
              <TabsTrigger value="features" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" />
                Features
              </TabsTrigger>
              <TabsTrigger value="tips" className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Tips
              </TabsTrigger>
            </TabsList>

            <TabsContent value="setup" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-green-500" />
                    Getting Started
                  </CardTitle>
                  <CardDescription>
                    Follow these simple steps to set up Kalenda with your calendar
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex gap-4">
                      <Badge variant="outline" className="min-w-8 h-8 rounded-full flex items-center justify-center">1</Badge>
                      <div>
                        <h3 className="font-semibold">Connect Your Calendar</h3>
                        <p className="text-gray-600">Sign in and grant Kalenda permission to access your Google Calendar. We only read your availability and create events you approve.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Badge variant="outline" className="min-w-8 h-8 rounded-full flex items-center justify-center">2</Badge>
                      <div>
                        <h3 className="font-semibold">Save Our WhatsApp Number</h3>
                        <p className="text-gray-600">Add <strong>+62 813-8514-2847</strong> to your contacts as "Kalenda" for easy access.</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Badge variant="outline" className="min-w-8 h-8 rounded-full flex items-center justify-center">3</Badge>
                      <div>
                        <h3 className="font-semibold">Start Scheduling</h3>
                        <p className="text-gray-600">Send your first message to Kalenda and experience AI-powered scheduling!</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scheduling" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Basic Scheduling</CardTitle>
                    <CardDescription>Simple meeting requests</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-green-800 mb-2">Example:</p>
                        <p className="text-green-700">"Schedule a 1-hour meeting with John tomorrow at 2 PM"</p>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Kalenda checks your availability</li>
                        <li>• Creates the meeting if you're free</li>
                        <li>• Sends confirmation with details</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Smart Scheduling</CardTitle>
                    <CardDescription>Let AI find the best time</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-blue-800 mb-2">Example:</p>
                        <p className="text-blue-700">"Find a good time this week for a 30-min call with Sarah"</p>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• AI analyzes your calendar</li>
                        <li>• Suggests optimal time slots</li>
                        <li>• You choose your preferred option</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Rescheduling</CardTitle>
                    <CardDescription>Change meetings easily</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-orange-800 mb-2">Example:</p>
                        <p className="text-orange-700">"Move my 3 PM meeting with Mike to Friday"</p>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Identifies the correct meeting</li>
                        <li>• Checks new time availability</li>
                        <li>• Updates calendar automatically</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cancellations</CardTitle>
                    <CardDescription>Cancel when plans change</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="bg-red-50 p-4 rounded-lg">
                        <p className="text-sm font-medium text-red-800 mb-2">Example:</p>
                        <p className="text-red-700">"Cancel my meeting with Lisa tomorrow"</p>
                      </div>
                      <ul className="space-y-2 text-sm text-gray-600">
                        <li>• Finds the specified meeting</li>
                        <li>• Removes from your calendar</li>
                        <li>• Confirms cancellation</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MessageCircle className="h-5 w-5 text-blue-500" />
                      Natural Language
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Chat naturally as you would with a human assistant. No need to learn special commands or formats.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Calendar className="h-5 w-5 text-green-500" />
                      Smart Conflict Detection
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Automatically checks for scheduling conflicts and suggests alternative times when you're busy.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-purple-500" />
                      Multi-person Meetings
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Schedule meetings with multiple people and let Kalenda handle the coordination.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Clock className="h-5 w-5 text-orange-500" />
                      Flexible Timing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Use relative times like "tomorrow," "next week," or "in 2 hours" for easy scheduling.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Shield className="h-5 w-5 text-red-500" />
                      Privacy Focused
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Your calendar data is never sold or shared. We only access what's needed for scheduling.</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-5 w-5 text-indigo-500" />
                      WhatsApp Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Works entirely through WhatsApp - no need to download another app or remember new passwords.</p>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tips" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Pro Tips for Better Scheduling</CardTitle>
                  <CardDescription>Make the most of your Kalenda experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold mb-3">Be Specific When Possible</h3>
                      <div className="grid gap-3 md:grid-cols-2">
                        <div className="bg-green-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-green-800 mb-1">Good:</p>
                          <p className="text-green-700 text-sm">"Schedule a 30-minute client call with John Smith on Tuesday at 2 PM"</p>
                        </div>
                        <div className="bg-red-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-red-800 mb-1">Less Clear:</p>
                          <p className="text-red-700 text-sm">"Set up a meeting"</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Include Key Details</h3>
                      <ul className="space-y-2 text-gray-600">
                        <li>• <strong>Duration:</strong> "30 minutes," "1 hour," "2-hour workshop"</li>
                        <li>• <strong>Participants:</strong> Names or roles of attendees</li>
                        <li>• <strong>Purpose:</strong> "client call," "team standup," "project review"</li>
                        <li>• <strong>Location:</strong> "Zoom call," "conference room," "coffee shop"</li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Time Flexibility</h3>
                      <p className="text-gray-600 mb-3">When you're flexible with timing, mention it:</p>
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <p className="text-blue-700 text-sm">"Schedule a call with Sarah sometime this week, preferably in the afternoon"</p>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-3">Recurring Meetings</h3>
                      <p className="text-gray-600 mb-3">Set up regular meetings easily:</p>
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <p className="text-purple-700 text-sm">"Schedule a weekly team standup every Monday at 9 AM"</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Common Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-900">What if I make a mistake in my message?</h4>
                      <p className="text-gray-600 text-sm">Just send a follow-up message to clarify or correct. Kalenda understands context from your conversation.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Can I schedule meetings for other people?</h4>
                      <p className="text-gray-600 text-sm">Currently, Kalenda can only manage your personal calendar. Each person needs their own Kalenda connection.</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">What if the suggested time doesn't work?</h4>
                      <p className="text-gray-600 text-sm">Simply tell Kalenda the time doesn't work and suggest alternatives. It will find new options based on your availability.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  );
};

export default Guide;
