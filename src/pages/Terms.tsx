
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
              <h1 className="text-4xl font-bold">Terms of Service</h1>
              <p className="text-xl text-blue-100 mt-2">Last updated: June 11, 2025</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 lg:px-8 py-16">
        <div className="prose prose-lg max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Welcome to Kalenda ("we," "our," or "us"). These Terms of Service ("Terms") govern your use of our AI-powered calendar assistant service accessible via WhatsApp and our website at kalenda.id.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the service.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Kalenda provides an AI-powered calendar management service through WhatsApp that helps users:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Schedule, reschedule, and cancel meetings</li>
              <li>Check calendar availability</li>
              <li>Manage calendar events through natural language processing</li>
              <li>Integrate with Google Calendar</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts and Registration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To use Kalenda, you must:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Have a valid WhatsApp account</li>
              <li>Connect your Google Calendar (optional but recommended)</li>
              <li>Provide accurate and complete information</li>
              <li>Be at least 13 years old</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
            <p className="text-gray-700 leading-relaxed mb-4">You agree not to:</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Use the service for any unlawful purpose or illegal activity</li>
              <li>Send spam, abusive, or harassing messages</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the service</li>
              <li>Use the service to harm minors in any way</li>
              <li>Impersonate any person or entity</li>
              <li>Upload or transmit viruses or malicious code</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy and Data</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, to understand our practices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using our service, you consent to the collection and use of information as outlined in our Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Availability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We strive to provide reliable service, but we cannot guarantee:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Uninterrupted or error-free service</li>
              <li>100% uptime availability</li>
              <li>Compatibility with all devices or platforms</li>
              <li>That defects will be corrected immediately</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The service and its original content, features, and functionality are owned by Kalenda and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              In no event shall Kalenda be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may terminate or suspend your access immediately, without prior notice, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:hello@kalenda.id" className="text-blue-600 hover:text-blue-700 underline">hello@kalenda.id</a></p>
              <p className="text-gray-700 mb-2"><strong>Website:</strong> <a href="https://kalenda.id" className="text-blue-600 hover:text-blue-700 underline">https://kalenda.id</a></p>
              <p className="text-gray-700"><strong>Address:</strong> Indonesia</p>
            </div>
          </section>
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
