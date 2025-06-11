
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

const privacyFeatures = [
  {
    icon: Shield,
    title: "Never Sold",
    description: "Your data is never sold or shared with third parties"
  },
  {
    icon: Lock,
    title: "Encrypted",
    description: "All keys are encrypted and secure"
  },
  {
    icon: Eye,
    title: "Transparent",
    description: "Clear privacy policy with no hidden surprises"
  },
  {
    icon: UserCheck,
    title: "Your Control",
    description: "Revoke calendar access anytime"
  }
];

const Privacy = () => {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Privacy First, Always
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Your calendar data is personal. We built Kalenda with privacy as the foundation, not an afterthought.
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {privacyFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-gray-700" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600">
            Want to know more?{" "}
            <a href="/privacy" className="text-blue-600 hover:text-blue-700 font-medium underline">
              Read our Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
