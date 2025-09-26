const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      data-background-color="#00ccff"
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Pill Badge */}
        <div className="mb-8 flex justify-center">
          <div className="pill-button">
            INTRODUCING AI
          </div>
        </div>
        
        {/* Main Headline */}
        <h1 className="hero-title text-white mb-6 leading-none">
          AI SOLUTIONS FOR
          <br />
          <span className="block">DEVELOPERS</span>
        </h1>
        
        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          the best way to reach humans instead of spam folders,
          <br />
          clever transactional and marketing emails at scale.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <button className="pill-button border-purple-400/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-400">
            Documentation &gt;
          </button>
          <button className="px-8 py-3 bg-white/90 hover:bg-white text-black rounded-full font-medium transition-all duration-300 hover:scale-105">
            Get Started &gt;
          </button>
        </div>
        
        {/* 3D Element Placeholder */}
        <div className="flex justify-end items-center mt-12 lg:mt-0 lg:absolute lg:right-8 lg:top-1/2 lg:-translate-y-1/2">
          <div className="relative">
            {/* This will be enhanced with actual 3D model later */}
            <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
              <div className="absolute inset-0 glass-card flex items-center justify-center">
                <div className="text-6xl">🤖</div>
              </div>
              <div className="absolute top-4 right-4 text-purple-400 font-bold text-xl">
                Front
              </div>
              <div className="absolute bottom-4 right-4 text-purple-400 font-bold text-4xl">
                End
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;