import { Button } from "@/components/ui/button";
import stadiumHero from "@/assets/stadium-hero.jpg";
import { useState } from "react"; // Import useState

const HeroSection = () => {
  const [showStats, setShowStats] = useState(false); // New state for stats visibility

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  };

  // Function to toggle stats visibility
  const toggleStatsVisibility = () => {
    setShowStats(!showStats);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${stadiumHero})`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pitch-black/40 via-transparent to-pitch-black/60"></div>
      </div>

      {/* Floodlight Effects */}
      <div className="absolute inset-0">
        <div className="floodlight absolute top-10 left-1/4 w-96 h-96 rounded-full"></div>
        <div className="floodlight absolute top-20 right-1/4 w-80 h-80 rounded-full"></div>
        <div className="floodlight absolute bottom-10 left-1/3 w-72 h-72 rounded-full"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 stadium-entrance">
        <div className="mb-8">
          <h1 className="font-display md:-bottom-0.5 font-bold mb-6 text-ice-white text-4xl ">
            Chakri's{" "}
            <span className="hologram-text">Innings</span>
          </h1>
          <div className="pitch-line mb-8">
            <p className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A Journey of Insight, Strategy, and Execution.
              Where technology meets business strategy to build real-world impact.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            size="lg"
            className="glow-effect bg-electric-cyan text-pitch-black hover:bg-electric-glow font-display font-semibold px-8 py-6 text-lg shadow-glow"
            onClick={scrollToAbout}
          >
            Start the Innings
            <span className="ml-2 text-xl">🏏</span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-electric-cyan text-electric-cyan hover:bg-electric-cyan/10 font-display font-semibold px-8 py-6 text-lg"
            onClick={toggleStatsVisibility} // Call the new function
          >
            View Match Stats
            <span className="ml-2 text-xl">📊</span>
          </Button>
        </div>

        {/* Stadium Stats - Conditionally rendered */}
        {showStats && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-500 ease-in-out">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-electric-cyan hologram-text">4</div>
              <div className="text-sm text-ice-white uppercase tracking-wider">Years B.Tech CSE</div> {/* Changed text color */}
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-electric-cyan hologram-text">7</div> {/* Changed from 10+ to 7 */}
              <div className="text-sm text-ice-white uppercase tracking-wider">Projects Built</div> {/* Changed text color */}
            </div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-electric-cyan hologram-text">90%</div>
              <div className="text-sm text-ice-white uppercase tracking-wider">ML Accuracy</div> {/* Changed text color */}
            </div>
          </div>
        )}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-electric-cyan/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-electric-cyan rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;