
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Feedback = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 to-green-50 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-4 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/5a8b5ed6-5d6c-4e4e-8dd8-64dccd82688b.png" 
                alt="Kalenda Logo" 
                className="h-12 w-12"
              />
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Feedback & Bug Report
            </h1>
            <p className="mt-4 text-lg leading-6 text-gray-600">
              Help us improve Kalenda by sharing your feedback
            </p>
          </div>
        </div>
      </div>

      {/* Embedded Form */}
      <div className="py-8">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <iframe 
            src="https://docs.google.com/forms/d/1nHdqIlRJoradI2a-zC5NdQmxUBbOFHRuaTdP05Sn2j8/viewform?embedded=true"
            className="w-full h-[800px] border-0 rounded-lg shadow-lg"
            title="Kalenda Feedback Form"
          />
        </div>
      </div>
    </div>
  );
};

export default Feedback;
