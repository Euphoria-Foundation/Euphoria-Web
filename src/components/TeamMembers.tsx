import { User } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";

const teamMembers = [
  {
    name: "John Smith",
    role: "Lead Developer",
    bio: "10+ years of experience in full-stack development and team leadership.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&w=400"
  },
  {
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    bio: "Passionate about creating beautiful and intuitive user experiences.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=400"
  },
  {
    name: "Michael Chen",
    role: "Backend Developer",
    bio: "Specializes in scalable architecture and cloud solutions.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=400"
  }
];

export const TeamMembers = () => {
  return (
    <section className="py-24 bg-white" id="team">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet the talented individuals who make our projects come to life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-lg transition-shadow duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="relative h-64 overflow-hidden">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <User className="w-20 h-20 text-gray-400" />
                  </div>
                )}
              </CardHeader>
              <CardContent className="text-center p-6">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-primary mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};