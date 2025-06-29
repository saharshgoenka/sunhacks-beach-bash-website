
const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-t from-ocean-600 to-ocean-400 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="font-fredoka font-bold text-3xl mb-4 flex items-center">
              <span className="mr-2">☀️</span>
              SunHacks 2025
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Arizona State University's premier beach-themed hackathon. 
              Where innovation meets summer vibes!
            </p>
            <div className="flex space-x-4 text-2xl">
              <span className="cursor-pointer hover:scale-110 transition-transform">📧</span>
              <span className="cursor-pointer hover:scale-110 transition-transform">🐦</span>
              <span className="cursor-pointer hover:scale-110 transition-transform">📸</span>
              <span className="cursor-pointer hover:scale-110 transition-transform">💼</span>
            </div>
          </div>

          <div>
            <h3 className="font-fredoka font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              <div className="text-white/80 hover:text-white cursor-pointer transition-colors">About</div>
              <div className="text-white/80 hover:text-white cursor-pointer transition-colors">Schedule</div>
              <div className="text-white/80 hover:text-white cursor-pointer transition-colors">Sponsors</div>
              <div className="text-white/80 hover:text-white cursor-pointer transition-colors">FAQ</div>
            </div>
          </div>

          <div>
            <h3 className="font-fredoka font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-2 text-white/80">
              <div>📍 Arizona State University</div>
              <div>📅 September 27-28, 2025</div>
              <div>📧 team@sunhacks.io</div>
              <div>🐦 @sunhacks</div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <div className="flex justify-center items-center space-x-6 mb-4 text-xl">
            <span className="animate-float">🌊</span>
            <span className="animate-float" style={{ animationDelay: '0.5s' }}>🏖️</span>
            <span className="animate-float" style={{ animationDelay: '1s' }}>🌴</span>
            <span className="animate-float" style={{ animationDelay: '1.5s' }}>🐚</span>
            <span className="animate-float" style={{ animationDelay: '2s' }}>⛱️</span>
          </div>
          <p className="text-white/60">
            © 2025 SunHacks. Made with ☀️ in Arizona. All rights reserved.
          </p>
        </div>
      </div>

      {/* Wave decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-ocean-800 to-transparent"></div>
    </footer>
  );
};

export default Footer;
