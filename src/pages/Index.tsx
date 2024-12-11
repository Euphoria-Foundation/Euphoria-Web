import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TeamMembers } from "@/components/TeamMembers";
import { Portfolio } from "@/components/Portfolio";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <TeamMembers />
      <Portfolio />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Index;