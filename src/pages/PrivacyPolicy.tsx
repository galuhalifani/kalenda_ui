
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
              <h1 className="text-4xl font-bold">Privacy Policy</h1>
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
              Kalenda ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AI-powered calendar assistant service through WhatsApp.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By using Kalenda, you agree to the collection and use of information in accordance with this policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personal Information</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>WhatsApp phone number and profile information</li>
              <li>Messages you send to Kalenda (text, voice, images)</li>
              <li>Calendar event details you share with us</li>
              <li>Google Calendar access tokens (if you choose to connect)</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Usage Data</h3>
            <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
              <li>Service usage statistics and analytics</li>
              <li>Error logs and debugging information</li>
              <li>Response times and performance metrics</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>To provide our service:</strong> Process your messages and create calendar events</li>
              <li><strong>To improve functionality:</strong> Analyze usage patterns to enhance our AI capabilities</li>
              <li><strong>To ensure security:</strong> Monitor for fraudulent or unauthorized activity</li>
              <li><strong>To provide support:</strong> Respond to your questions and technical issues</li>
              <li><strong>To send notifications:</strong> Calendar reminders and service updates (if enabled)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>We do not sell, trade, or rent your personal information to third parties.</strong> We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>With your consent:</strong> When you explicitly authorize us to share information</li>
              <li><strong>Service providers:</strong> Trusted third parties who assist in operating our service (Google Calendar API, Twilio, OpenAI)</li>
              <li><strong>Legal requirements:</strong> When required by law or to protect our legal rights</li>
              <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>End-to-end encryption for all communications</li>
              <li>Secure storage with industry-standard encryption</li>
              <li>Regular security audits and vulnerability assessments</li>
              <li>Limited access to personal data on a need-to-know basis</li>
              <li>Secure API connections with authentication tokens</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Google Calendar Integration</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you choose to connect your Google Calendar:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>We only access calendar data necessary to provide our service</li>
              <li>We comply with Google API Services User Data Policy</li>
              <li>You can revoke access at any time through your Google Account settings</li>
              <li>We do not store unnecessary calendar data beyond what's required for functionality</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We retain your information for as long as necessary to provide our services:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Message history:</strong> 30 days for context and support purposes</li>
              <li><strong>Calendar events:</strong> As long as they exist in your connected calendar</li>
              <li><strong>Account information:</strong> Until you request deletion or close your account</li>
              <li><strong>Usage analytics:</strong> Aggregated and anonymized data may be retained longer</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Portability:</strong> Request transfer of your data to another service</li>
              <li><strong>Withdrawal:</strong> Withdraw consent for data processing at any time</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              To exercise these rights, contact us at <a href="mailto:hello@kalenda.id" className="text-blue-600 hover:text-blue-700 underline">hello@kalenda.id</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Kalenda is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-700 leading-relaxed">
              Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Continued use of our service after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-2"><strong>Email:</strong> <a href="mailto:hello@kalenda.id" className="text-blue-600 hover:text-blue-700 underline">hello@kalenda.id</a></p>
              <p className="text-gray-700 mb-2"><strong>Website:</strong> <a href="https://kalenda.id" className="text-blue-600 hover:text-blue-700 underline">https://kalenda.id</a></p>
              <p className="text-gray-700"><strong>Address:</strong> Indonesia</p>
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
