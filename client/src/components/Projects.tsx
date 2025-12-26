import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, ArrowRight, ExternalLink } from "lucide-react";

// Existing Project images
import businessAiApp1 from "./images/buisnees ai app-1.png";
import businessAiApp2 from "./images/buisnees ai app-2.png";
import businessAiApp3 from "./images/buisnees ai app-3.png";
import businessAiApp4 from "./images/buisnees ai app-4.jpg";
import robotArmGen3 from "./images/k.png";
import n8nRagAgent from "./images/n8n rag agent photo.png";
import yoloLogo from "./images/YOLO LOGO.png";
import n8nLogo from "./images/n8n LOGO.png";
import huggingFaceLogo from "./images/HUGGING FACE LOGO.png";
import dockerLogo from "./images/DOCKER LOGO.png";
import screenshot from "./images/Screenshot-2025-01-08-100219.webp";
import whisperImage from "./images/whisper.png";

// New Project images
import vocab1 from "./images/vocab-1.jpeg";
import vocab2 from "./images/vocab-2.jpeg";
import vocab3 from "./images/vocab-3.jpeg";
import vocab4 from "./images/vocab-4.jpeg";
import vocabLogo from "./images/vocab-logo.jpg";
import pub1 from "./images/pub1.png";
import pub2 from "./images/pub2.png";
import pub3 from "./images/pub3.png";

const featuredProjects = [
  {
    title: "AI Business App Assistant",
    description: "Intelligent customer service and appointment scheduling system that automates customer interactions and manages availability-based scheduling using Gemini data processing.",
    features: [
      "Automated customer inquiry responses using Gemini API",
      "Intelligent appointment scheduling with real-time availability checking",  
      "Calendar integration with automated booking confirmations",
      "Performance analytics dashboard with customer satisfaction metrics"
    ],
    technologies: ["Gemini", "Automated Workflows", "Firebase", "React", "Expo Go"],
    images: [businessAiApp1, businessAiApp2, businessAiApp3, businessAiApp4],
    linkText: "View Project"
  },
  {
    title: "Vocab Frenzy",
    logo: vocabLogo,
    description: "A comprehensive language learning platform supporting 5 global languages. Features interactive gaming mechanics and personalized vocabulary management to accelerate fluency.",
    features: [
      "Full support for Arabic, Russian, French, Spanish, and German",
      "Interactive vocabulary learning mini-games for immersive practice",
      "Custom sentence addition system for personalized learning paths",
      "Advanced progress tracking and vocabulary retention analytics"
    ],
    technologies: ["Expo Go", "App Store", "Firebase", "Node Js", "React Native"],
    images: [vocab1, vocab2, vocab3, vocab4],
    link: "https://apps.apple.com/us/app/vocab-frenzy-language-boost/id6747328745", // Replace with your link
    linkText: "Download App"
  },
  {
    title: "Space Rocket Landing Prediction",
    description: "Advanced computational research project predicting rocket landing zones by integrating Python algorithms with ASTOS aerospace simulation software.",
    features: [
      "Established safety requirements for rocket launches based on weather conditions",
      "Developed a Python algorithm to predict landing zones relative to wind data",
      "Collaborated with FAA and Transport Canada to verify safety methodologies",
      "Reduced landing position calculation time by 50% after receiving live wind data"
    ],
    technologies: ["Python", "Algorithms", "ASTOS", "Data Science", "Publication"],
    images: [pub1, pub2, pub3],
    link: "https://www.sciencedirect.com/science/article/abs/pii/S0094576523003594", // Replace with your link
    linkText: "Read Publication",
    color: "blue"
  }
];

const projects = [
  {
    title: "Kinova Gen 3 Robot Arm Pick & Place Simulation",
    description: "Advanced robotics simulation system combining YOLO object detection with Unity Engine for precise pick-and-place operations.",
    features: [
      "YOLO v8 object detection with custom dataset training",
      "Unity Engine 3D physics simulation with kinematics modeling", 
      "Path optimization algorithms for efficient movement planning"
    ],
    technologies: ["YOLO v8", "Unity Engine", "Computer Vision", "Robotics"],
    color: "purple"
  },
  {
    title: "Custom Text-to-Speech Model",
    description: "High-quality neural Arabic text-to-speech model with real-time inference capabilities and natural speech patterns.",
    features: [
      "Custom TTS model training using transformer architecture",
      "Real-time inference optimization (sub-100ms response)",
      "Multi-language support with accent variations"
    ],
    technologies: ["Neural TTS", "Transformer Models", "Audio Processing", "API"],
    color: "purple"
  },
  {
    title: "Large-Scale Web Scraping",
    description: "Automated the extraction of 1M+ web pages into structured dataframes for advanced analytics.",
    features: [
      "reCAPTCHA & Bot-Detection Bypass including Akamai",
      "Automated timeout & error handling",
      "Asynchronous data pipeline architecture"
    ],
    technologies: ["Python", "Selenium", "Pandas", "BeautifulSoup", "Scrapy"],
    color: "text-purple-400"
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

        <div className="space-y-12">
          {/* Featured Projects List */}
          {featuredProjects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-r from-dark-secondary to-dark-tertiary p-8 rounded-3xl border ${project.color === 'blue' ? 'border-blue-500/20 hover:border-blue-500/40' : 'border-purple-500/20 hover:border-purple-500/40'} transition-all duration-300`}
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3">
                  {/* Increased gap and conditional grid columns for better layout */}
                  <div className={`grid ${project.images.length === 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-2'} gap-6 mb-6`}>
                    {project.images.map((img, i) => (
                      <div 
                        key={i} 
                        className="bg-white/5 rounded-2xl flex items-center justify-center h-[320px] md:h-[450px] overflow-hidden group/img relative border border-white/10"
                      >
                        <img 
                          src={img} 
                          alt={`${project.title} screenshot ${i + 1}`}
                          className={`w-full h-full transition-transform duration-500 group-hover/img:scale-110 ${
                            // Use contain for charts to ensure no data is cut off, 
                            // but use cover for app screenshots if you want them to fill the space
                            project.title.includes("Rocket") ? "object-contain p-2" : "object-contain p-4"
                          }`}
                        />
                        {/* Subtle overlay on hover to make it feel interactive */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 pointer-events-none" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:w-1/3 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    {project.logo ? (
                      <img src={project.logo} alt="Logo" className="w-12 h-12 rounded-xl border border-gray-600 shadow-lg" />
                    ) : (
                      <Badge className={`${project.color === 'blue' ? 'bg-blue-500' : 'bg-purple-600'} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                        FEATURED
                      </Badge>
                    )}
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg mb-6">
                    {project.description}
                  </p>
                  <div className="space-y-3 mb-6">
                    {project.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className={`${project.color === 'blue' ? 'text-blue-400' : 'text-purple-400'} mt-1 flex-shrink-0`} size={16} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className={`${project.color === 'blue' ? 'bg-blue-500/20 text-blue-400' : 'bg-purple-500/20 text-purple-400'} px-3 py-1 rounded-full text-sm`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className={`${project.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-purple-600 hover:bg-purple-700'} text-white w-full rounded-xl`}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      {project.linkText} <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Regular Project Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
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
                      <div className="w-full h-48 rounded-xl shadow-lg relative overflow-hidden">
                        <img 
                          src={project.title.includes("Robot") ? robotArmGen3 : whisperImage} 
                          alt={`${project.title}`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${project.color === "blue" ? "from-blue-900/50" : "from-purple-900/50"} to-transparent`}></div>
                      </div>
                    </div>
                    <CardTitle className="tracking-tight text-2xl font-bold mb-4 text-[#ffffff] group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-gray-300 mb-4">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6 text-gray-300">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <ArrowRight className={`${project.color === "blue" ? "text-blue-400" : "text-purple-400"} mt-1 text-sm flex-shrink-0`} size={14} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
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