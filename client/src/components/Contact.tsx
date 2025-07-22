import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({ name: "", email: "", project: "", message: "" });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" className="py-20 bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Build Something Amazing</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business with AI? Let's discuss your project and explore innovative solutions together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-dark-tertiary border-gray-600">
              <CardHeader>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-dark-primary border-gray-600 text-white placeholder-gray-400"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-dark-primary border-gray-600 text-white placeholder-gray-400"
                      placeholder="your@email.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Type
                    </label>
                    <Select value={formData.project} onValueChange={(value) => handleInputChange("project", value)}>
                      <SelectTrigger className="bg-dark-primary border-gray-600 text-white">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ai-ml">AI/ML Model Development</SelectItem>
                        <SelectItem value="automation">Automation & Workflow</SelectItem>
                        <SelectItem value="nlp">NLP & Speech Processing</SelectItem>
                        <SelectItem value="computer-vision">Computer Vision</SelectItem>
                        <SelectItem value="fullstack">Full-Stack AI Application</SelectItem>
                        <SelectItem value="consulting">Consulting & Strategy</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      rows={4}
                      className="bg-dark-primary border-gray-600 text-white placeholder-gray-400"
                      placeholder="Tell me about your project requirements..."
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-gray-300 text-lg mb-8">
                I'm always excited to discuss new AI projects and opportunities. Whether you need a custom ML model, automation solution, or strategic AI consultation, let's connect.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="bg-dark-primary border-gray-600">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="text-blue-400 text-2xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#ffff]">Email</h4>
                    <p className="text-gray-300">ai.expert@example.com</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark-primary border-gray-600">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="text-purple-400 text-2xl">
                    <Linkedin size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">LinkedIn</h4>
                    <p className="text-gray-300">Connect for professional updates</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-dark-primary border-gray-600">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="text-blue-400 text-2xl">
                    <Github size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold">GitHub</h4>
                    <p className="text-gray-300">View my open source contributions</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-dark-primary border-gray-600">
              <CardContent className="p-6">
                <h4 className="font-semibold mb-3 text-[#ffffff]">Response Time</h4>
                <p className="text-gray-300">
                  I typically respond to project inquiries within 24 hours. For urgent AI consulting needs, please mention "urgent" in your message subject.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}