
import { MessageCircle, Mail, Shield, FileText, HelpCircle, Pencil } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/lovable-uploads/5a8b5ed6-5d6c-4e4e-8dd8-64dccd82688b.png" 
                alt="Kalenda Logo" 
                className="h-8 w-8"
              />
              <span className="text-2xl font-bold">Kalenda</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Your AI calendar assistant that makes scheduling as easy as sending a WhatsApp message.
            </p>
            <div className="flex items-center gap-2 text-gray-400">
              <Mail className="h-4 w-4" />
              <span className="text-sm">kalenda.bot@gmail.com</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="/guide" className="text-gray-400 hover:text-white text-sm transition-colors">User Guide</a></li>
              <li><a href="/demo" className="text-gray-400 hover:text-white text-sm transition-colors">Watch Demo</a></li>
              <li><a href="https://wa.me/12342616270?text=Hi%20Kalenda!" className="text-gray-400 hover:text-white text-sm transition-colors">Try Kalenda!</a></li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal & Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                  <Shield className="h-3 w-3" />
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                  <FileText className="h-3 w-3" />
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/feedback" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                  <Pencil className="h-3 w-3" />
                  Feedback
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-1">
                  <HelpCircle className="h-3 w-3" />
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Kalenda. All rights reserved.
            </div>
            
            {/* OAuth Compliance Notice */}
            <div className="text-gray-400 text-xs text-center md:text-right">
              <p>This app has been verified and complies with Google API Services User Data Policy</p>
              <p className="mt-1">
                <a href="/privacy" className="underline hover:text-white">Privacy Policy</a> | 
                <a href="/terms" className="underline hover:text-white ml-1">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
