
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is SunHacks?",
    answer: "SunHacks is Arizona State University's premier beach-themed hackathon where students come together to build innovative projects in a fun, collaborative environment. It's 24 hours of coding, creativity, and community under the desert sun!",
    icon: "☀️"
  },
  {
    question: "Who can participate?",
    answer: "All undergraduate and graduate students are welcome! Whether you're a beginner or an experienced developer, designer, or entrepreneur, there's a place for you at SunHacks. No experience required – just bring your enthusiasm!",
    icon: "🏄‍♂️"
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, and any devices you want to hack with. We'll provide food, drinks, Wi-Fi, and all the beach vibes you need. Don't forget your sunglasses for the full experience!",
    icon: "🎒"
  },
  {
    question: "How much does it cost?",
    answer: "SunHacks is completely FREE for all participants! This includes meals, snacks, workshops, swag, and access to all our beach-themed activities. Just register and show up!",
    icon: "🆓"
  },
  {
    question: "Can I work on an existing project?",
    answer: "All projects must be started from scratch at SunHacks. However, you can use existing libraries, frameworks, and APIs. The goal is to build something new during the hackathon timeframe!",
    icon: "🚀"
  },
  {
    question: "What are the prizes?",
    answer: "We have amazing prizes for various categories including Best Overall, Most Creative, Best Beginner Project, and sponsor-specific awards. Prizes include tech gadgets, gift cards, and internship opportunities!",
    icon: "🏆"
  }
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-fredoka font-bold text-4xl md:text-5xl text-primary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Got questions? We've got answers! Check out our most common questions below.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-sand-300 overflow-hidden">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-sand-200">
                  <AccordionTrigger className="px-6 py-4 hover:bg-sand-50/50 text-left">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">{faq.icon}</span>
                      <span className="font-fredoka font-medium text-primary">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-foreground/80">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-sand-100 to-ocean-100 rounded-2xl p-8 max-w-2xl mx-auto border border-sand-300">
            <h3 className="font-fredoka font-semibold text-xl text-primary mb-4">
              Still have questions?
            </h3>
            <p className="text-foreground/80 mb-4">
              Don't hesitate to reach out! Our team is here to help make your SunHacks experience amazing.
            </p>
            <div className="flex justify-center space-x-4 text-2xl">
              <span>📧</span>
              <span>🐦</span>
              <span>💬</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
