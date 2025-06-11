
import { ScrollText, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
              <ScrollText className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">📜 Kalenda Terms of Service</h1>
              <p className="text-xl text-blue-100 mt-2">Effective Date: 20-05-2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-12">
            Welcome to Kalenda! These Terms of Service ("Terms") govern your access to and use of Kalenda ("the Service"), a WhatsApp-based calendar assistant that helps users manage their schedules through natural language inputs. By using the Service, you agree to be bound by these Terms.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Description of the Service</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalenda allows users to interact with a smart assistant via WhatsApp to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Add, fetch, and summarize calendar events</li>
              <li>Extract events draft from text, images, and voice notes</li>
              <li>Optionally connect to Google Calendar for direct integration to user's own google calendar</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. User Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              By using Kalenda, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Provide accurate and truthful information</li>
              <li>Use the Service in compliance with all applicable laws</li>
              <li>Not misuse the Service for spamming, automated querying, or abusive behavior</li>
              <li>If choosing to connect to Google Calendar, only connect to your own calendar under your own Google Account.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Google Calendar Access</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              When you choose to connect your Google Calendar:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Kalenda will request access to your calendar and events</li>
              <li>Access is granted through Google OAuth and can be revoked at any time</li>
              <li>Your tokens are encrypted and stored securely</li>
              <li>Kalenda does not share or sell your calendar data</li>
              <li>Only connect to your own Google Calendar under your own account</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your privacy is important to us. Please refer to our{" "}
              <Link to="/privacy" className="text-blue-600 hover:text-blue-700 underline">
                Privacy Policy
              </Link>{" "}
              for details on how your data is collected, used, and protected.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content, branding, and underlying software in Kalenda are the property of the creators. You may not copy, modify, distribute, or use any part of the Service without explicit permission.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Disclaimers</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Kalenda is provided "as is" and "as available," without warranty of any kind.</li>
              <li>We do not guarantee that the Service will be error-free or continuously available.</li>
              <li>Kalenda may depend on third-party services like WhatsApp, Google Calendar, and OpenAI, which we do not control.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, Kalenda and its creators shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use the Service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              You may stop using Kalenda at any time. We reserve the right to suspend or terminate access to the Service for violations of these Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Changes to These Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update these Terms from time to time. Significant changes will be communicated through the Service or the associated website. Continued use after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              For any questions or concerns about these Terms, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a href="mailto:kalenda.bot@gmail.com" className="text-blue-600 hover:text-blue-700 underline">
                  kalenda.bot@gmail.com
                </a>{" "}
                or{" "}
                <a href="mailto:galuh.adika@gmail.com" className="text-blue-600 hover:text-blue-700 underline">
                  galuh.adika@gmail.com
                </a>
              </p>
            </div>
          </section>

          <div className="text-center mt-16 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
            <p className="text-gray-700 font-medium">
              Stay organized. Stay human. Use Kalenda.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            variant="outline"
            className="px-8 py-3"
          >
            Back to Top
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Terms;
