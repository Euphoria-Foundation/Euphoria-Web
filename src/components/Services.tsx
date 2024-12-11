import { Code2, Palette, Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: <Code2 className="h-12 w-12 text-primary" />,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices for optimal performance and scalability."
  },
  {
    icon: <Palette className="h-12 w-12 text-primary" />,
    title: "Web Design",
    description: "Beautiful, intuitive designs that enhance user experience and strengthen your brand identity."
  },
  {
    icon: <Search className="h-12 w-12 text-primary" />,
    title: "SEO Optimization",
    description: "Improve your online visibility and drive organic traffic with our comprehensive SEO services."
  }
];

export const Services = () => {
  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive web solutions to help your business succeed in the digital world.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
              <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};