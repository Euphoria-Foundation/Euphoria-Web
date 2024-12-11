import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import { Image } from "lucide-react";

const Gallery = () => {
  const images = [
    {
      src: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      alt: "Community event",
      title: "Community Gathering"
    },
    {
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
      alt: "Nature conservation",
      title: "Environmental Initiative"
    },
    {
      src: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      alt: "Educational program",
      title: "Education Program"
    },
    {
      src: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
      alt: "Sustainability project",
      title: "Sustainability Project"
    },
    {
      src: "https://images.unsplash.com/photo-1452960962994-acf4fd70b632",
      alt: "Volunteer work",
      title: "Volunteer Activities"
    },
    {
      src: "https://images.unsplash.com/photo-1518877593221-1f28583780b4",
      alt: "Conservation efforts",
      title: "Conservation Work"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5DEFF] via-[#D6BCFA] to-[#9b87f5]">
      <Navbar />
      <div className="container mx-auto px-6 pt-24 pb-12">
        <div className="text-center mb-12 animate-fade-up">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-4">Gallery</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Explore our journey through images of our events, projects, and community impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card key={index} className="group overflow-hidden bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 animate-fade-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-0 relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white text-center p-4">
                    <Image className="h-8 w-8 mx-auto mb-2" />
                    <h3 className="text-lg font-semibold">{image.title}</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;