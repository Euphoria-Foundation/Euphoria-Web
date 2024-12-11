import { ArrowRight, Heart, Leaf, Sun, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#E5DEFF] via-[#D6BCFA] to-[#9b87f5]">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMxMC4yNiAwIDE4LTguMDU5IDE4LTE4cy03Ljc0LTE4LTE4LTE4em0wIDMzYy04LjI4NCAwLTE1LTYuNzE2LTE1LTE1czYuNzE2LTE1IDE1LTE1IDE1IDYuNzE2IDE1IDE1LTYuNzE2IDE1LTE1IDE1eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      
      {/* Floating icons animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <Sparkles
            key={i}
            className={`absolute text-white/20 animate-float-${i + 1}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <div className="flex justify-center gap-4 mb-8 animate-fade-up">
            <Heart className="h-12 w-12 text-[#7E69AB] animate-pulse" />
            <Leaf className="h-12 w-12 text-[#6E59A5] animate-bounce" />
            <Sun className="h-12 w-12 text-[#9b87f5] animate-spin-slow" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-[#1A1F2C] mb-8 animate-fade-up">
            Creating Hope,
            <span className="block text-[#7E69AB] mt-2">Building Dreams</span>
          </h1>
          
          <p className="text-xl text-gray-700 mb-12 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Euphoria is dedicated to empowering communities through compassion, sustainability, and positive change. Join us in making a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="bg-[#7E69AB] text-white hover:bg-[#6E59A5] group transition-all duration-300 transform hover:scale-105">
              Get Involved
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-[#7E69AB] text-[#7E69AB] hover:bg-[#7E69AB] hover:text-white transition-all duration-300 transform hover:scale-105">
              Learn More
              <Star className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "1000+", label: "Lives Impacted", icon: Heart },
              { number: "50+", label: "Community Projects", icon: Leaf },
              { number: "25+", label: "Partner Organizations", icon: Star },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${0.6 + index * 0.2}s` }}
              >
                <stat.icon className="h-8 w-8 text-[#7E69AB] mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-[#1A1F2C] mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#7E69AB] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#7E69AB] rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};