
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
                <CardDescription>Chat Kalenda</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Try ask Kalenda, it may just know what you need
                </p>
                <p className="font-semibold text-green-700 mb-4">+1234 261 6270</p>
                <Button 
                  onClick={() => window.open('https://wa.me/12342616270?text=Hi%20Kalenda!', '_blank')}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Chat Kalenda
                </Button>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="border-2 border-blue-100 hover:border-blue-200 transition-colors">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  Email Us
                </CardTitle>
                <CardDescription>Send us a detailed message</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  For detailed inquiries or business partnerships, email us directly.
                </p>
                <p className="font-semibold text-blue-700 mb-4">kalenda.bot@gmail.com</p>
                <Button 
                  onClick={() => window.open('mailto:kalenda.bot@gmail.com', '_blank')}
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
                  Simply send a message to our WhatsApp number (+12342616270) and follow the guide. You can use our public shared calendar if you wish to test or still prefer to not connect to your own. To add or fetch events to you own calendar, you need to connect your own Google Calendar by typing 'login'.
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
                  At this moment, we only support personal/individual Google Calendar.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How much does Kalenda cost?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Kalenda is currently free to use with certain limitations on number of chats per day. If you wish to increase your limit, please provide us feedback via kalenda.id/feedback. In case there are updates on premium or new plans for pricing, all information will be added to our website.
                </p>
              </CardContent>
            </Card>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
