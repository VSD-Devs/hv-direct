"use client";

import React, { useState } from "react";
import Link from "next/link";
import QuoteModal from "@/app/components/QuoteModal";

export default function ResidentialPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("Residential Electrical Connection");
  
  // Function to open modal with specific service
  const openQuoteModal = (serviceName: string) => {
    setQuoteService(serviceName);
    setIsQuoteModalOpen(true);
  };

  // Core residential services overview
  const services = [
    {
      title: "New Build Housing",
      description: "Complete electrical infrastructure for housing developments, from single properties to large estates.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      link: "#new-build-housing"
    },
    {
      title: "High-Rise Residential",
      description: "Specialised electrical solutions for apartment buildings and high-rise residential developments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: "#high-rise-residential"
    },
    {
      title: "EV Charging Infrastructure",
      description: "Future-proof residential EV charging solutions, from single point installations to community charging hubs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Electrical Upgrades",
      description: "Upgrade existing residential electrical infrastructure to meet modern demands and regulations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(rgba(23, 63, 90, 0.85), rgba(16, 59, 88, 0.75)), url('/images/residential-new-connection.png')",
        backgroundPosition: "center top"
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Residential Electrical Connections
            </h1>
            <p className="text-base md:text-xl mb-8">
              We provide complete electrical infrastructure solutions for residential developments of all sizes, from single homes to large housing estates.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => openQuoteModal("Residential Electrical Connection")}
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
                  At HV Direct, we provide straightforward residential electrical connection services with a focus on reliability and customer satisfaction.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Our approach is simple: we deliver high-quality electrical infrastructure for residential developments on time and within budget.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  From initial consultation to final connection, we handle all aspects of your project, including design, DNO applications, and installation.
                </p>
                
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
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
                  src="/images/residential-overview.jpg"
                  alt="Residential electrical connection"
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
              Our Residential Services
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrical infrastructure solutions tailored to residential developments.
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

      {/* New Build Housing Section */}
      <section id="new-build-housing" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/new-builds.jpg" 
                alt="New Build Housing Development" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
                New Build Housing Connections
              </h2>
              <p className="text-gray-600 mb-6">
                We specialise in designing, installing and connecting electrical infrastructure for new housing developments throughout the UK. From small plots to major residential schemes, we deliver reliable power solutions that meet the needs of modern homes.
              </p>
              <p className="text-gray-600 mb-6">
                Our team works closely with developers, architects and contractors to ensure seamless coordination with your build programme and minimal disruption to your project timeline.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Complete solution from design to energisation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Designed to accommodate EV charging and renewable energy systems</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Coordination with other utility providers to minimise disruption</span>
                </li>
              </ul>
              <button 
                onClick={() => openQuoteModal("New Build Housing Connection")}
                className="inline-flex items-center justify-center h-12 px-8 rounded-md text-sm font-medium bg-[#137DC5] text-white hover:bg-[#0f5f96] transition-colors"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* High Rise Residential Section */}
      <section id="high-rise-residential" className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
                High-Rise Residential Connections
              </h2>
              <p className="text-gray-600 mb-6">
                HV Direct specialises in designing, installing and maintaining high-quality electrical connections for high-rise residential buildings across the UK. 
              </p>
              <p className="text-gray-600 mb-6">
                Our tailored solutions ensure that residents have constant, reliable power whilst property managers benefit from infrastructure that's built to last with minimal ongoing maintenance.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Purpose-built solutions for buildings of 5+ storeys</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Fully compliant with UK building regulations and electrical standards</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Future-proofed design that accommodates EV charging and renewable integration</span>
                </li>
              </ul>
              <button 
                onClick={() => openQuoteModal("High-Rise Residential Connection")}
                className="inline-flex items-center justify-center h-12 px-8 rounded-md text-sm font-medium bg-[#137DC5] text-white hover:bg-[#0f5f96] transition-colors"
              >
                Request a Quote
              </button>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img 
                src="/images/high-rise-residential.jpg" 
                alt="High Rise Residential Building" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#137DC5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to discuss your residential project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to help with your electrical connection needs. Get in touch today for a free consultation.
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