"use client";

import React, { useState } from "react";
import Link from "next/link";
import QuoteModal from "@/app/components/QuoteModal";

export default function CommercialPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("Commercial Electrical Connection");
  
  // Function to open modal with specific service
  const openQuoteModal = (serviceName: string) => {
    setQuoteService(serviceName);
    setIsQuoteModalOpen(true);
  };

  // Core commercial services
  const services = [
    {
      title: "Retail & Office Space",
      description: "Complete electrical infrastructure for retail parks, office buildings, and mixed-use commercial developments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "EV Charging Networks",
      description: "Commercial EV charging infrastructure for employee parking, customer use, or dedicated charging hubs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: "#ev-charging"
    },
    {
      title: "Substation Installation",
      description: "Design and installation of dedicated substations for commercial premises with high power requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Load Assessments & Upgrades",
      description: "Evaluate your existing electrical capacity and design upgrades to support business expansion or new equipment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-14 md:py-20 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(rgba(23, 63, 90, 0.85), rgba(16, 59, 88, 0.75)), url('/images/commercial-hero.jpg')"
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Commercial Electrical Connections
            </h1>
            <p className="text-base md:text-xl mb-8">
              Powering businesses with reliable, future-proof electrical infrastructure designed for your specific commercial requirements.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => openQuoteModal("Commercial Electrical Connection")}
                className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90 transition-colors shadow-lg"
              >
                Discuss Your Project
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
                  At HV Direct, we specialise in providing straightforward and effective electrical connection solutions for commercial properties.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Our approach focuses on understanding your business needs and delivering reliable electrical infrastructure that supports your operations and growth.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  From initial design to final installation, we handle all aspects of your commercial electrical connection project, ensuring minimal disruption to your business.
                </p>
                
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Retail Parks</span>
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Office Developments</span>
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Hotels</span>
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Leisure Facilities</span>
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
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/commercial-1.jpg"
                    alt="Commercial electrical installation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/commercial-2.jpg"
                    alt="Retail park electrical infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/commercial-3.jpg"
                    alt="Office building electrical systems"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden">
                  <img
                    src="/images/commercial-4.jpg"
                    alt="Commercial substation installation"
                    className="w-full h-full object-cover"
                  />
                </div>
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
              Our Commercial Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored electrical connection solutions for commercial developments of all types and sizes.
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

      {/* EV Charging Networks Section */}
      <section id="ev-charging" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/ev-charging.jpeg" 
                alt="EV Charging Installation" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
                EV Charging Network Solutions
              </h2>
              <p className="text-gray-600 mb-6">
                As the UK transitions towards electric vehicles, reliable charging infrastructure is essential for businesses. We provide end-to-end EV charging solutions tailored to commercial requirements.
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
          <h2 className="text-3xl font-bold mb-6">Ready to discuss your commercial project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to help with your commercial electrical connection needs. Get in touch today for a consultation.
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