import React from 'react';
import { Send, Mail, Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="bg-white px-4 py-16 lg:py-24 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12 lg:mb-16">
          Contact GAMA AGANCY
        </h2>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-900 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-900 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-900 font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <span>Send & Join Telegram</span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>

            <a
              href="#"
              className="flex items-center gap-3 text-blue-600 hover:text-blue-700 transition-colors"
            >
              <Send className="w-6 h-6" />
              <span className="font-medium">Join Our Telegram Channel</span>
            </a>

            <div className="flex items-center gap-3 text-gray-700">
              <Mail className="w-6 h-6" />
              <span>contact@gamaagency.com</span>
            </div>

            <div className="flex items-center gap-3 text-gray-700">
              <Phone className="w-6 h-6" />
              <span>+91 98765 43210</span>
            </div>

            <div className="pt-6">
              <button className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-red-700 transition-colors">
                Buy Instantly for ₹899
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};