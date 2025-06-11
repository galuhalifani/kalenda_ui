
import { Mail, MessageSquare, MapPin, Clock, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
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
              Contact Us
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-600 max-w-3xl mx-auto">
              We're here to help you get the most out of Kalenda. Reach out with any questions or feedback.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* WhatsApp */}
            <Card className="border-2 border-green-100 hover:border-green-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MessageSquare className="h-6 w-6 text-green-600" />
                  WhatsApp Support
                </CardTitle>
                <CardDescription>Get instant help through WhatsApp</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Message us directly on WhatsApp for quick support and assistance.
                </p>
                <p className="font-semibold text-green-700 mb-4">+62 813-8514-2847</p>
                <Button 
                  onClick={() => window.open('https://wa.me/6281385142847', '_blank')}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Start WhatsApp Chat
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  Email Support
                </CardTitle>
                <CardDescription>Send us a detailed message</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For detailed inquiries or business partnerships, email us directly.
                </p>
                <p className="font-semibold text-blue-700 mb-4">hello@kalenda.id</p>
                <Button 
                  onClick={() => window.open('mailto:hello@kalenda.id', '_blank')}
                  variant="outline"
                  className="w-full border-blue-200 text-blue-700 hover:bg-blue-50"
                >
                  Send Email
                </Button>
              </CardContent>
            </Card>

            {/* Office Location */}
            <Card className="border-2 border-purple-100 hover:border-purple-200 transition-colors md:col-span-2 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-purple-600" />
                  Our Location
                </CardTitle>
                <CardDescription>Based in Indonesia</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  We're proudly based in Indonesia, serving users across the archipelago and beyond.
                </p>
                <p className="font-semibold text-purple-700">Indonesia</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-center justify-center">
                <Clock className="h-6 w-6 text-orange-600" />
                Support Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">WhatsApp Support</h3>
                  <p className="text-gray-600">24/7 AI-powered responses</p>
                  <p className="text-sm text-gray-500 mt-1">Human support during business hours</p>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                  <p className="text-gray-600">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM WIB</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
            <p className="mt-4 text-lg text-gray-600">Quick answers to common questions</p>
          </div>
          
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How do I get started with Kalenda?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Simply send a message to our WhatsApp number (+62 813-8514-2847) and follow the setup instructions. You'll need to connect your Google Calendar for full functionality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is my calendar data safe?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Absolutely. We only access the calendar information necessary to provide our service, and we never sell or share your personal data. Read our <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline">Privacy Policy</Link> for full details.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What calendar apps does Kalenda support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Currently, we support Google Calendar integration. We're working on adding support for other popular calendar platforms in the future.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How much does Kalenda cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Kalenda is currently free to use during our beta period. We'll announce pricing details as we move toward our official launch.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of users who have simplified their calendar management with Kalenda
          </p>
          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => window.open('https://wa.me/6281385142847', '_blank')}
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              Start Using Kalenda
            </Button>
            <Button 
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link to="/guide">View User Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
