
import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Video, Users } from "lucide-react";

const CTA = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 py-24">
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to make scheduling effortless?
          </h2>
          
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              <MessageCircle className="mr-2 h-5 w-5" />
              Try Kalenda
            </Button>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              <Video className="mr-2 h-5 w-5" />
              View Demo Video
            </Button>
          </div>
          
          <div className="mt-12 flex items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span className="text-sm">Perfect for families</span>
            </div>
            <div className="h-4 w-px bg-white/30"></div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm">Works on WhatsApp</span>
            </div>
            <div className="h-4 w-px bg-white/30"></div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="text-sm">Google Calendar sync</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;
