import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

// Import project images
import businessAiApp1 from "./images/buisnees ai app-1.png";
import businessAiApp2 from "./images/buisnees ai app-2.png";
import businessAiApp3 from "./images/buisnees ai app-3.png";
import businessAiApp4 from "./images/buisnees ai app-4.jpg";
import robotArmGen3 from "./images/robot arm gen3.png";
import n8nRagAgent from "./images/n8n rag agent photo.png";
import yoloLogo from "./images/YOLO LOGO.png";
import n8nLogo from "./images/n8n LOGO.png";
import huggingFaceLogo from "./images/HUGGING FACE LOGO.png";
import dockerLogo from "./images/DOCKER LOGO.png";
import screenshot from "./images/Screenshot-2025-01-08-100219.webp";
import whisperImage from "./images/whisper.png";

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
                <div className="w-full h-64 rounded-2xl shadow-lg relative overflow-hidden group">
                  <img 
                    src={businessAiApp1} 
                    alt="AI Business Assistant Login Screen"
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent rounded-2xl"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                  <div className="absolute bottom-4 left-4">
                    <div className="text-white text-sm font-medium drop-shadow-lg">AI Business Assistant</div>
                    <div className="text-gray-200 text-xs mt-1 drop-shadow">Customer Service & Scheduling</div>
                  </div>
                  <div className="absolute bottom-4 right-4 flex gap-1">
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
                      className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm flex items-center gap-1.5"
                    >
                      {tech === "NLP" && <img src={huggingFaceLogo} alt="Hugging Face" className="w-3 h-3" />}
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
                      <div className="w-full h-48 rounded-xl shadow-lg relative overflow-hidden group">
                        {project.title.includes("Data Collection") ? (
                          // Default design for Data Collection project
                          <>
                            <div className={`absolute inset-0 ${project.color === "blue" ? "bg-gradient-to-br from-blue-600/10 to-blue-800/10" : "bg-gradient-to-br from-purple-600/10 to-purple-800/10"}`}></div>
                            <div className={`absolute inset-0 ${project.color === "blue" ? "bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.2),transparent_70%)]" : "bg-[radial-gradient(circle_at_30%_40%,rgba(147,51,234,0.2),transparent_70%)]"} opacity-60`}></div>
                            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                              <div className={`w-14 h-14 mb-3 ${project.color === "blue" ? "bg-gradient-to-br from-blue-500 to-blue-600" : "bg-gradient-to-br from-purple-500 to-purple-600"} rounded-lg flex items-center justify-center shadow-lg`}>
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white">
                                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" fill="currentColor" opacity="0.8"/>
                                  <path d="M14 2V8H20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  <path d="M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                                </svg>
                              </div>
                              <div className={`text-xs font-medium ${project.color === "blue" ? "text-blue-400" : "text-purple-400"}`}>
                                Automation & Data Pipeline
                              </div>
                            </div>
                          </>
                        ) : (
                          // Image for other projects
                          <>
                            <img 
                              src={
                                project.title.includes("Robot") ? robotArmGen3 : 
                                project.title.includes("RAG") ? n8nRagAgent :
                                project.title.includes("Speech") ? whisperImage : screenshot
                              } 
                              alt={`${project.title} Screenshot`}
                              className={`w-full h-full transition-transform duration-300 group-hover:scale-105 ${
                                project.title.includes("Robot") ? "object-contain bg-white/5" : "object-cover"
                              }`}
                            />
                            <div className={`absolute inset-0 bg-gradient-to-t ${project.color === "blue" ? "from-blue-900/50 via-transparent to-transparent" : "from-purple-900/50 via-transparent to-transparent"}`}></div>
                            <div className="absolute bottom-3 left-3">
                              <div className={`text-xs font-medium text-white drop-shadow-lg ${project.color === "blue" ? "text-blue-100" : "text-purple-100"}`}>
                                {project.title.includes("Robot") ? "Robotics & Unity Simulation" : 
                                 project.title.includes("RAG") ? "Data Analytics & Visualization" :
                                 project.title.includes("Speech") ? "Voice AI & Real-time Processing" : "Automation & Data Pipeline"}
                              </div>
                            </div>
                          </>
                        )}
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
                          className={`${project.color === "blue" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"} px-3 py-1 rounded-full text-sm flex items-center gap-1.5`}
                        >
                          {tech === "YOLO v8" && <img src={yoloLogo} alt="YOLO" className="w-3 h-3" />}
                          {tech === "RAG" && <img src={huggingFaceLogo} alt="RAG" className="w-3 h-3" />}
                          {tech === "React" && <img src={dockerLogo} alt="Docker" className="w-3 h-3" />}
                          {(tech === "Python" || tech === "Data Pipelines") && <img src={n8nLogo} alt="n8n" className="w-3 h-3" />}
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