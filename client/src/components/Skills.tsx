import { motion } from "framer-motion";
import { Brain, MessageSquare, Bot, Cog, Code, Database } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const skills = [
  {
    icon: Code,
    title: "Full-Stack Development",
    description: "Scalable React applications, cloud infrastructure, and interactive data platforms.",
    technologies: ["React", "Node.js", "JavaScript", "Python", "AWS", "Docker"],
    color: "text-blue-400"
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "End-to-end ML pipelines, model architecture, and data validation.",
    technologies: ["TensorFlow", "PyTorch", "Scikit-Learn"],
    color: "text-blue-400"
  },
  {
    icon: Bot,
    title: "Robotics & Computer Vision",
    description: "Real-time object detection, Unity simulations, and robotic automation.",
    technologies: ["YOLO", "OpenCV", "Unity"],
    color: "text-blue-400"
  },
  {
    icon: Cog,
    title: "Automation & Workflows",
    description: "Custom data pipelines, web scraping, and process optimization.",
    technologies: ["Python", "JavaScript", "Selenium", "Spyder"],
    color: "text-purple-400"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Core Technologies & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and machine learning expertise across multiple domains and technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="skill-card p-8 rounded-2xl group card-hover"
            >
              <div className={`${skill.color} text-4xl mb-4 group-hover:text-accent-purple transition-colors duration-300`}>
                <skill.icon size={40} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
              <p className="text-gray-300 mb-4">{skill.description}</p>
              <div className="flex flex-wrap gap-2">
                {skill.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="secondary"
                    className={`${skill.color === "text-blue-400" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"} px-3 py-1 rounded-full text-sm`}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}