import { Linkedin, Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-primary border-t border-dark-tertiary py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold gradient-text">AI Expert Portfolio</h3>
            <p className="text-gray-400">Transforming businesses through intelligent automation</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-dark-tertiary text-center text-gray-400">
          <p>&copy; 2024 AI Expert Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
