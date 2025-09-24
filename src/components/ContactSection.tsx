import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Linkedin, Github, Phone, MapPin, Send } from "lucide-react";
import { toast } from "sonner";
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "chakrichindiri2020@gmail.com",
      link: "mailto:chakrichindiri2020@gmail.com",
      primary: true
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/chakrichindiri",
      link: "https://linkedin.com/in/chchakri",
      primary: true
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/chakrichindiri",
      link: "https://github.com/chakri30",
      primary: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Available on request",
      link: null,
      primary: false
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Srikakulam, Andhra Pradesh",
      link: null,
      primary: false
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.send(
      'service_gbbpnll',      // e.g., 'service_xxxxx'
      'template_if0qjoe',     // e.g., 'template_xxxxx'
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'cjAZpttYd27qZlDv3'       // e.g., 'abcd1234...'
    ).then(() => {
      toast.success("Message sent successfully! I'll get back to you within 24 hours.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, () => {
      toast.error("Failed to send message. Please try again later.");
    });
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-stadium relative overflow-hidden">
      {/* Stadium Backdrop */}
      <div className="absolute inset-0">
        <div className="floodlight absolute top-10 right-1/4 w-96 h-96 rounded-full opacity-30"></div>
        <div className="floodlight absolute bottom-10 left-1/4 w-80 h-80 rounded-full opacity-20"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-ice-white mb-6">
            Post-Match <span className="text-electric-cyan">Huddle</span>
          </h2>
          <div className="pitch-line">
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready for the next match? Let's talk strategy on how to solve your next big challenge and build what's next.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-deep-charcoal/70 border-slate-gray backdrop-blur-sm trophy-rotation">
              <CardHeader>
                <CardTitle className="font-display text-2xl text-electric-cyan">
                  Connect with the Pro
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">
                  I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                  or simply connect with fellow developers and cricket enthusiasts. Drop me a line!
                </p>

                <div className="space-y-4">
                  {contactInfo.map((contact, index) => {
                    const IconComponent = contact.icon;
                    return (
                      <div 
                        key={index}
                        className={`flex items-center gap-4 p-4 rounded-lg transition-all duration-300 group ${
                          contact.primary 
                            ? "bg-electric-cyan/5 border border-electric-cyan/20 hover:bg-electric-cyan/10" 
                            : "hover:bg-muted-blue/10"
                        }`}
                      >
                        <div className={`p-2 rounded-lg ${
                          contact.primary 
                            ? "bg-electric-cyan/20 text-electric-cyan" 
                            : "bg-muted-blue/20 text-muted-foreground"
                        } group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground uppercase tracking-wider">
                            {contact.label}
                          </p>
                          {contact.link ? (
                            <a 
                              href={contact.link}
                              className={`font-medium transition-colors duration-300 ${
                                contact.primary 
                                  ? "text-electric-cyan hover:text-electric-glow" 
                                  : "text-ice-white hover:text-electric-cyan"
                              }`}
                              target={contact.link.startsWith('http') ? '_blank' : undefined}
                              rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <p className="text-ice-white font-medium">{contact.value}</p>
                          )}
                        </div>
                        {contact.primary && (
                          <Badge 
                            variant="secondary"
                            className="bg-electric-cyan/20 text-electric-cyan border-electric-cyan/30 text-xs"
                          >
                            Primary
                          </Badge>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-deep-charcoal/50 border-slate-gray backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-display font-bold text-electric-cyan hologram-text">
                      Within 24hrs
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      Response Time
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-electric-cyan hologram-text">
                      Remote
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      Available
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-display font-bold text-electric-cyan hologram-text">
                      Open
                    </div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">
                      to Relocate
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-deep-charcoal/70 border-slate-gray backdrop-blur-sm trophy-rotation">
            <CardHeader>
              <CardTitle className="font-display text-2xl text-electric-cyan">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-ice-white mb-2 block">
                      Name
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-muted-blue/20 border-muted-blue/50 text-ice-white placeholder:text-muted-foreground focus:border-electric-cyan focus:ring-electric-cyan/20"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-ice-white mb-2 block">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-muted-blue/20 border-muted-blue/50 text-ice-white placeholder:text-muted-foreground focus:border-electric-cyan focus:ring-electric-cyan/20"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-ice-white mb-2 block">
                    Subject
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-muted-blue/20 border-muted-blue/50 text-ice-white placeholder:text-muted-foreground focus:border-electric-cyan focus:ring-electric-cyan/20"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-ice-white mb-2 block">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="bg-muted-blue/20 border-muted-blue/50 text-ice-white placeholder:text-muted-foreground focus:border-electric-cyan focus:ring-electric-cyan/20 resize-none"
                    required
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full glow-effect bg-electric-cyan text-pitch-black hover:bg-electric-glow font-display font-semibold py-6 shadow-glow"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <span className="text-electric-cyan">⚡</span>
            <span>Built with precision on the digital cricket pitch</span>
            <span className="text-electric-cyan">⚡</span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            © 2025 Chakri's Innings. All matches recorded.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;