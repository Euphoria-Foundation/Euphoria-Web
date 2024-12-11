import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { DollarSign, HandHelping, UserPlus } from "lucide-react";

const GetInvolved = () => {
  const opportunities = [
    {
      title: "Volunteer",
      description: "Join our team of dedicated volunteers",
      icon: <HandHelping className="h-6 w-6 text-primary" />,
      action: "Sign Up Now",
      details: "Make a direct impact in your community by volunteering your time and skills. We have various opportunities available."
    },
    {
      title: "Donate",
      description: "Support our cause financially",
      icon: <DollarSign className="h-6 w-6 text-primary" />,
      action: "Donate Now",
      details: "Your donations help us continue our mission and expand our reach to help more communities in need."
    },
    {
      title: "Become a Member",
      description: "Join our growing community",
      icon: <UserPlus className="h-6 w-6 text-primary" />,
      action: "Join Today",
      details: "Get involved more deeply by becoming a member. Enjoy exclusive updates and opportunities to shape our initiatives."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] via-[#D6BCFA] to-[#9b87f5]">
      <Navbar />
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-4">Get Involved</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            There are many ways to support our mission and make a difference in the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  {opportunity.icon}
                  <CardTitle>{opportunity.title}</CardTitle>
                </div>
                <CardDescription>{opportunity.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">{opportunity.details}</p>
                <Button className="w-full">{opportunity.action}</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;