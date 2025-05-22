"use client";

import React, { useState } from "react";
import Link from "next/link";
import QuoteModal from "@/app/components/QuoteModal";

export default function EVChargingPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("EV Charging Infrastructure");
  
  // Function to open modal with specific service
  const openQuoteModal = (serviceName: string) => {
    setQuoteService(serviceName);
    setIsQuoteModalOpen(true);
  };

  // Core EV Charging services
  const services = [
    {
      title: "Commercial Charging Hubs",
      description: "End-to-end installation of rapid and ultra-rapid charging facilities for public use and commercial fleet operations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: "#commercial-charging"
    },
    {
      title: "Workplace Charging",
      description: "Customised EV charging solutions for employee parking areas with smart load management.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: "#workplace-charging"
    },
    {
      title: "Residential Charging",
      description: "EV charging infrastructure for housing developments, apartment buildings and community schemes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      link: "#residential-charging"
    },
    {
      title: "Grid Connections & Upgrades",
      description: "Power infrastructure upgrades to facilitate high-capacity EV charging installations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      link: "#grid-connections"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(rgba(23, 63, 90, 0.85), rgba(16, 59, 88, 0.75)), url('/images/ev-charging.jpeg')",
        backgroundPosition: "center top"
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              EV Charging Infrastructure
            </h1>
            <p className="text-base md:text-xl mb-8">
              Future-proof electric vehicle charging solutions for businesses, residential developments, and public spaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => openQuoteModal("EV Charging Infrastructure")}
                className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90 transition-colors shadow-lg"
              >
                Request a Quote
              </button>
              <Link 
                href="#services"
                className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-6 text-brand-dark-blue">How We Work</h2>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  At HV Direct, we specialise in delivering comprehensive EV charging infrastructure solutions tailored to your specific requirements.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  As the UK transitions towards electric vehicles, reliable charging infrastructure is essential. We provide end-to-end EV charging solutions for commercial, residential and public sector applications.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  From initial feasibility studies to final commissioning, we handle all aspects of your EV charging project, including DNO applications, civil works, and electrical connections.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Commercial Fleets</span>
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Workplace Charging</span>
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Residential</span>
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Public Charging</span>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/contact"
                    className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-[#137DC5] text-white hover:bg-[#0f5f96] transition-colors shadow-md"
                  >
                    Contact Us
                  </Link>
                  <Link 
                    href="/faq"
                    className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white border border-[#137DC5] text-[#137DC5] hover:bg-[#137DC5]/5 transition-colors"
                  >
                    View FAQs
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/ev-charging.jpeg"
                  alt="EV Charging Infrastructure"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our EV Charging Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive electric vehicle charging solutions for all applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.link && (
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors"
                  >
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Charging Section */}
      <section id="commercial-charging" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/ev-charging.jpeg" 
                alt="Commercial EV Charging Hub" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
                Commercial Charging Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                We design and install high-capacity EV charging hubs for commercial operations, public charging networks, and fleet depots.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Our Commercial EV Charging Services Include:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Workplace charging facilities for employee vehicles</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Public charging installations for retail and leisure venues</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Commercial rapid charging hubs for public use</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Fleet depot charging infrastructure for businesses</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Smart charging systems with load management</span>
                </li>
              </ul>
              <button 
                onClick={() => openQuoteModal("Commercial EV Charging")}
                className="inline-flex items-center justify-center h-12 px-8 rounded-md text-sm font-medium bg-[#137DC5] text-white hover:bg-[#0f5f96] transition-colors"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#137DC5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to discuss your EV charging project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to help with your EV charging infrastructure needs. Get in touch today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90 transition-colors shadow-lg"
            >
              Contact Our Team
            </Link>
            <Link 
              href="/faq"
              className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              View Common Questions
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Request Modal */}
      <QuoteModal 
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        serviceName={quoteService}
      />
    </main>
  );
} 