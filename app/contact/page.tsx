"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
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
      message: "",
    });
  };

  // Office locations
  const offices = [
    {
      name: "London Head Office",
      address: "123 Electric House, London, EC1A 1BB",
      phone: "020 7123 4567",
      email: "london@hvdirect.co.uk",
      hours: "Monday - Friday: 8:30am - 5:30pm"
    },
    {
      name: "Manchester Office",
      address: "45 Power Street, Manchester, M1 2AB",
      phone: "0161 234 5678",
      email: "manchester@hvdirect.co.uk",
      hours: "Monday - Friday: 8:30am - 5:30pm"
    },
    {
      name: "Edinburgh Office",
      address: "78 Voltage Road, Edinburgh, EH1 3CD",
      phone: "0131 345 6789",
      email: "edinburgh@hvdirect.co.uk",
      hours: "Monday - Friday: 9:00am - 5:00pm"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section with Breadcrumb */}
      <section className="relative py-14 md:py-20 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(rgba(15, 95, 150, 0.85), rgba(16, 59, 88, 0.8)), url('/images/sectors-city.webp')"
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center text-sm mb-4">
            <Link href="/" className="text-white/80 hover:text-white">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Contact Us</span>
          </div>
          
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Let's Connect and Power Your Project
            </h1>
            <p className="text-base md:text-xl mb-8 leading-relaxed">
              Whether you need a consultation, a quote, or simply have a question, our friendly team is ready to assist you with all your electrical connection requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact-form" className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0f5f96] font-medium rounded-md hover:bg-gray-100 transition-colors">
                Send an Enquiry
              </a>
              <a href="#locations" className="inline-flex items-center justify-center px-6 py-3 bg-transparent border-2 border-white text-white font-medium rounded-md hover:bg-white/10 transition-colors">
                Find Our Offices
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white shadow-lg rounded-xl overflow-hidden">
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 bg-gradient-to-br from-[#0f5f96] to-[#2199ea] p-8 text-white">
                  <h2 className="text-2xl font-bold mb-6 text-white">How We Can Help</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-white">Project Consultation</h3>
                        <p className="text-white/80">Get expert advice on your electrical connection requirements and project feasibility.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-white">Custom Quotations</h3>
                        <p className="text-white/80">Receive a detailed and competitive quotation tailored to your specific project needs.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-white">Schedule Site Visits</h3>
                        <p className="text-white/80">Arrange for our technical team to visit your site for assessment and planning.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-lg font-medium mb-2 text-white">Technical Support</h3>
                        <p className="text-white/80">Get answers to technical questions and ongoing support for your electrical systems.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3 p-8 md:p-10 bg-gradient-to-br from-[#f8f9ff] to-white">
                  <h2 className="text-3xl font-bold mb-6 text-[#0f5f96]">Get in Touch</h2>
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
                          title=""
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
                          title=""
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
                          title=""
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
                          title=""
                        />
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
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
                        <option value="Residential Connections">Residential Connections</option>
                        <option value="Commercial Connections">Commercial Connections</option>
                        <option value="Industrial Connections">Industrial Connections</option>
                        <option value="EV Charging Infrastructure">EV Charging Infrastructure</option>
                        <option value="Diversions & Reinforcements">Diversions & Reinforcements</option>
                        <option value="Consultancy">Consultancy</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div className="md:col-span-1"></div>
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
                        title=""
                      ></textarea>
                    </div>

                      <div className="flex items-start mb-4">
                        <div className="flex items-center h-5">
                          <input
                            id="privacy"
                            name="privacy"
                            type="checkbox"
                            required
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-[#137DC5]"
                          />
                        </div>
                        <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                          I agree to the processing of my personal data in accordance with the <Link href="/privacy-policy" className="text-[#137DC5] hover:underline">Privacy Policy</Link>
                        </label>
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
        </div>
      </section>

      {/* Contact Information Section */}
      <section id="locations" className="py-14 bg-[#0f5f96]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-white">
              Our Offices Across the UK
            </h2>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto">
              Visit us at one of our regional offices or connect with us remotely. Our technical specialists are available to provide support nationwide.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white border border-gray-100 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold mb-3 text-[#0f5f96]">{office.name}</h3>
                <div className="space-y-3 text-gray-700">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#137DC5] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#137DC5] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{office.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#137DC5] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{office.email}</span>
                  </div>
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#137DC5] mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{office.hours}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-xl border border-gray-100">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                <h3 className="text-xl font-semibold mb-3 text-[#0f5f96]">Nationwide Service Coverage</h3>
                <p className="text-gray-700">
                  Our technical teams provide comprehensive electrical connection services throughout the UK. Whether you're in a major city or a remote location, we have the capabilities to deliver your project efficiently.
                </p>
              </div>
              <div className="md:w-1/3 flex justify-center">
                <div className="inline-flex items-center justify-center bg-[#137DC5] text-white rounded-full px-6 py-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span className="text-lg font-medium">UK-Wide Coverage</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 