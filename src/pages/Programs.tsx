import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, BookOpen, List } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      title: "Education Initiative",
      description: "Providing educational resources and support to underprivileged communities.",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      details: "Our education program focuses on creating equal opportunities through literacy programs, tutoring, and educational workshops."
    },
    {
      title: "Community Development",
      description: "Building stronger communities through local engagement and support programs.",
      icon: <List className="h-6 w-6 text-primary" />,
      details: "We work directly with communities to identify needs and implement sustainable development solutions."
    },
    {
      title: "Health & Wellness",
      description: "Promoting health awareness and providing access to basic healthcare services.",
      icon: <Activity className="h-6 w-6 text-primary" />,
      details: "Our health initiatives include regular health camps, awareness programs, and wellness workshops."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] via-[#D6BCFA] to-[#9b87f5]">
      <Navbar />
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-4">Our Programs</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Discover how we're making a difference through our various initiatives and programs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {program.icon}
                  <CardTitle>{program.title}</CardTitle>
                </div>
                <CardDescription>{program.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{program.details}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Programs;