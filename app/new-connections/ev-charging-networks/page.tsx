"use client";

import React from "react";
import Link from "next/link";

export default function EVChargingNetworks() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#f5f5f5] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">
              EV Charging Network Solutions
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              HV Direct provides comprehensive electric vehicle charging infrastructure solutions for residential, commercial, and industrial applications, from single domestic chargers to large-scale charging hubs.
            </p>
            
            {/* Service Category Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-[#137DC5] text-white text-sm font-medium rounded-full">
                Low Voltage
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-[#0f5f96] text-white text-sm font-medium rounded-full">
                High Voltage
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-[#e5e7eb] text-gray-700 text-sm font-medium rounded-full">
                Residential
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-[#e5e7eb] text-gray-700 text-sm font-medium rounded-full">
                Commercial
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-[#e5e7eb] text-gray-700 text-sm font-medium rounded-full">
                Fleet Solutions
              </div>
            </div>
            
            <Link 
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#137DC5] text-white font-medium rounded-md hover:bg-[#0f5f96] transition-colors"
            >
              Get a Quote
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Feature Image Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/images/ev-charging.jpeg" 
              alt="EV Charging Installation" 
              className="w-full h-[400px] md:h-[500px] object-cover"
            />
          </div>
        </div>
      </section>
      
      {/* Service Description Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1a1a1a]">
              Comprehensive EV Charging Solutions
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                As the UK transitions towards electric vehicles, reliable charging infrastructure is essential. HV Direct provides end-to-end EV charging solutions tailored to the specific needs of residential, commercial, and industrial clients.
              </p>
              
              <h3>Our EV Charging Services Include:</h3>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Low Voltage Solutions</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Domestic EV charging points for individual homes</li>
                    <li>Multi-residential charging solutions for apartment buildings</li>
                    <li>Workplace charging facilities for employee vehicles</li>
                    <li>Public charging installations for retail and leisure venues</li>
                    <li>Smart charging systems with load management</li>
                  </ul>
                </div>
                
                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-[#1a1a1a]">High Voltage Solutions</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Commercial rapid charging hubs for public use</li>
                    <li>Fleet depot charging infrastructure for businesses</li>
                    <li>High-capacity charging for transport hubs</li>
                    <li>Integration with renewable energy sources</li>
                    <li>Substation design and installation for large-scale deployments</li>
                  </ul>
                </div>
              </div>
              
              <p>
                Our approach begins with a thorough assessment of your requirements, followed by detailed design, efficient installation, comprehensive testing, and ongoing maintenance support. We handle all aspects of the electrical infrastructure required, including connection to the distribution network.
              </p>
              
              <p>
                As an Independent Connection Provider (ICP), we can deliver a streamlined solution that integrates seamlessly with your existing electrical systems or new developments, ensuring optimal performance and reliability.
              </p>
            </div>
            
            {/* CTA Box */}
            <div className="mt-12 bg-gradient-to-r from-[#0f5f96] to-[#137DC5] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Install EV Charging Infrastructure?</h3>
              <p className="mb-6">
                Contact our specialists today to discuss your requirements and get a customised quote for your project.
              </p>
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0f5f96] font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#1a1a1a]">
              Contact Us
            </h2>
            <p className="text-lg text-gray-700">
              Get in touch with our team to discuss your EV charging requirements.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-sm">
            <form>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Type*
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                >
                  <option value="">Please select...</option>
                  <option value="domestic">Domestic Charging</option>
                  <option value="multi-residential">Multi-Residential</option>
                  <option value="workplace">Workplace Charging</option>
                  <option value="fleet">Fleet Charging</option>
                  <option value="public">Public Charging Hub</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                  placeholder="Please provide details about your project requirements..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-[#137DC5] text-white font-medium rounded-md hover:bg-[#0f5f96] transition-colors"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
} 