
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-primary mb-6">
            About SunHacks
          </h2>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
            Join Arizona's premier beach-themed hackathon where creativity flows like ocean waves! 
            SunHacks brings together innovative minds to build amazing projects in a fun, 
            summer-inspired atmosphere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-sm border-sand-300 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🌊</div>
              <h3 className="font-fredoka font-semibold text-xl text-primary mb-4">
                Community
              </h3>
              <p className="text-foreground/70">
                Connect with fellow innovators, designers, and developers in a collaborative 
                beach paradise environment.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-sand-300 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="font-fredoka font-semibold text-xl text-primary mb-4">
                Innovation
              </h3>
              <p className="text-foreground/70">
                Push the boundaries of technology while soaking up the creative energy 
                of our beach-themed hackathon experience.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm border-sand-300 hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-fredoka font-semibold text-xl text-primary mb-4">
                Student Focus
              </h3>
              <p className="text-foreground/70">
                Designed by students, for students. Learn new skills, win amazing prizes, 
                and launch your tech career under the Arizona sun.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 text-center">
          <div className="flex justify-center items-center space-x-8 text-3xl">
            <span className="animate-float">🏖️</span>
            <span className="animate-float" style={{ animationDelay: '0.5s' }}>🌴</span>
            <span className="animate-float" style={{ animationDelay: '1s' }}>🐚</span>
            <span className="animate-float" style={{ animationDelay: '1.5s' }}>⛱️</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
