
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alex Rodriguez",
      position: "Event Director",
      socialMedia: { type: "linkedin", url: "#" }
    },
    {
      name: "Sarah Chen",
      position: "Technical Lead",
      socialMedia: { type: "twitter", url: "#" }
    },
    {
      name: "Marcus Johnson",
      position: "Sponsorship Manager",
      socialMedia: { type: "linkedin", url: "#" }
    },
    {
      name: "Emily Davis",
      position: "Marketing Director",
      socialMedia: { type: "instagram", url: "#" }
    },
    {
      name: "Jordan Lee",
      position: "Operations Manager",
      socialMedia: { type: "linkedin", url: "#" }
    },
    {
      name: "Taylor Kim",
      position: "Community Outreach",
      socialMedia: { type: "twitter", url: "#" }
    }
  ];

  const getSocialIcon = (type: string) => {
    switch (type) {
      case "linkedin":
        return <Linkedin className="w-5 h-5" />;
      case "twitter":
        return <Twitter className="w-5 h-5" />;
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      default:
        return <Linkedin className="w-5 h-5" />;
    }
  };

  return (
    <section id="team" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-primary mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            The passionate individuals behind SunHacks 2025, working to create an amazing hackathon experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-white/80 backdrop-blur-sm border-sand-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-fredoka font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                
                <h3 className="font-fredoka font-semibold text-xl text-primary mb-2">
                  {member.name}
                </h3>
                
                <p className="text-foreground/70 mb-4">
                  {member.position}
                </p>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                  asChild
                >
                  <a href={member.socialMedia.url} target="_blank" rel="noopener noreferrer">
                    {getSocialIcon(member.socialMedia.type)}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-foreground/60">
            Want to join our team? Reach out to us!
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
