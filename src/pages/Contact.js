import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import SocialIcons from '../components/SocialIcons';
import { MapPin, Mail, Phone, Send } from 'lucide-react';
import { toast } from 'sonner';
import emailjs from '@emailjs/browser';
const Contact = ({ id }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };
    const handleSubmit = async (e) => {
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
            const response = await emailjs.send('service_3jrah1o', // Replace with your EmailJS service ID
            'template_ghfutip', // Replace with your EmailJS template ID
            templateParams, 'QykxPJ6gQS-TmV2Rt' // Replace with your EmailJS user ID
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
        }
        catch (error) {
            console.error("Error sending email:", error);
            toast.error("Failed to send message. Please try again later.");
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("section", { id: id, className: "min-h-screen py-16 px-3 bg-section2", children: [_jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsx("div", { className: "text-center mb-16", children: _jsxs("h1", { className: "section-title", children: ["Contact ", _jsx("span", { className: "text-header", children: "Me" })] }) }), _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs("form", { onSubmit: handleSubmit, className: "bg-white rounded-lg shadow-lg p-8 mb-12", children: [_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6", children: [_jsx("div", { children: _jsx("input", { type: "text", name: "name", value: formData.name, onChange: handleChange, className: "w-full px-4 py-3 text-base border-2 border-header rounded-lg focus:outline-none focus:ring-2 focus:ring-header/50 bg-white", placeholder: "Full Name", required: true }) }), _jsx("div", { children: _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, className: "w-full px-4 py-3 text-base border-2 border-header rounded-lg focus:outline-none focus:ring-2 focus:ring-header/50 bg-white", placeholder: "Email Address", required: true }) })] }), _jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6", children: [_jsx("div", { children: _jsx("input", { type: "tel", name: "phone", value: formData.phone, onChange: handleChange, className: "w-full px-4 py-3 text-base border-2 border-header rounded-lg focus:outline-none focus:ring-2 focus:ring-header/50 bg-white", placeholder: "Phone Number" }) }), _jsx("div", { children: _jsx("input", { type: "text", name: "subject", value: formData.subject, onChange: handleChange, className: "w-full px-4 py-3 text-base border-2 border-header rounded-lg focus:outline-none focus:ring-2 focus:ring-header/50 bg-white", placeholder: "Email Subject", required: true }) })] }), _jsx("div", { className: "mb-6", children: _jsx("textarea", { rows: 8, name: "message", value: formData.message, onChange: handleChange, className: "w-full px-4 py-3 text-base border-2 border-header rounded-lg focus:outline-none focus:ring-2 focus:ring-header/50 bg-white resize-none", placeholder: "Your message", required: true }) }), _jsx("div", { className: "text-center", children: _jsx("button", { type: "submit", className: "btn", disabled: loading, children: loading ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" }), "Sending..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { className: "w-4 h-4 mr-2" }), "Send Message"] })) }) })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [_jsxs("div", { className: "bg-skills rounded-lg p-6 flex items-start", children: [_jsx("div", { className: "bg-header text-white p-3 rounded-full mr-4", children: _jsx(MapPin, { className: "w-5 h-5" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold mb-1 text-lg", children: "Location" }), _jsx("p", { className: "text-gray-700", children: "Los Angeles, CA, 90032" })] })] }), _jsxs("div", { className: "bg-skills rounded-lg p-6 flex items-start", children: [_jsx("div", { className: "bg-header text-white p-3 rounded-full mr-4", children: _jsx(Mail, { className: "w-5 h-5" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold mb-1 text-lg", children: "Email" }), _jsx("a", { href: "mailto:jaydeepgondaliya182@gmail.com", className: "text-blue-600 hover:text-blue-800 transition-colors", children: "jaydeepgondaliya182@gmail.com" })] })] }), _jsxs("div", { className: "bg-skills rounded-lg p-6 flex items-start", children: [_jsx("div", { className: "bg-header text-white p-3 rounded-full mr-4", children: _jsx(Phone, { className: "w-5 h-5" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold mb-1 text-lg", children: "Phone" }), _jsx("a", { href: "tel:+16266255783", className: "text-blue-600 hover:text-blue-800 transition-colors", children: "+1 (626) 625-5783" })] })] })] })] })] }), _jsx("footer", { className: "bg-section1 py-10 mt-16", children: _jsx("div", { className: "mx-full px-0", children: _jsxs("div", { className: "text-center", children: [_jsx("h3", { className: "font-semibold mb-4 text-5xl", children: "Connect with me" }), _jsx(SocialIcons, { className: "justify-center mb-6" }), _jsx("p", { className: "text-gray-700 text-2xl", children: "\u00A9 Jaydeep Gondaliya - All Rights Reserved" })] }) }) })] }));
};
export default Contact;
