"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We’ll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+94 XXX XXX XXX", "+94 XXX XXX XXX"],
      action: "Call Us",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@agroherds.lk", "orders@agroherds.lk"],
      action: "Send Email",
    },
    {
      icon: MapPin,
      title: "Address",
      details: ["Agroherds Farm", "Sri Lanka"],
      action: "Get Directions",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon – Sat: 7:00 AM – 6:00 PM", "Sunday: By Appointment"],
      action: "Book Visit",
    },
  ];

  return (
    <section id="contact" className="py-32 bg-black">
      <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-green-400 text-sm uppercase tracking-[0.3em] mb-4 font-light">
            Get In Touch
          </p>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6 text-white">
            Contact
            <br />
            <span className="text-green-400">Agroherds</span>
          </h2>
          <p className="text-gray-400 text-xl font-light max-w-3xl mx-auto">
            Have questions? We’d love to hear from you. Send us a message and
            we’ll respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Form – 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[30px] p-8 lg:p-12 border border-gray-700">
              <h3 className="text-3xl font-bold text-white mb-8">
                Send us a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-2 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition font-light"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-2 uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition font-light"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-2 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition font-light"
                      placeholder="+94 XXX XXX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-light text-gray-400 mb-2 uppercase tracking-wider">
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-2xl text-white focus:outline-none focus:border-green-500 transition font-light"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="product-inquiry">Product Inquiry</option>
                      <option value="bulk-order">Bulk Order</option>
                      <option value="farm-visit">Farm Visit</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-light text-gray-400 mb-2 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-6 py-4 bg-black/50 border border-gray-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition font-light resize-none"
                    placeholder="Tell us how we can help you..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-green-500 hover:bg-green-600 text-white rounded-full font-semibold transition uppercase tracking-widest text-sm shadow-lg shadow-green-500/20 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards – 1 column */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[20px] p-6 border border-gray-700 hover:border-green-500 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center flex-shrink-0 border border-green-500/20">
                      <IconComponent className="w-6 h-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-white mb-2">
                        {info.title}
                      </h4>
                      {info.details.map((detail, idx) => (
                        <p
                          key={idx}
                          className="text-gray-400 text-sm font-light mb-1"
                        >
                          {detail}
                        </p>
                      ))}
                      <button className="text-green-400 text-sm font-light hover:text-green-300 transition mt-2">
                        {info.action} →
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Social Media */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[20px] p-6 border border-gray-700">
              <h4 className="text-lg font-bold text-white mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 hover:bg-green-500 hover:border-green-500 transition-all group">
                  <Facebook className="w-5 h-5 text-green-400 group-hover:text-white transition" />
                </button>
                <button className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 hover:bg-green-500 hover:border-green-500 transition-all group">
                  <Instagram className="w-5 h-5 text-green-400 group-hover:text-white transition" />
                </button>
                <button className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center border border-green-500/20 hover:bg-green-500 hover:border-green-500 transition-all group">
                  <MessageCircle className="w-5 h-5 text-green-400 group-hover:text-white transition" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-[30px] overflow-hidden border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Map Placeholder */}
            <div className="relative h-[400px] bg-gray-800">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <p className="text-gray-400 font-light">
                    Interactive Map Coming Soon
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="p-12">
              <h3 className="text-3xl font-bold text-white mb-6">
                Quick Contact
              </h3>
              <p className="text-gray-400 font-light leading-relaxed mb-8">
                For urgent inquiries or bulk orders, please call us directly.
                Our team is ready to assist you with your requirements.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-4 bg-black/50 rounded-2xl border border-gray-700">
                  <Phone className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-light">
                      Emergency Hotline
                    </p>
                    <p className="text-white font-semibold">
                      +94 XXX XXX XXX
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-black/50 rounded-2xl border border-gray-700">
                  <MessageCircle className="w-6 h-6 text-green-400" />
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider font-light">
                      WhatsApp
                    </p>
                    <p className="text-white font-semibold">
                      +94 XXX XXX XXX
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-green-500/10 rounded-2xl border border-green-500/20">
                <p className="text-green-400 font-semibold mb-2">
                  Office Hours
                </p>
                <p className="text-white text-sm font-light">
                  Monday – Saturday: 7:00 AM – 6:00 PM
                </p>
                <p className="text-white text-sm font-light">
                  Sunday: By Appointment Only
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;