import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function Contact() {

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

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Philosophy Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-dark-tertiary border-gray-600 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">My Philosophy</h3>
                <p className="text-2xl md:text-3xl text-gray-300 font-light italic leading-relaxed">
                  "Everything can be automated, the question is how"
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-dark-primary border-gray-600 text-center max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-blue-400 text-2xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Email</h4>
                    <p className="text-gray-300">vloaihd@gmail.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <Card className="bg-dark-primary border-gray-600 text-center max-w-2xl mx-auto">
            <CardContent className="p-6">
              <h4 className="font-semibold mb-3 text-[#ffffff]">Response Time</h4>
              <p className="text-gray-300">
                I typically respond to project inquiries within 24 hours. For urgent AI consulting needs, please mention "urgent" in your message subject.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}