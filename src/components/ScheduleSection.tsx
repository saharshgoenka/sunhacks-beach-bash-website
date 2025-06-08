
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const scheduleEvents = [
  {
    time: "Friday 6:00 PM",
    event: "Opening Ceremony",
    description: "Welcome to the beach! Registration and team formation",
    icon: "🎉"
  },
  {
    time: "Friday 8:00 PM",
    event: "Hacking Starts",
    description: "Let the waves of innovation begin!",
    icon: "🏄‍♂️"
  },
  {
    time: "Saturday 10:00 AM",
    event: "Beach Workshops",
    description: "Learn new skills with our tech workshops",
    icon: "🏖️"
  },
  {
    time: "Saturday 12:00 PM",
    event: "Lunch by the Shore",
    description: "Refuel with delicious food and networking",
    icon: "🌮"
  },
  {
    time: "Saturday 6:00 PM",
    event: "Sunset Judging",
    description: "Present your projects as the sun sets",
    icon: "🌅"
  },
  {
    time: "Saturday 8:00 PM",
    event: "Closing & Awards",
    description: "Celebrate achievements and win amazing prizes!",
    icon: "🏆"
  }
];

const ScheduleSection = () => {
  return (
    <section id="schedule" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-primary mb-6">
            Event Schedule
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Ride the wave of our carefully planned event timeline
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-sand-400 via-ocean-400 to-ocean-600 rounded-full"></div>
            
            <div className="space-y-8">
              {scheduleEvents.map((event, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-5 h-5 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  <div className="ml-20">
                    <Card className="bg-white/80 backdrop-blur-sm border-sand-300 hover:shadow-lg transition-all hover:-translate-y-1">
                      <CardHeader className="pb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">{event.icon}</span>
                          <div>
                            <CardTitle className="font-fredoka text-primary text-lg">
                              {event.event}
                            </CardTitle>
                            <p className="text-sm text-foreground/60 font-medium">
                              {event.time}
                            </p>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-foreground/70">{event.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
