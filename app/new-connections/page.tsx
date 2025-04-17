"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function NewConnections() {
  // State for filtering services
  const [activeFilter, setActiveFilter] = useState("all");
  
  // Services data
  const services = [
    {
      id: "high-rise-residential",
      title: "High Rise Residential",
      description: "We design and construct electrical infrastructure for high-rise residential buildings, ensuring reliable power distribution.",
      category: "low-voltage",
      image: "/images/high-rise-residential.jpg",
      link: "/new-connections/high-rise-residential"
    },
    {
      id: "new-build-housing",
      title: "New Build Housing",
      description: "We provide electrical connections for new housing developments, from design to construction, ensuring efficient solutions.",
      category: "low-voltage",
      image: "/images/new-builds.jpg",
      link: "/new-connections/new-build-housing"
    },
    {
      id: "ev-charging-networks",
      title: "EV Charging Networks",
      description: "We design and install EV charging infrastructure for residential settings to large-scale commercial fleets and transport hubs.",
      category: "both",
      image: "/images/ev-charging.jpeg",
      link: "/new-connections/ev-charging-networks"
    },
    {
      id: "diversions",
      title: "Diversions and Reinforcements",
      description: "We handle diversions and reinforcements at both low and high voltage, ensuring existing infrastructure can accommodate new developments.",
      category: "both",
      image: "/images/diversions-reinforcement.webp",
      link: "/new-connections/diversions"
    },
    {
      id: "substation-installation",
      title: "Substation Installation",
      description: "We design and construct high-voltage substations (up to 11kV), ensuring they meet all regulatory and safety standards.",
      category: "high-voltage",
      image: "/images/substation.jpg",
      link: "/new-connections/substation-installation"
    }
  ];

  // Filter services based on active filter
  const filteredServices = activeFilter === "all" 
    ? services 
    : activeFilter === "both" 
      ? services.filter(service => service.category === "both")
      : services.filter(service => service.category === activeFilter || service.category === "both");

  return (
    <main className="min-h-screen">
      {/* Utility styles for mobile optimization */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        @media (max-width: 768px) {
          .container {
            padding-left: 16px;
            padding-right: 16px;
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        
        .service-card {
          transition: all 0.3s ease;
        }
        
        .service-card:hover {
          transform: translateY(-5px);
        }
        
        .text-gradient {
          background: linear-gradient(to right, #0f5f96, #2199ea);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>
      
      {/* Interactive Hero Banner */}
      <section className="relative min-h-[50vh] md:min-h-[60vh] flex items-center bg-cover bg-center overflow-hidden">
        {/* Background video/image with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/new-connections-main.jpg')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f5f96]/70 to-[#137DC5]/50"></div>
        </div>
        
        {/* Hero content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-xl border border-white/20">
              <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Electrical Connection Services
              </h1>
              <p className="text-lg md:text-xl text-white mb-8 max-w-2xl">
                From design to installation, we provide reliable and efficient electrical connections for projects of all sizes, built to the highest standards.
              </p>
              
              {/* Service quick links */}
              <div className="flex flex-wrap gap-3 mt-8">
                <Link
                  href="#low-voltage"
                  className="px-4 py-2 bg-white text-[#0f5f96] rounded-full text-sm font-medium hover:bg-[#f5f5f5] transition-colors"
                >
                  Low Voltage Services
                </Link>
                <Link
                  href="#high-voltage"
                  className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors"
                >
                  High Voltage Services
                </Link>
                <Link
                  href="#contact"
                  className="px-4 py-2 bg-[#137DC5] text-white rounded-full text-sm font-medium hover:bg-[#0f5f96] transition-colors"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Connecting Services Visual Element - Fixed arrow position */}
      <div className="relative h-24 overflow-hidden bg-gradient-to-r from-[#f5f5f5] via-white to-[#f5f5f5]">
        <div className="absolute left-1/2 top-6 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center">
          <div className="w-6 h-6 text-[#137DC5]">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
        
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#137DC5]/30 to-transparent"></div>
      </div>

      {/* Services Section with Interactive Filtering - Redesigned to be less blocky */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {/* Service intro section with smoother layout */}
          <div className="max-w-4xl mx-auto mb-16 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
              Our Connection Services
            </h2>
            <div className="h-1 w-16 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              We offer a comprehensive range of electrical connection solutions to meet the diverse needs of residential, commercial and industrial projects.
            </p>
          </div>

          {/* Category tags with lighter design */}
          <div id="low-voltage" className="scroll-mt-24"></div>
          <div id="high-voltage" className="scroll-mt-24"></div>

          {/* Interactive Filter Pills - More compact and elegant */}
          <div className="mb-10 flex justify-center">
            <div className="inline-flex p-1 bg-[#f5f5f5] rounded-full shadow-sm">
              <button 
                onClick={() => setActiveFilter("all")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === "all" 
                    ? "bg-[#137DC5] text-white shadow-sm" 
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                All Services
              </button>
              <button 
                onClick={() => setActiveFilter("low-voltage")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === "low-voltage" 
                    ? "bg-[#137DC5] text-white shadow-sm" 
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                Low Voltage
              </button>
              <button 
                onClick={() => setActiveFilter("high-voltage")}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === "high-voltage" 
                    ? "bg-[#137DC5] text-white shadow-sm" 
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                High Voltage
              </button>
            </div>
          </div>

          {/* Services Grid with more fluid design */}
          <div className="max-w-screen-xl mx-auto">
            {/* Services overview cards for each category */}
            {activeFilter === "all" && (
              <div className="mb-12">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gradient-to-br from-[#0f5f96]/10 to-[#137DC5]/5 rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-[#0f5f96]">Low Voltage Services</h3>
                    <p className="text-gray-600 mb-4 text-base md:text-lg">
                      Our low voltage connection services are designed to deliver reliable, cost-effective electrical infrastructure for residential and commercial developments.
                    </p>
                    <button 
                      onClick={() => setActiveFilter("low-voltage")}
                      className="text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors flex items-center"
                    >
                      View services
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[#0f5f96]/10 to-[#137DC5]/5 rounded-2xl p-6 md:p-8">
                    <h3 className="text-2xl font-semibold mb-4 text-[#0f5f96]">High Voltage Services</h3>
                    <p className="text-gray-600 mb-4 text-base md:text-lg">
                      HV Direct specialises in high voltage connections, providing robust and efficient solutions for larger commercial and industrial projects.
                    </p>
                    <button 
                      onClick={() => setActiveFilter("high-voltage")}
                      className="text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors flex items-center"
                    >
                      View services
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Services List - Redesigned with fluid cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredServices.map((service) => (
                <Link
                  key={service.id}
                  href={service.link}
                  className="group service-card rounded-xl overflow-hidden flex flex-col"
                >
                  {/* Image container with smoother design */}
                  <div className="relative pt-[56%] overflow-hidden">
                    <img 
                      src={service.image}
                      alt={service.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Improved overlay with cleaner text legibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#000]/70 via-[#000]/30 to-transparent opacity-80 group-hover:opacity-50 transition-opacity"></div>
                    
                    {/* Title and category display - more elegant */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                      {service.category === "both" ? (
                        <div className="flex space-x-2 mb-2">
                          <div className="inline-block px-3 py-1 bg-[#137DC5] text-white text-xs font-medium rounded-full">
                            Low Voltage
                          </div>
                          <div className="inline-block px-3 py-1 bg-[#0f5f96] text-white text-xs font-medium rounded-full">
                            High Voltage
                          </div>
                        </div>
                      ) : (
                        <div className="inline-block mb-2 px-3 py-1 bg-[#137DC5] text-white text-xs font-medium rounded-full">
                          {service.category === "low-voltage" ? "Low Voltage" : "High Voltage"}
                        </div>
                      )}
                      <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                  
                  {/* Content preview on hover */}
                  <div className="bg-white border border-gray-100 p-5 flex-grow flex flex-col">
                    <p className="text-gray-600 mb-4 text-base md:text-lg">{service.description}</p>
                    <div className="mt-auto inline-flex items-center text-[#137DC5] font-medium group-hover:text-[#0f5f96] transition-colors">
                      Learn more
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section - Enhanced with lighter design */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
              Why Choose HV Direct?
            </h2>
            <div className="h-1 w-16 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-gray-600 text-base md:text-lg">
              We deliver high-quality electrical connections with a focus on quality, safety and reliability.
            </p>
          </div>
          
          {/* Feature highlights with more flowing design */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
                title: "Fast Turnaround",
                description: "We work efficiently to minimise disruption and deliver your connections on schedule."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Quality Assured",
                description: "All our work meets or exceeds industry standards, with rigorous quality control."
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Competitive Pricing",
                description: "Transparent, fair pricing with no hidden costs or unexpected fees."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm relative overflow-hidden group hover:shadow-md transition-all"
              >
                {/* More subtle animated background */}
                <div className="absolute -right-16 -top-16 w-32 h-32 bg-[#137DC5]/5 rounded-full group-hover:scale-[2.5] transition-transform duration-500 ease-out"></div>
                
                <div className="relative z-10">
                  <div className="text-[#137DC5] mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-base md:text-lg">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section with more flowing design */}
      <section id="contact" className="py-16 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-[#0f5f96] to-[#137DC5] rounded-3xl overflow-hidden">
            <div className="md:flex">
              {/* Left Image with improved styling */}
              <div className="hidden md:block md:w-2/5 relative">
                <div className="absolute inset-0 bg-[#0f5f96]/20 z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80" 
                  alt="Electrical connections" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
                
                {/* Decorative elements */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0f5f96] to-transparent z-20"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                  <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Right Content with improved styling */}
            <div className="md:w-3/5 p-8 md:p-12 text-white">
                <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
                <p className="text-white/90 mb-8 max-w-md text-base md:text-lg">
                  Contact our specialists today to discuss your electrical connection requirements and get a customised quote for your project.
                </p>
                
                {/* Contact cards with more fluid design */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                  <a href="mailto:info@hvdirect.co.uk" className="group bg-white/10 hover:bg-white/15 rounded-xl p-5 backdrop-blur-sm transition-colors flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/70 mb-1">Email us</div>
                      <span className="text-white text-lg group-hover:underline">info@hvdirect.co.uk</span>
                    </div>
                  </a>
                  
                  <a href="tel:08001234567" className="group bg-white/10 hover:bg-white/15 rounded-xl p-5 backdrop-blur-sm transition-colors flex items-center gap-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-white/70 mb-1">Call us</div>
                      <span className="text-white text-lg group-hover:underline">0800 123 4567</span>
                    </div>
                  </a>
                </div>
                
                {/* Action buttons with improved styling */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-[#0f5f96] font-medium rounded-lg hover:bg-white/90 transition-all shadow-lg shadow-[#0f5f96]/20"
                  >
                    Get in Touch
                  </Link>
                  <Link
                    href="#services"
                    className="inline-flex items-center justify-center px-6 py-3 border border-white text-white font-medium rounded-lg hover:bg-white/10 transition-colors"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 