import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const AboutSection = () => {
  const coreValues = [
    "Communication", "Problem Solving", "Analytical Thinking", "Collaboration", "Leadership"
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Computer Science",
      institution: "VIT Bhopal University",
      year: "2022-2026",
      grade: "Pursuing"
    }
  ];

  const experience = [
    {
      role: "AI & Web Developer Intern",
      company: "Infosys Springboard Virtual Internship",
      duration: "Aug 2025 - Oct 2025",
      location: "Virtual",
      highlights: [
        "Led development of 'AI Tutor' - an AI-powered intelligent tutoring system",
        "Built foundational project structure for frontend, backend, and database",
        "Implemented core AI functionality using Python libraries like spaCy and NLTK"
      ]
    }
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-pitch">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ice-white mb-6">
            Player <span className="text-electric-cyan">Profile</span>
          </h2>
          <div className="pitch-line">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Meet the all-rounder who brings technical expertise and strategic thinking to every digital match.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Bio Section */}
          <Card className="bg-deep-charcoal/50 border-slate-gray backdrop-blur-sm trophy-rotation">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold text-electric-cyan mb-6">
                The All-Rounder Bio
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  My name is Chindiri Chakri, and I am a versatile problem-solver with a passion 
                  for turning data into meaningful insights and ideas into tangible products. I thrive 
                  on connecting technology with business strategy to build solutions that drive real-world impact.
                </p>
                <p>
                  With expertise spanning AI/ML, full-stack development, and business strategy, 
                  I approach every challenge like a cricket all-rounder - adapting my skills to 
                  what the situation demands for maximum impact.
                </p>
                <p>
                  Currently pursuing my B.Tech in Computer Science at VIT Bhopal University while 
                  gaining hands-on experience through internships and building innovative projects 
                  that solve real-world problems.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Core Values */}
          <Card className="bg-deep-charcoal/50 border-slate-gray backdrop-blur-sm trophy-rotation">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold text-electric-cyan mb-6">
                Strategic DNA
              </h3>
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  The core values that drive my approach to every project and collaboration.
                </p>
                <div className="flex flex-wrap gap-3">
                  {coreValues.map((value, index) => (
                    <Badge 
                      key={index}
                      variant="secondary"
                      className="bg-muted-blue/30 text-electric-cyan border-electric-cyan/30 hover:bg-electric-cyan/10 transition-all duration-300 glow-effect text-sm px-4 py-2"
                    >
                      {value}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Education & Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <Card className="bg-deep-charcoal/50 border-slate-gray backdrop-blur-sm trophy-rotation">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold text-electric-cyan mb-6">
                Training Ground
              </h3>
              {education.map((edu, index) => (
                <div key={index} className="space-y-3">
                  <h4 className="font-display text-lg font-semibold text-ice-white">
                    {edu.degree}
                  </h4>
                  <p className="text-electric-cyan font-medium">{edu.field}</p>
                  <p className="text-muted-foreground">{edu.institution}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">{edu.year}</span>
                    <Badge variant="outline" className="border-electric-cyan/50 text-electric-cyan">
                      {edu.grade}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Experience */}
          <Card className="bg-deep-charcoal/50 border-slate-gray backdrop-blur-sm trophy-rotation">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold text-electric-cyan mb-6">
                Professional Innings
              </h3>
              {experience.map((exp, index) => (
                <div key={index} className="space-y-4">
                  <div>
                    <h4 className="font-display text-lg font-semibold text-ice-white">
                      {exp.role}
                    </h4>
                    <p className="text-electric-cyan font-medium">{exp.company}</p>
                    <div className="flex justify-between items-center text-sm text-muted-foreground">
                      <span>{exp.duration}</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm flex items-start">
                        <span className="text-electric-cyan mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;