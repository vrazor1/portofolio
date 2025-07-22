import { Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark-primary border-t border-dark-tertiary py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold gradient-text">Loai Aldaghma Portfolio</h3>
            <p className="text-gray-400">Transforming businesses through intelligent automation</p>
          </div>
          <div className="flex items-center gap-4">
            <Mail size={16} className="text-blue-400" />
            <span className="text-gray-300">vloaihd@gmail.com</span>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-dark-tertiary text-center text-gray-400">
          <p>&copy; 2024 Loai Aldaghma Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}