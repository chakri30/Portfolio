import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "home", label: "The Pitch", icon: "🏟️" },
    { id: "about", label: "Player Profile", icon: "👤" },
    { id: "projects", label: "Trophy Cabinet", icon: "🏆" },
    { id: "skills", label: "Arsenal", icon: "⚡" },
    { id: "contact", label: "Post-Match", icon: "🤝" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "bg-deep-charcoal/95 backdrop-blur-lg shadow-stadium" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="font-display text-xl font-bold text-electric-cyan hologram-text">
            My Portfolio
          </div>
          
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={activeSection === item.id ? "default" : "ghost"}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={`glow-effect transition-all duration-300 ${
                  activeSection === item.id 
                    ? "bg-electric-cyan text-pitch-black shadow-glow" 
                    : "text-ice-white hover:text-electric-cyan hover:bg-muted-blue/20"
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                {item.label}
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="text-electric-cyan">
              <span className="text-xl">⚡</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;