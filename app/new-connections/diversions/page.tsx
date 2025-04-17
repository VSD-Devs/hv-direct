"use client";

import React from "react";
import Link from "next/link";

export default function DiversionsAndReinforcements() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-[#f5f5f5] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#1a1a1a]">
              Diversions and Reinforcements
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              HV Direct provides comprehensive low and high voltage diversion and reinforcement services, ensuring existing infrastructure can accommodate new developments, increased loads, or configuration changes.
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
                Commercial
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-[#e5e7eb] text-gray-700 text-sm font-medium rounded-full">
                Industrial
              </div>
              <div className="inline-flex items-center px-4 py-2 bg-[#e5e7eb] text-gray-700 text-sm font-medium rounded-full">
                Residential
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
              src="/images/diversions-reinforcement.webp" 
              alt="Diversions and Reinforcements" 
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
              Comprehensive Diversions and Reinforcements Solutions
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                As infrastructure expands and evolves, existing electrical networks often need to be diverted or reinforced to accommodate new developments, increased demand, or changes in configuration. HV Direct specialises in providing these essential services across both low and high voltage networks.
              </p>
              
              <h3>Our Diversions and Reinforcements Services Include:</h3>
              
              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Low Voltage Solutions</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Relocation of existing LV cables and equipment</li>
                    <li>Upgrades to existing LV networks to accommodate increased loads</li>
                    <li>Diversions required for building developments or roadworks</li>
                    <li>Installation of additional distribution boards or connection points</li>
                    <li>Modification of LV networks for improved reliability</li>
                  </ul>
                </div>
                
                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <h4 className="text-xl font-semibold mb-3 text-[#1a1a1a]">High Voltage Solutions</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Relocation of HV overhead lines or underground cables</li>
                    <li>Reinforcement of existing HV networks for increased capacity</li>
                    <li>Strategic diversions to facilitate major development projects</li>
                    <li>Integration of new HV equipment into existing networks</li>
                    <li>Reconfiguration of HV networks for improved resilience</li>
                  </ul>
                </div>
              </div>
              
              <p>
                Our comprehensive approach begins with thorough network analysis and design, followed by efficient project execution with minimal disruption to existing services. We meticulously coordinate with all relevant stakeholders including local authorities, DNOs, and other utility providers to ensure seamless implementation.
              </p>
              
              <p>
                As an Independent Connection Provider (ICP), HV Direct has the expertise and accreditations to work on both distribution and private networks, providing a complete end-to-end solution for your diversion and reinforcement needs.
              </p>
            </div>
            
            {/* CTA Box */}
            <div className="mt-12 bg-gradient-to-r from-[#0f5f96] to-[#137DC5] rounded-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Need Electrical Infrastructure Modifications?</h3>
              <p className="mb-6">
                Contact our specialists today to discuss your diversion and reinforcement requirements and get a tailored solution for your project.
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
              Get in touch with our team to discuss your diversions and reinforcements requirements.
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
                  <option value="lv-diversion">LV Cable Diversion</option>
                  <option value="lv-reinforcement">LV Network Reinforcement</option>
                  <option value="hv-diversion">HV Cable/Line Diversion</option>
                  <option value="hv-reinforcement">HV Network Reinforcement</option>
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