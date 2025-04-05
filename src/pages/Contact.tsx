
import React, { useState } from 'react';

import SocialIcons from '../components/SocialIcons';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';

interface ContactProps {
  id?: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        title: formData.subject,
        message: formData.message
      };
      
      // Send email using EmailJS
      // You'll need to replace these IDs with your actual EmailJS service, template and user IDs
      const response = await emailjs.send(
        'service_3jrah1o', // Replace with your EmailJS service ID
        'template_ghfutip', // Replace with your EmailJS template ID
        templateParams,
        'QykxPJ6gQS-TmV2Rt' // Replace with your EmailJS user ID
      );
      
      console.log('Email sent successfully:', response);
      
      toast.success("Thank you for your message! I'll get back to you soon.");
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (

      <section id={id} className="min-h-screen py-16 px-3 bg-section2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="section-title">Contact <span className="text-header">Me</span></h1>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8 mb-12">
            
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-base border-2 border-header rounded-lg focus:outline-none focus:ring-2 focus:ring-header/50 bg-white"
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
                    className="w-full px-4 py-3 text-base border-2 border-header rounded-lg focus:outline-none focus:ring-2 focus:ring-header/50 bg-white"
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
                    className="w-full px-4 py-3 text-base border-2 border-header rounded-lg focus:outline-none focus:ring-2 focus:ring-header/50 bg-white"
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 text-base border-2 border-header rounded-lg focus:outline-none focus:ring-2 focus:ring-header/50 bg-white"
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
                  className="w-full px-4 py-3 text-base border-2 border-header rounded-lg focus:outline-none focus:ring-2 focus:ring-header/50 bg-white resize-none"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="btn"
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
            </form>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-skills rounded-lg p-6 flex items-start">
                <div className="bg-header text-white p-3 rounded-full mr-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg">Location</h3>
                  <p className="text-gray-700">Los Angeles, CA, 90032</p>
                </div>
              </div>
              
              <div className="bg-skills rounded-lg p-6 flex items-start">  
             <div className="bg-header text-white p-3 rounded-full mr-4 flex-shrink-0">
              <Mail className="w-5 h-5" />
               </div>
               <div className="flex-1 max-w-[200px]">
                 <h3 className="font-semibold mb-1 text-lg">Email</h3>
                         <a
                        href="mailto:jaydeepgondaliya182@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors inline-block whitespace-no-wrap break-words"
                        >
                   jaydeepgondaliya18@gmail.com
                    </a>
                  </div>
              </div>
              
              <div className="bg-skills rounded-lg p-6 flex items-start">
                <div className="bg-header text-white p-3 rounded-full mr-4">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-lg">Phone</h3>
                  <a href="tel:+16266255783" className="text-blue-600 hover:text-blue-800 transition-colors">
                    +1 (626) 625-5783
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <footer className="bg-section1 py-10 mt-16">
    <div className="mx-full px-0">
      <div className="text-center">
        <h3 className="font-semibold mb-4 text-5xl">Connect with me</h3>
        <SocialIcons className="justify-center mb-6" />
        <p className="text-gray-700 text-2xl">&copy; Jaydeep Gondaliya - All Rights Reserved</p>
      </div>
    </div>
  </footer>
</section>

  );
};

export default Contact;
