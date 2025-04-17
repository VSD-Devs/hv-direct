"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: ""
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ""
  });

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real application, this would send the data to a server
    // For demo purposes, we'll just simulate a successful submission
    console.log("Form submitted:", formData);
    
    // Show success message
    setFormStatus({
      submitted: true,
      error: false,
      message: "Thank you for your enquiry. Our team will contact you shortly."
    });
    
    // Clear form data
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: ""
    });
  };

  // FAQ items
  const faqs = [
    {
      question: "What is an Independent Connection Provider?",
      answer: "An Independent Connection Provider (ICP) is a company that can design and construct electricity networks that connect to the local Distribution Network Operator (DNO). As an ICP, HV Direct offers an alternative to DNO connections, often providing more competitive prices and faster delivery times."
    },
    {
      question: "How long does a typical electrical connection project take?",
      answer: "Project timelines vary based on complexity, scale, and location. A small residential connection might take 4-8 weeks, while larger commercial or industrial projects may require 3-6 months. During our initial consultation, we'll provide a detailed timeline specific to your project requirements."
    },
    {
      question: "What geographical areas do you cover?",
      answer: "HV Direct provides electrical connection services throughout the UK, allowing us to efficiently service projects across England, Wales, and Scotland."
    },
    {
      question: "Do you handle planning and regulatory approvals?",
      answer: "Yes, our comprehensive service includes managing planning applications and securing all necessary regulatory approvals. We handle liaison with local authorities, Distribution Network Operators (DNOs), and other stakeholders to ensure all aspects of your connection project comply with relevant regulations."
    },
    {
      question: "Can you work with existing electrical infrastructure?",
      answer: "Absolutely. We specialise in both new connections and modifications to existing electrical infrastructure. Our services include diversions, reinforcements, and upgrades to meet increased capacity requirements or accommodate site changes."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(rgba(15, 95, 150, 0.85), rgba(33, 153, 234, 0.75)), url('https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&q=80')"
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Contact Us
            </h1>
            <div className="h-1 w-24 bg-white mx-auto mb-8"></div>
            <p className="text-base md:text-xl mb-8">
              Get in touch with our team to discuss your electrical connection requirements or request a quote for your project.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="p-6 md:p-10 bg-gradient-to-br from-[#f8f9ff] to-white">
                <h2 className="text-3xl font-bold mb-6 text-brand-dark-blue">Get in Touch</h2>
                <p className="text-base md:text-lg text-gray-700 mb-8">
                  Fill in the form below and our team will get back to you within 24 hours to discuss your requirements.
                </p>
                
                {formStatus.submitted ? (
                  <div className="bg-green-50 border border-green-100 rounded-lg p-6 mb-8">
                    <div className="flex items-center mb-4">
                      <div className="bg-green-100 rounded-full p-2 mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold text-green-800">Enquiry Sent</h3>
                    </div>
                    <p className="text-base md:text-lg text-green-700">{formStatus.message}</p>
                    <button 
                      onClick={() => setFormStatus(prev => ({ ...prev, submitted: false }))}
                      className="mt-6 inline-flex items-center justify-center px-6 py-3 bg-[#137DC5] text-white font-medium rounded-md hover:bg-[#0f5f96] transition-colors"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Full Name*</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email Address*</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                          placeholder="Your phone number"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">Company Name</label>
                        <input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                          placeholder="Your company"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block mb-2 text-sm font-medium text-gray-700">Service of Interest*</label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                      >
                        <option value="">Please select a service</option>
                        <option value="Low Voltage Connections">Low Voltage Connections</option>
                        <option value="High Voltage Connections">High Voltage Connections</option>
                        <option value="Residential Connections">Residential Connections</option>
                        <option value="Commercial Connections">Commercial Connections</option>
                        <option value="EV Charging Infrastructure">EV Charging Infrastructure</option>
                        <option value="Diversions & Reinforcements">Diversions & Reinforcements</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Your Message*</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                        placeholder="Please provide details about your project or requirements..."
                      ></textarea>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center px-6 py-3 bg-[#137DC5] text-white font-medium rounded-md hover:bg-[#0f5f96] transition-colors"
                      >
                        Send Enquiry
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-[#0f5f96] to-[#2199ea] py-16 md:py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need an Urgent Response?</h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto">
            For urgent enquiries, please call our central helpline. Our support team is available Monday to Friday, 8am to 6pm.
          </p>
          <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="text-xl font-semibold">0800 123 4567</span>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our electrical connection services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 md:p-8">
                  <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">{faq.question}</h3>
                  <p className="text-base md:text-lg text-gray-600">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-base md:text-lg text-gray-600 mb-6">
              Can't find the answer you're looking for?
            </p>
            <Link 
              href="#contact-form" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#137DC5] text-white font-medium rounded-md hover:bg-[#0f5f96] transition-colors"
            >
              Ask Us a Question
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 