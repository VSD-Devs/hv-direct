"use client";

import React, { useState } from "react";
import Link from "next/link";
import QuoteModal from "@/app/components/QuoteModal";

export default function SectorsPage() {
  // State for quote modal
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState("Electrical Connection");
  
  // Function to open modal with specific service
  const openQuoteModal = (serviceName: string) => {
    setQuoteService(serviceName);
    setIsQuoteModalOpen(true);
  };
  
  // Available sectors
  const sectors = [
    {
      title: "Residential",
      description: "Complete electrical infrastructure solutions for residential developments, from single homes to large housing estates.",
      image: "/images/housing-development.webp",
      link: "/sectors/residential",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Commercial",
      description: "Reliable electrical infrastructure for retail, office, and mixed-use commercial developments.",
      image: "/images/commercial-hotel.jpg",
      link: "/sectors/commercial",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Industrial",
      description: "High-capacity electrical connections designed for manufacturing, warehousing, and industrial facilities.",
      image: "/images/industrial-electric.webp",
      link: "/sectors/industrial",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

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
      
      {/* Hero Section */}
      <section className="relative py-14 md:py-20 bg-cover bg-center text-white">
        {/* Background image with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('/images/sectors-city.webp')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f5f96]/80 to-[#137DC5]/80"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Solutions by Sector
            </h1>
            <p className="text-base md:text-xl mb-8">
              Tailored electrical infrastructure solutions for residential, commercial, and industrial projects across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-brand-dark-blue">Sector-Specific Solutions</h2>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              Every electrical project has unique requirements based on its sector and purpose. At HV Direct, we understand these nuances and provide specialised solutions tailored to each sector's specific needs.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Our sector-focused expertise ensures your project receives the most appropriate electrical infrastructure, delivered by specialists with deep understanding of your industry's challenges and opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Sectors Grid Section */}
      <section className="py-14 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">Explore by Sector</h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Choose your sector to discover tailored electrical infrastructure solutions for your specific industry needs.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <Link 
                href={sector.link}
                key={index}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div className="h-64 overflow-hidden">
                    <img
                      src={sector.image}
                      alt={`${sector.title} electrical connections`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-8">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                      {sector.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{sector.title} Connections</h3>
                    <p className="text-base md:text-lg text-gray-600 mb-6">{sector.description}</p>
                    <span className="text-[#137DC5] font-medium flex items-center">
                      Explore {sector.title} Solutions
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose HV Direct Section */}
      <section className="py-14 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Why Choose HV Direct for Your Project
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our sector-specific approach ensures your electrical infrastructure perfectly matches your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl hover:shadow-md transition-shadow h-full">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Sector Expertise</h3>
              <p className="text-base md:text-lg text-gray-600">Our specialists understand the unique requirements and regulations of each sector.</p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl hover:shadow-md transition-shadow h-full">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Timely Delivery</h3>
              <p className="text-base md:text-lg text-gray-600">We understand sector-specific schedules and deliver on time, every time.</p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl hover:shadow-md transition-shadow h-full">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-base md:text-lg text-gray-600">All our work exceeds industry standards and meets sector-specific quality requirements.</p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl hover:shadow-md transition-shadow h-full">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast Turnaround</h3>
              <p className="text-base md:text-lg text-gray-600">We ensure a swift and efficient process to deliver your connections on schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-14 bg-gradient-to-r from-[#0f5f96] to-[#2199ea] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Project?</h2>
          <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto text-white">
            Contact our specialists today to discuss your electrical connection requirements and get a customised quote for your project.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              onClick={() => openQuoteModal("Electrical Connection")}
              className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90 transition-colors shadow-lg"
            >
              Get a Quote
            </button>
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Contact Us
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