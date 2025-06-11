
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">📄 Kalenda Privacy Policy</h1>
              <p className="text-xl text-blue-100 mt-2">Effective Date: 20-05-2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-12">
            Kalenda ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you use the Kalenda assistant via WhatsApp.
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🔐</span> What Information We Collect
            </h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. User Identifiers</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>WhatsApp phone number (used to identify and respond to users)</li>
              <li>Optional: Email address (for connecting to your Google Calendar)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Messages & Media</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Messages you send to Kalenda (including text, images, voice notes, and screenshots)</li>
              <li>We temporarily process these information to extract events or understand your requests.</li>
              <li>We DO NOT store or retain any of those media or event details in our database</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Google Calendar Data (Optional)</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>If you choose to connect your Google Calendar, we access:
                <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                  <li>Your calendar list</li>
                  <li>Events you create or view through Kalenda</li>
                </ul>
              </li>
              <li>We store your access tokens securely and never share or sell your calendar data.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🛡️</span> How We Use Your Data
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              All data accessed via Google APIs is used solely to provide the Kalenda service to the end user.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your data only to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Understand and respond to your requests</li>
              <li>Help you create, summarize, and manage calendar events</li>
              <li>Connect to your Google Calendar if authorized</li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              We <strong>do not</strong> use your data for advertising, third-party analytics, or any kinds of artificial intelligence or machine learning training
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🧠</span> AI Processing
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalenda uses AI models (e.g., OpenAI's GPT and Whisper) to understand your messages. Processing may include text summarization, intent extraction, and voice transcription. All AI processing is secure and used solely to serve your request.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Kalenda does <strong>not</strong> use any data obtained through Google Workspace APIs — including any user and calendar data — to develop, improve, or train generalized artificial intelligence (AI) or machine learning (ML) models.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📁</span> Data Retention
            </h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Event-related messages may be temporarily stored to provide context and memory, and will be removed after 24 hours.</li>
              <li>Google access and refresh tokens are encrypted and stored securely.</li>
              <li>You may revoke access or delete your data at any time by messaging: <code className="bg-gray-100 px-2 py-1 rounded text-sm">revoke access</code>.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>🤝</span> Third-Party Services
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalenda uses the following services:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Twilio WhatsApp API</strong> — to receive and send messages</li>
              <li><strong>Google OAuth API</strong> — to connect your calendar, if you choose to</li>
              <li><strong>OpenAI API</strong> — to process your messages using AI</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              These providers have their own privacy policies and comply with standard data security practices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>📬</span> Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions, concerns, or requests regarding your data, please contact:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700"><strong>Email:</strong> <a href="mailto:kalenda.bot@gmail.com" className="text-blue-600 hover:text-blue-700 underline">kalenda.bot@gmail.com</a></p>
            </div>
          </section>
        </div>

        {/* Back to top button */}
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

export default PrivacyPolicy;
