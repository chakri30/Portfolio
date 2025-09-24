import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      category: "The Master Batsman 🏏",
      icon: "🤖",
      skills: [
        { name: "Python", level: 90 },
        { name: "TensorFlow", level: 85 },
        { name: "Machine Learning", level: 88  },
        { name: "NumPy", level: 85  },
        { name: "Pandas", level: 88 },
        { name: "SQL", level: 85}
      ]
    },
    {
      category: "The Wicketkeeper-Batsman 🧤",
      icon: "💻",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "React.js", level: 88},
        { name: "MongoDB", level: 82 },
        { name: "Express", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "RESTful APIs", level: 85 }
      ]
    },
    {
      category: "The Game Changer ✨",
      icon: "🎯",
      skills: [
        { name: "Business Acumen", level: 85},
        { name: "Product Strategy", level: 80},
        { name: "Project Management", level: 88},
        { name: "Data Analysis", level: 90},
        { name: "Power BI", level: 82 },
        { name: "Excel Advanced", level: 92 }
      ]
    }
  ];

  const specializations = [
    "AI/ML Development",
    "Full-Stack Applications",
    "Data Analysis & Visualization",
    "Business Strategy & Product",
    "Financial Data Analysis",
    "Human-Centric Technology"
  ];

  const certifications = [
    {
      name: "Artificial Intelligence Primer",
      issuer: "Infosys Springboard",
      date: "June 2025",
      verified: true
    },
    {
      name: "MERN Full Stack",
      issuer: "Ethnus",
      date: "April 2025",
      verified: true
    },
    {
      name: "Cyber Security",
      issuer: "IBM",
      date: "April 2025",
      verified: true
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-pitch">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ice-white mb-6">
            The All-Rounder's <span className="text-electric-cyan">Arsenal</span>
          </h2>
          <div className="pitch-line">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit forged through dedication, practice, and real-world application.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="bg-deep-charcoal/70 border-slate-gray backdrop-blur-sm trophy-rotation"
            >
              <CardHeader>
                <CardTitle className="font-display text-xl text-ice-white flex items-center gap-3">
                  <span className="text-2xl">{category.icon}</span>
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-ice-white">{skill.name}</span>
                        {/* Experience badge removed as 'experience' property does not exist */}
                      </div>
                      <span className="text-electric-cyan font-display font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted-blue/30"
                      />
                      <div 
                        className="absolute top-0 left-0 h-2 bg-gradient-ice rounded-full transition-all duration-1000 glow-effect"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations */}
        <div className="mb-16">
          <Card className="bg-deep-charcoal/50 border-slate-gray backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-electric-cyan text-center">
                Core Specializations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap justify-center gap-4">
                {specializations.map((spec, index) => (
                  <Badge 
                    key={index}
                    variant="secondary"
                    className="bg-electric-cyan/10 text-electric-cyan border border-electric-cyan/30 hover:bg-electric-cyan/20 transition-all duration-300 glow-effect px-4 py-2 text-sm font-medium"
                  >
                    {spec}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="font-display text-2xl font-semibold text-electric-cyan mb-8 text-center">
            Official Scorecard
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={index}
                className="bg-deep-charcoal/50 border-slate-gray backdrop-blur-sm trophy-rotation group"
              >
                <CardContent className="p-6 text-center space-y-4">
                  <div className="text-3xl text-electric-cyan group-hover:animate-pulse">
                    🏆
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-ice-white mb-2">
                      {cert.name}
                    </h4>
                    <p className="text-electric-cyan text-sm font-medium mb-1">
                      {cert.issuer}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Issued {cert.date}
                    </p>
                  </div>
                  {cert.verified && (
                    <Badge 
                      variant="default"
                      className="bg-green-500/20 text-green-400 border-green-400/30"
                    >
                      ✓ Verified
                    </Badge>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;