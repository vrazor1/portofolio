import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

const featuredProject = {
  title: "AI Business App Assistant",
  description: "Intelligent customer service and appointment scheduling system that automates customer interactions and manages availability-based scheduling with advanced natural language processing.",
  features: [
    "Automated customer inquiry responses using advanced NLP models",
    "Intelligent appointment scheduling with real-time availability checking",  
    "Multi-channel integration across web, mobile, and messaging platforms",
    "Customer sentiment analysis and personalized response generation",
    "Calendar integration with automated booking confirmations",
    "Performance analytics dashboard with customer satisfaction metrics"
  ],
  technologies: ["NLP", "Automated Workflows", "Customer Service AI", "Scheduling APIs", "Sentiment Analysis", "Real-time Processing"],
  imageAlt: "AI Business Assistant Dashboard"
};

const projects = [
  {
    title: "Kinova Gen 3 Robot Arm Pick & Place Simulation",
    description: "Advanced robotics simulation system combining YOLO object detection with Unity Engine for precise pick-and-place operations, featuring real-time computer vision and robotic path planning.",
    features: [
      "YOLO v8 object detection with custom dataset training for industrial parts",
      "Unity Engine 3D physics simulation with accurate robot kinematics modeling", 
      "Automated pick-and-place algorithms with collision detection and avoidance",
      "Real-time camera integration for live object tracking and positioning",
      "Path optimization algorithms for efficient robotic movement planning",
      "Performance metrics tracking including accuracy rates and cycle times"
    ],
    technologies: ["YOLO v8", "Unity Engine", "Computer Vision", "Robotics", "Path Planning", "3D Simulation"],
    color: "purple"
  },
  {
    title: "RAG Agent for Logistics Data Analysis",
    description: "Intelligent retrieval-augmented generation system for logistics operations with custom React-based visualization platform, deployed on AWS EC2 for scalable data processing and analysis.",
    features: [
      "RAG-powered semantic search across massive logistics datasets",
      "Custom React dashboard with interactive data visualization components",
      "AWS EC2 deployment with auto-scaling for high-volume data processing",
      "Real-time logistics KPI tracking and automated report generation", 
      "Integration with multiple data sources including ERP and warehouse systems",
      "Machine learning models for predictive logistics optimization"
    ],
    technologies: ["RAG", "React", "AWS EC2", "Data Visualization", "Vector Search", "Logistics APIs"],
    color: "blue"
  },
  {
    title: "Custom Text-to-Speech Model with Live Inference",
    description: "High-quality neural text-to-speech model with real-time inference capabilities, featuring custom voice synthesis and optimized for production deployment with natural speech patterns.",
    features: [
      "Custom TTS model training pipeline using transformer architecture",
      "Real-time inference optimization with sub-100ms response times",
      "Natural voice synthesis with emotional tone control and emphasis",
      "Multi-language support with accent and dialect variations",
      "Audio quality enhancement using post-processing neural networks",
      "Production-ready API with load balancing and caching mechanisms"
    ],
    technologies: ["Neural TTS", "Transformer Models", "Real-time AI", "Audio Processing", "API Development", "Production Scaling"],
    color: "purple"
  },
  {
    title: "Automated Data Collection & Validation Pipeline",
    description: "Comprehensive data pipeline automation system with intelligent collection scripts, multi-layer quality validation, and preprocessing optimization for machine learning model training.",
    features: [
      "Automated web scraping and API data collection with rate limiting",
      "Multi-stage data quality validation including schema and content checks",
      "Data preprocessing and augmentation pipelines for ML training datasets",
      "Real-time data monitoring with anomaly detection and alerting systems",
      "Scalable data storage solutions with version control and lineage tracking", 
      "Integration with MLOps pipelines for continuous model retraining"
    ],
    technologies: ["Python", "Data Pipelines", "MLOps", "Web Scraping", "Data Quality", "Automation"],
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
            Real-world AI solutions delivering measurable business impact across diverse industries and technical domains
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
                <div className="w-full h-64 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-2xl shadow-lg flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.3),transparent_50%)] opacity-70"></div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(59,130,246,0.3),transparent_50%)] opacity-70"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center shadow-lg">
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-white">
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2Z" fill="currentColor"/>
                        <path d="M21 9V7L15 4L13 5V7H11V5L9 4L3 7V9H21Z" fill="currentColor" opacity="0.7"/>
                        <path d="M3 10V21H21V10H3ZM8 19H5V12H8V19ZM19 19H16V12H19V19ZM14 19H10V12H14V19Z" fill="currentColor"/>
                      </svg>
                    </div>
                    <div className="text-sm text-gray-300 font-medium">AI Business Assistant</div>
                    <div className="text-xs text-gray-400 mt-1">Customer Service & Scheduling</div>
                  </div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute bottom-4 left-4 flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0ms'}}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '200ms'}}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '400ms'}}></div>
                  </div>
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
                      <CheckCircle className="text-blue-400 mt-1 flex-shrink-0" size={16} />
                      <span className="text-gray-300 text-sm">{feature}</span>
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
                      <div className="w-full h-48 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl shadow-lg flex items-center justify-center relative overflow-hidden">
                        <div className={`absolute inset-0 ${project.color === "blue" ? "bg-gradient-to-br from-blue-600/10 to-blue-800/10" : "bg-gradient-to-br from-purple-600/10 to-purple-800/10"}`}></div>
                        <div className={`absolute inset-0 ${project.color === "blue" ? "bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.2),transparent_70%)]" : "bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.2),transparent_70%)]"} opacity-60`}></div>
                        <div className="relative z-10 text-center">
                          <div className={`w-14 h-14 mx-auto mb-3 ${project.color === "blue" ? "bg-gradient-to-br from-blue-500 to-blue-600" : "bg-gradient-to-br from-purple-500 to-purple-600"} rounded-lg flex items-center justify-center shadow-lg`}>
                            {project.title.includes("Robot") ? (
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                                <path d="M12 2L10 4H14L12 2Z" fill="currentColor"/>
                                <rect x="8" y="4" width="8" height="4" rx="1" fill="currentColor"/>
                                <rect x="6" y="8" width="12" height="8" rx="2" fill="currentColor" opacity="0.8"/>
                                <circle cx="10" cy="12" r="1.5" fill="white"/>
                                <circle cx="14" cy="12" r="1.5" fill="white"/>
                                <rect x="2" y="10" width="4" height="2" rx="1" fill="currentColor"/>
                                <rect x="18" y="10" width="4" height="2" rx="1" fill="currentColor"/>
                                <rect x="10" y="16" width="4" height="6" rx="1" fill="currentColor" opacity="0.6"/>
                                <circle cx="8" cy="20" r="2" fill="currentColor" opacity="0.8"/>
                                <circle cx="16" cy="20" r="2" fill="currentColor" opacity="0.8"/>
                              </svg>
                            ) : project.title.includes("RAG") ? (
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                                <path d="M3 3H21V5H3V3Z" fill="currentColor"/>
                                <path d="M3 7H21V9H3V7Z" fill="currentColor" opacity="0.7"/>
                                <path d="M3 11H21V13H3V11Z" fill="currentColor" opacity="0.8"/>
                                <path d="M3 15H15V17H3V15Z" fill="currentColor" opacity="0.6"/>
                                <circle cx="18" cy="16" r="3" fill="currentColor"/>
                                <path d="M3 19H12V21H3V19Z" fill="currentColor" opacity="0.5"/>
                              </svg>
                            ) : project.title.includes("Speech") ? (
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                                <path d="M12 2C13.1 2 14 2.9 14 4V12C14 13.1 13.1 14 12 14C10.9 14 10 13.1 10 12V4C10 2.9 10.9 2 12 2Z" fill="currentColor"/>
                                <path d="M17 11V12C17 14.8 14.8 17 12 17C9.2 17 7 14.8 7 12V11H5V12C5 15.9 8.1 19 12 19C15.9 19 19 15.9 19 12V11H17Z" fill="currentColor" opacity="0.7"/>
                                <path d="M11 20H13V23H11V20Z" fill="currentColor" opacity="0.8"/>
                                <path d="M8 23H16V21H8V23Z" fill="currentColor" opacity="0.6"/>
                              </svg>
                            ) : (
                              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                                <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="currentColor" opacity="0.8"/>
                                <path d="M14 2V8H20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                              </svg>
                            )}
                          </div>
                          <div className={`text-xs font-medium ${project.color === "blue" ? "text-blue-400" : "text-purple-400"}`}>
                            {project.title.includes("Robot") ? "Robotics & Unity Simulation" : 
                             project.title.includes("RAG") ? "Data Analytics & Visualization" :
                             project.title.includes("Speech") ? "Voice AI & Real-time Processing" : "Automation & Data Pipeline"}
                          </div>
                        </div>
                        <div className="absolute bottom-3 right-3 flex gap-1">
                          {project.color === "blue" ? (
                            <>
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0ms'}}></div>
                              <div className="w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse" style={{animationDelay: '150ms'}}></div>
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '300ms'}}></div>
                            </>
                          ) : (
                            <>
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0ms'}}></div>
                              <div className="w-1.5 h-1.5 bg-purple-300 rounded-full animate-pulse" style={{animationDelay: '150ms'}}></div>
                              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '300ms'}}></div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                    <CardTitle className="tracking-tight text-2xl font-bold mb-4 group-hover:text-purple-400 transition-colors duration-300 text-[#ffffff]">
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
                          <ArrowRight className={`${project.color === "blue" ? "text-blue-400" : "text-purple-400"} mt-1 text-sm flex-shrink-0`} size={14} />
                          <span className="text-sm">{feature}</span>
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