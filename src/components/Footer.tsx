
import { MessageCircle, Mail, Shield, FileText, HelpCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="h-8 w-8 text-green-500" />
              <span className="text-2xl font-bold">Kalenda</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your AI calendar assistant that makes scheduling as easy as sending a WhatsApp message.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="h-4 w-4" />
              <span className="text-sm">hello@kalenda.id</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="/features" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a></li>
              <li><a href="/how-it-works" className="text-gray-400 hover:text-white text-sm transition-colors">How it Works</a></li>
              <li><a href="/pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a></li>
              <li><a href="/demo" className="text-gray-400 hover:text-white text-sm transition-colors">Try Demo</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/data-deletion" className="text-gray-400 hover:text-white text-sm transition-colors">Data Deletion</a>
              </li>
              <li>
                <a href="/support" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                  <HelpCircle className="h-3 w-3" />
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</a></li>
              <li><a href="/blog" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white text-sm transition-colors">Careers</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2024 Kalenda. All rights reserved.
            </div>
            
            {/* OAuth Compliance Notice */}
            <div className="text-gray-400 text-xs text-center md:text-right">
              <p>This app complies with Google API Services User Data Policy</p>
              <p className="mt-1">
                <a href="/privacy-policy" className="underline hover:text-white">Privacy Policy</a> | 
                <a href="/terms-of-service" className="underline hover:text-white ml-1">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
