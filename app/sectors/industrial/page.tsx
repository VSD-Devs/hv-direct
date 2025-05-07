"use client";

import React, { useState } from "react";
import Link from "next/link";
import QuoteModal from "@/app/components/QuoteModal";

export default function IndustrialPage() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("Industrial Electrical Connection");
  
  // Function to open modal with specific service
  const openQuoteModal = (serviceName: string) => {
    setQuoteService(serviceName);
    setIsQuoteModalOpen(true);
  };

  // Core industrial solutions
  const solutions = [
    {
      title: "High Voltage Installations",
      description: "Design and installation of HV infrastructure for industrial sites, including substations and switchgear.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: "#substation-installation"
    },
    {
      title: "Heavy Machinery Power",
      description: "Electrical connections designed specifically for high-load industrial machinery and manufacturing equipment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    },
    {
      title: "Diversions & Reinforcements",
      description: "Management of existing electrical infrastructure that needs to be modified or reinforced to accommodate industrial demands.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      ),
      link: "#diversions-reinforcements"
    },
    {
      title: "Capacity Upgrades",
      description: "Audit and upgrade existing electrical infrastructure to support expanded operations or new equipment.",
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
      <section className="relative py-14 md:py-20 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(rgba(23, 63, 90, 0.85), rgba(16, 59, 88, 0.75)), url('/images/industrial-hero.jpg')"
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Industrial Electrical Connections
            </h1>
            <p className="text-base md:text-xl mb-8">
              Robust, reliable electrical infrastructure designed for the demanding requirements of industrial operations.
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => openQuoteModal("Industrial Electrical Connection")}
                className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90 transition-colors shadow-lg"
              >
                Discuss Your Requirements
              </button>
              <Link 
                href="#solutions"
                className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
              >
                Explore Solutions
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
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/industrial-main.jpg"
                  alt="Industrial electrical infrastructure"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f5f96]/30 to-transparent"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-6 text-brand-dark-blue">How We Work</h2>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  At HV Direct, we provide straightforward and effective electrical solutions for industrial facilities with a focus on reliability and performance.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Our approach is centered on understanding your industrial power requirements and delivering robust infrastructure that can handle high loads and ensure operational continuity.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  From substations to energy management systems, we deliver complete electrical solutions that support your industrial operations and future growth.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#137DC5]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-base md:text-lg text-gray-700">High-capacity connection design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#137DC5]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-base md:text-lg text-gray-700">End-to-end project management</span>
                  </li>
                </ul>
                
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
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our Industrial Solutions
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrical infrastructure solutions tailored to industrial requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="inline-flex items-center justify-center h-14 w-14 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">{solution.title}</h3>
                <p className="text-gray-600 mb-4">{solution.description}</p>
                {solution.link && (
                  <Link 
                    href={solution.link}
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

      {/* Substation Installation Section */}
      <section id="substation-installation" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="/images/substation.jpg" 
                alt="Substation Installation" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
                Substation Installation
              </h2>
              <p className="text-gray-600 mb-6">
                HV Direct designs and constructs high-voltage substations (up to 11kV), ensuring they meet all regulatory and safety standards for optimal performance in industrial settings.
              </p>
              <p className="text-gray-600 mb-6">
                Our substations are designed to deliver reliable power for high-demand industrial operations, with robust components and future-proof configurations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Complete design and construction of industrial substations</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">High-capacity substations for manufacturing and processing facilities</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Full compliance with industry regulations and safety standards</span>
                </li>
              </ul>
              <button 
                onClick={() => openQuoteModal("Substation Installation")}
                className="inline-flex items-center justify-center h-12 px-8 rounded-md text-sm font-medium bg-[#137DC5] text-white hover:bg-[#0f5f96] transition-colors"
              >
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Diversions and Reinforcements Section */}
      <section id="diversions-reinforcements" className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2 order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
                Diversions and Reinforcements
              </h2>
              <p className="text-gray-600 mb-6">
                As industrial infrastructure expands and evolves, existing electrical networks often need to be diverted or reinforced. We provide these essential services across both low and high voltage networks.
              </p>
              <p className="text-gray-600 mb-6">
                Our comprehensive approach begins with thorough network analysis and design, followed by efficient project execution with minimal disruption to existing operations.
              </p>

              <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Our Industrial Diversion Services Include:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">Relocation of HV overhead lines or underground cables</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">Reinforcement of existing HV networks for increased capacity</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-5 w-5 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-gray-600">Strategic diversions to facilitate major development projects</span>
                  </li>
                </ul>
              </div>

              <button 
                onClick={() => openQuoteModal("Industrial Diversions and Reinforcements")}
                className="inline-flex items-center justify-center h-12 px-8 rounded-md text-sm font-medium bg-[#137DC5] text-white hover:bg-[#0f5f96] transition-colors"
              >
                Request a Quote
              </button>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <img 
                src="/images/diversions-reinforcement.webp" 
                alt="Diversions and Reinforcements" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Simplified */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Industries We Serve
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="bg-[#f5f5f5] p-4 rounded-lg text-center">
              <h3 className="font-semibold text-[#137DC5]">Manufacturing</h3>
            </div>
            <div className="bg-[#f5f5f5] p-4 rounded-lg text-center">
              <h3 className="font-semibold text-[#137DC5]">Warehousing</h3>
            </div>
            <div className="bg-[#f5f5f5] p-4 rounded-lg text-center">
              <h3 className="font-semibold text-[#137DC5]">Food Production</h3>
            </div>
            <div className="bg-[#f5f5f5] p-4 rounded-lg text-center">
              <h3 className="font-semibold text-[#137DC5]">Data Centres</h3>
            </div>
            <div className="bg-[#f5f5f5] p-4 rounded-lg text-center">
              <h3 className="font-semibold text-[#137DC5]">Pharmaceuticals</h3>
            </div>
            <div className="bg-[#f5f5f5] p-4 rounded-lg text-center">
              <h3 className="font-semibold text-[#137DC5]">Renewable Energy</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#137DC5] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to discuss your industrial project?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is here to help with your industrial electrical needs. Get in touch today for a free consultation.
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