import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

const featuredProject = {
  title: "AI Business App Assistant",
  description: "Intelligent customer service and appointment scheduling system that automates customer interactions and manages availability-based scheduling.",
  features: [
    "Automated customer inquiry responses",
    "Intelligent appointment scheduling",
    "Real-time availability management",
    "Multi-channel integration"
  ],
  technologies: ["NLP", "Automated Workflows", "Customer Service AI", "Scheduling APIs"],
  imageAlt: "AI Business Assistant Dashboard"
};

const projects = [
  {
    title: "Kinova Gen 3 Robot Arm Simulation",
    description: "Advanced computer vision system using YOLO object detection with Unity Engine simulation for robotics testing and pick-and-place automation.",
    features: [
      "YOLO object detection implementation",
      "Unity Engine 3D simulation environment",
      "Automated pick and place algorithms"
    ],
    technologies: ["YOLO", "Unity Engine", "Computer Vision"],
    color: "purple"
  },
  {
    title: "RAG Agent for Logistics Data",
    description: "Intelligent data retrieval and analysis system for logistics operations with custom React-based visualization platform on AWS EC2.",
    features: [
      "RAG-powered data retrieval system",
      "Custom React visualization dashboard",
      "AWS EC2 deployment and scaling"
    ],
    technologies: ["RAG", "React", "AWS EC2"],
    color: "blue"
  },
  {
    title: "Text-to-Speech Model with Live Inference",
    description: "Custom-trained text-to-speech model with real-time inference capabilities, optimized for production deployment and natural voice synthesis.",
    features: [
      "Custom TTS model training pipeline",
      "Real-time inference optimization",
      "Natural voice synthesis algorithms"
    ],
    technologies: ["TTS", "Neural Networks", "Real-time AI"],
    color: "purple"
  },
  {
    title: "Automated Data Collection & Validation",
    description: "Comprehensive data pipeline automation with intelligent collection scripts, quality validation, and preprocessing for ML model training.",
    features: [
      "Automated data collection scripts",
      "Quality control and validation systems",
      "Data preprocessing and augmentation"
    ],
    technologies: ["Python", "Data Pipelines", "Automation"],
    color: "blue"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-dark-primary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured AI Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real-world AI solutions delivering measurable business impact across diverse industries
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-dark-secondary to-dark-tertiary p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="lg:w-1/3">
                <div className="w-full h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl shadow-lg flex items-center justify-center">
                  <div className="text-6xl">🤖</div>
                </div>
              </div>
              <div className="lg:w-2/3">
                <div className="flex items-center gap-3 mb-4">
                  <Badge className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    FEATURED
                  </Badge>
                  <h3 className="text-3xl font-bold text-white">{featuredProject.title}</h3>
                </div>
                <p className="text-gray-300 text-lg mb-6">
                  {featuredProject.description}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  {featuredProject.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-400 mt-1" size={16} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button className="bg-blue-500 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                  View Case Study
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-dark-secondary hover:bg-dark-tertiary transition-all duration-300 group border-gray-600 h-full">
                  <CardHeader>
                    <div className="mb-6">
                      <div className="w-full h-48 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl shadow-lg flex items-center justify-center">
                        <div className="text-4xl">
                          {project.title.includes("Robot") ? "🦾" : 
                           project.title.includes("RAG") ? "📊" :
                           project.title.includes("Speech") ? "🎤" : "📁"}
                        </div>
                      </div>
                    </div>
                    <CardTitle className={`text-2xl font-bold mb-4 group-hover:${project.color === "blue" ? "text-blue-400" : "text-purple-400"} transition-colors duration-300`}>
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 mb-4">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6 text-gray-300">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2">
                          <ArrowRight className={`${project.color === "blue" ? "text-blue-400" : "text-purple-400"} mt-1 text-sm`} size={16} />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className={`${project.color === "blue" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"} px-3 py-1 rounded-full text-sm`}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
