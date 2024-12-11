import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

const Home = () => {
  const upcomingProjects = [
    {
      title: "Tech Skills Workshop",
      description: "Digital literacy program for underserved communities",
      formLink: "https://forms.google.com/your-form-link-1",
    },
    {
      title: "Environmental Cleanup",
      description: "Organizing community-wide environmental initiatives",
      formLink: "https://forms.google.com/your-form-link-2",
    },
    {
      title: "Mental Health Support",
      description: "Creating support networks for mental wellness",
      formLink: "https://forms.google.com/your-form-link-3",
    },
  ];

  const latestProjects = [
    {
      title: "Community Garden Initiative",
      description: "Creating sustainable food sources in urban areas",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    },
    {
      title: "Youth Education Program",
      description: "Empowering the next generation through knowledge",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    },
    {
      title: "Clean Water Project",
      description: "Providing access to clean water for communities",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Coming Soon Projects Section - Now positioned right after Hero */}
      <section className="py-20 bg-gradient-to-br from-[#E5DEFF] via-[#D6BCFA] to-[#9b87f5]">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-up">
            Coming Soon Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-md rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button
                  className="w-full group"
                  onClick={() => window.open(project.formLink, '_blank')}
                >
                  Register Interest
                  <ExternalLink className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 animate-fade-up">
            Latest Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestProjects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <Button className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;