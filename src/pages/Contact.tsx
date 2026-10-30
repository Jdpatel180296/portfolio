import React, { useState } from "react";
import { motion } from "framer-motion";
import SocialIcons from "../components/SocialIcons";
import { MapPin, Mail, Phone, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

interface ContactProps {
  id?: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080/api';

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message');
      }

      console.log("Message sent successfully:", data);

      toast.success(data.message || "Thank you for your message! I'll get back to you soon.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id={id}
      className="min-h-screen py-20 px-4 relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50 dark:from-gray-900 dark:via-rose-950 dark:to-pink-950 animate-gradient-xy"></div>

      {/* Floating shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-orange-300 dark:bg-orange-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-rose-300 dark:bg-rose-700 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center gap-3 mb-4"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <MessageCircle className="w-12 h-12 text-orange-600 dark:text-orange-400" />
          </motion.div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-4 dark:text-white">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-rose-600 to-pink-600">
              Touch
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a question or want to work together? Let's connect!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            className="backdrop-blur-sm bg-white/40 dark:bg-gray-800/40 border border-white/30 dark:border-gray-700/30 rounded-2xl shadow-xl p-8 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base border-2 border-orange-200 dark:border-orange-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 dark:text-white backdrop-blur-sm transition-all duration-300"
                  placeholder="Full Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base border-2 border-orange-200 dark:border-orange-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 dark:text-white backdrop-blur-sm transition-all duration-300"
                  placeholder="Email Address"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base border-2 border-orange-200 dark:border-orange-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 dark:text-white backdrop-blur-sm transition-all duration-300"
                  placeholder="Phone Number"
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-base border-2 border-orange-200 dark:border-orange-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 dark:text-white backdrop-blur-sm transition-all duration-300"
                  placeholder="Email Subject"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <textarea
                rows={8}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 text-base border-2 border-orange-200 dark:border-orange-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white/80 dark:bg-gray-700/80 dark:text-white backdrop-blur-sm resize-none transition-all duration-300"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white rounded-full bg-gradient-to-r from-orange-600 to-rose-600 hover:from-orange-700 hover:to-rose-700 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </motion.form>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-2xl p-6 flex items-start shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-orange-500 to-rose-600 text-white p-3 rounded-xl mr-4 shadow-lg">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-lg dark:text-white">
                  Location
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  Los Angeles, CA, 90032
                </p>
              </div>
            </motion.div>

            <motion.div
              className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-2xl p-6 flex items-start shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-orange-500 to-rose-600 text-white p-3 rounded-xl mr-4 flex-shrink-0 shadow-lg">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 max-w-[300px]">
                <h3 className="font-semibold mb-1 text-lg dark:text-white">
                  Email
                </h3>
                <a
                  href="mailto:jaydeepgondaliya182@gmail.com"
                  className="text-blue-600 hover:text-blue-800 transition-colors inline-block break-words break-all"
                >
                  jaydeepgondaliya182@gmail.com
                </a>
              </div>
            </motion.div>

            <motion.div
              className="backdrop-blur-sm bg-white/40 border border-white/30 rounded-2xl p-6 flex items-start shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-orange-500 to-rose-600 text-white p-3 rounded-xl mr-4 shadow-lg">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1 text-lg dark:text-white">
                  Phone
                </h3>
                <a
                  href="tel:+16266255783"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  +1 (626) 625-5783
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.footer
        className="backdrop-blur-sm bg-white/30 dark:bg-gray-800/30 border-t border-white/30 dark:border-gray-700/30 py-10 mt-16 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="mx-full px-0">
          <div className="text-center">
            <h3 className="font-semibold mb-4 text-5xl dark:text-white">
              Connect with me
            </h3>
            <SocialIcons className="justify-center mb-6" />
            <p className="text-gray-700 dark:text-gray-200 text-2xl">
              &copy; Jaydeep Gondaliya - All Rights Reserved
            </p>
          </div>
        </div>
      </motion.footer>
    </section>
  );
};

export default Contact;
