"use client";

import React from "react";
import Link from "next/link";

export default function IndustrialPage() {
  // Key solutions for industrial connections
  const solutions = [
    {
      title: "High Voltage Installations",
      description: "Design and installation of HV infrastructure for industrial sites, including substations and switchgear.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
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
      title: "Energy Management",
      description: "Intelligent energy distribution and monitoring systems to optimise industrial power consumption.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      )
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

  // Industrial sectors served
  const sectors = [
    {
      name: "Manufacturing",
      description: "Electrical infrastructure for manufacturing facilities of all sizes, from light assembly to heavy industry.",
      icon: "/images/manufacturing-icon.svg"
    },
    {
      name: "Warehousing & Logistics",
      description: "Power solutions for automated warehouses, distribution centres, and logistics hubs.",
      icon: "/images/warehouse-icon.svg"
    },
    {
      name: "Food Production",
      description: "Specialized electrical connections for food processing facilities with compliance to industry standards.",
      icon: "/images/food-icon.svg"
    },
    {
      name: "Data Centres",
      description: "Critical power infrastructure for data centres requiring high reliability and redundancy.",
      icon: "/images/data-icon.svg"
    },
    {
      name: "Pharmaceuticals",
      description: "Electrical systems for pharmaceutical manufacturing with focus on compliance and reliability.",
      icon: "/images/pharma-icon.svg"
    },
    {
      name: "Renewable Energy",
      description: "Connection solutions for renewable energy production facilities and grid integration.",
      icon: "/images/renewable-icon.svg"
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-cover bg-center text-white" style={{ 
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
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90 transition-colors shadow-lg"
              >
                Discuss Your Requirements
              </Link>
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

      {/* Introduction Section */}
      <section className="py-20 bg-white">
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
                <h2 className="text-3xl font-bold mb-6 text-brand-dark-blue">Powering Industrial Excellence</h2>
                <div className="h-1 w-16 bg-[#137DC5] mb-8"></div>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Industrial facilities demand robust, reliable electrical infrastructure that can handle high power loads and ensure continuous operations. 
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  At HV Direct, we specialise in the design and delivery of electrical connections that meet the specific demands of industrial clients across manufacturing, logistics, food production, and more.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  Our team understands the critical nature of industrial power supplies, providing solutions that minimise downtime, ensure regulatory compliance, and support your operational goals.
                </p>
                <ul className="space-y-3">
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
                    <span className="ml-3 text-base md:text-lg text-gray-700">Substation and HV infrastructure</span>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 text-[#137DC5]">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="ml-3 text-base md:text-lg text-gray-700">Backup power and resilience planning</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our Industrial Solutions
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrical infrastructure solutions tailored to industrial requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-base md:text-lg text-gray-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Industries We Serve
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our expertise spans across multiple industrial sectors, providing tailored electrical solutions for each unique requirement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="bg-[#f9f9f9] p-8 rounded-xl hover:shadow-md transition-shadow h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-full bg-[#137DC5]/10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">{sector.name}</h3>
                </div>
                <p className="text-base md:text-lg text-gray-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our Industrial Connection Process
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to ensure your industrial electrical project is delivered efficiently and to the highest standards.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process steps */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white rounded-xl shadow-sm p-8 h-full relative">
                  <div className="absolute -top-4 -left-4 h-10 w-10 bg-[#137DC5] rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <h3 className="text-xl font-semibold mb-4 pt-2">Assessment & Planning</h3>
                  <p className="text-base md:text-lg text-gray-600">We evaluate your industrial facility's power requirements and develop a detailed implementation plan.</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-8 h-full relative">
                  <div className="absolute -top-4 -left-4 h-10 w-10 bg-[#137DC5] rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <h3 className="text-xl font-semibold mb-4 pt-2">Design & Engineering</h3>
                  <p className="text-base md:text-lg text-gray-600">Our engineers create a comprehensive electrical infrastructure design tailored to your specific requirements.</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-8 h-full relative">
                  <div className="absolute -top-4 -left-4 h-10 w-10 bg-[#137DC5] rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <h3 className="text-xl font-semibold mb-4 pt-2">Implementation</h3>
                  <p className="text-base md:text-lg text-gray-600">Our skilled team implements the electrical infrastructure with minimal disruption to ongoing operations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Benefits of Working With HV Direct
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Why leading industrial businesses choose us for their electrical connection needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Certified Expertise</h3>
              <p className="text-base md:text-lg text-gray-600">NERS-accredited team with specialised industrial experience.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Minimal Downtime</h3>
              <p className="text-base md:text-lg text-gray-600">Implementation strategies designed to minimise operational disruption.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Single Point of Contact</h3>
              <p className="text-base md:text-lg text-gray-600">Dedicated project management throughout your entire project.</p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center h-20 w-20 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
              <p className="text-base md:text-lg text-gray-600">All work complies with relevant regulations and industry standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#0f5f96] to-[#2199ea] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Discuss Your Industrial Power Needs?</h2>
          <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto text-white">
            Contact our team today to arrange a consultation and site assessment for your industrial electrical connection requirements.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90 transition-colors shadow-lg"
            >
              Contact Our Industrial Team
            </Link>
            <Link 
              href="/new-connections"
              className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Explore More Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}