"use client";

import React from "react";
import Link from "next/link";

export default function ResidentialPage() {
  // Services specific to residential connections
  const services = [
    {
      title: "New Build Housing",
      description: "Complete electrical infrastructure for housing developments, from single properties to large estates.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      link: "/new-connections/new-build-housing"
    },
    {
      title: "High-Rise Residential",
      description: "Specialised electrical solutions for apartment buildings and high-rise residential developments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: "/new-connections/high-rise-residential"
    },
    {
      title: "EV Charging Infrastructure",
      description: "Future-proof residential EV charging solutions, from single point installations to community charging hubs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: "/new-connections/ev-charging-networks"
    },
    {
      title: "Electrical Upgrades",
      description: "Upgrade existing residential electrical infrastructure to meet modern demands and regulations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
      link: "/contact"
    }
  ];

  // Frequently asked questions
  const faqs = [
    {
      question: "How long does a residential connection typically take?",
      answer: "The timeline for residential connections varies based on project complexity. Simple connections may take 4-6 weeks, while larger developments can take 8-12 weeks or more. We provide detailed timeframes during the initial consultation."
    },
    {
      question: "What permissions are needed for residential electrical connections?",
      answer: "Residential connections typically require planning permission, DNO approval, and possibly wayleave agreements if the connection crosses third-party land. Our team handles all necessary paperwork and applications on your behalf."
    },
    {
      question: "Can you work with our construction schedule?",
      answer: "Absolutely. We coordinate closely with your construction team to ensure electrical infrastructure work aligns with your build schedule, minimising disruption and avoiding delays to your overall project timeline."
    },
    {
      question: "Do you handle both temporary and permanent connections?",
      answer: "Yes, we provide both temporary construction supplies and permanent connections for residential projects, ensuring you have power when you need it throughout the development process."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(rgba(23, 63, 90, 0.85), rgba(16, 59, 88, 0.75)), url('/images/residential-hero.jpg')"
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
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90 transition-colors shadow-lg"
              >
                Request a Quote
              </Link>
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

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Why Choose HV Direct for Residential Projects
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We understand the unique challenges of residential developments and provide tailored solutions that ensure reliable power delivery on time and within budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#f9f9f9] p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Timely Delivery</h3>
              <p className="text-base md:text-lg text-gray-600">We understand that delays cost money. Our efficient processes ensure your electrical connections are completed on schedule.</p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
              <p className="text-base md:text-lg text-gray-600">All our installations exceed industry standards, ensuring long-term reliability and minimal maintenance requirements.</p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Cost Effective</h3>
              <p className="text-base md:text-lg text-gray-600">Our efficient designs and streamlined processes help reduce costs without compromising on quality or reliability.</p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Future-Proof Design</h3>
              <p className="text-base md:text-lg text-gray-600">We design with future demands in mind, accounting for EV charging requirements and increased household electrical consumption.</p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">End-to-End Service</h3>
              <p className="text-base md:text-lg text-gray-600">From initial design to final connection, we manage the entire process, providing a single point of contact throughout the project.</p>
            </div>

            <div className="bg-[#f9f9f9] p-8 rounded-xl hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-4">Regulatory Compliance</h3>
              <p className="text-base md:text-lg text-gray-600">We handle all necessary permissions, approvals and compliance requirements, ensuring your project meets all regulatory standards.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our Residential Services
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive electrical infrastructure solutions tailored to residential developments of all sizes.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link 
                href={service.link}
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
              >
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">{service.description}</p>
                <div className="mt-auto">
                  <span className="text-[#137DC5] font-medium flex items-center">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Project Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our Residential Connection Process
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              A streamlined approach to ensure your project is delivered efficiently and to the highest standards.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Process timeline */}
              <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-[#137DC5]/20 transform md:-translate-x-1/2"></div>
              
              {/* Steps */}
              <div className="relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col md:flex-row items-start mb-12">
                  <div className="flex items-center md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-10 md:pl-0">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">Initial Consultation</h3>
                      <p className="text-base md:text-lg text-gray-600">We discuss your requirements, timelines and budget to understand the full scope of your residential project.</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 top-0 w-10 h-10 bg-[#137DC5] rounded-full border-4 border-white shadow transform md:-translate-x-1/2 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2 invisible md:visible">
                    {/* Right side empty for the first step in desktop view */}
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="flex flex-col md:flex-row items-start mb-12">
                  <div className="md:w-1/2 md:pr-12 invisible md:visible order-2 md:order-1">
                    {/* Left side empty for the second step in desktop view */}
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 top-[110px] w-10 h-10 bg-[#137DC5] rounded-full border-4 border-white shadow transform md:-translate-x-1/2 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  
                  <div className="flex items-center md:w-1/2 md:pl-12 order-1 md:order-2 pl-10 md:pl-12">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">Design & Quotation</h3>
                      <p className="text-base md:text-lg text-gray-600">Our engineers create a detailed design and provide a comprehensive, transparent quotation for your approval.</p>
                    </div>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="flex flex-col md:flex-row items-start mb-12">
                  <div className="flex items-center md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-10 md:pl-0">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">Permissions & Approvals</h3>
                      <p className="text-base md:text-lg text-gray-600">We handle all necessary applications, DNO liaison, and regulatory requirements on your behalf.</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 top-[220px] w-10 h-10 bg-[#137DC5] rounded-full border-4 border-white shadow transform md:-translate-x-1/2 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2 invisible md:visible">
                    {/* Right side empty for the third step in desktop view */}
                  </div>
                </div>
                
                {/* Step 4 */}
                <div className="flex flex-col md:flex-row items-start mb-12">
                  <div className="md:w-1/2 md:pr-12 invisible md:visible order-2 md:order-1">
                    {/* Left side empty for the fourth step in desktop view */}
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 top-[330px] w-10 h-10 bg-[#137DC5] rounded-full border-4 border-white shadow transform md:-translate-x-1/2 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  
                  <div className="flex items-center md:w-1/2 md:pl-12 order-1 md:order-2 pl-10 md:pl-12">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">Installation</h3>
                      <p className="text-base md:text-lg text-gray-600">Our skilled engineers complete the installation in line with your construction schedule, minimising disruption.</p>
                    </div>
                  </div>
                </div>
                
                {/* Step 5 */}
                <div className="flex flex-col md:flex-row items-start">
                  <div className="flex items-center md:w-1/2 md:pr-12 md:text-right order-2 md:order-1 pl-10 md:pl-0">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">Energisation & Handover</h3>
                      <p className="text-base md:text-lg text-gray-600">We coordinate with the DNO for final connection, complete testing, and provide full handover documentation.</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-0 md:left-1/2 top-[440px] w-10 h-10 bg-[#137DC5] rounded-full border-4 border-white shadow transform md:-translate-x-1/2 flex items-center justify-center text-white font-bold">
                    5
                  </div>
                  
                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2 invisible md:visible">
                    {/* Right side empty for the fifth step in desktop view */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Answers to common questions about residential electrical connections.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">{faq.question}</h3>
                <p className="text-base md:text-lg text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-[#0f5f96] to-[#2199ea] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Start Your Residential Project?</h2>
          <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto text-white">
            Contact our team today to discuss your requirements and receive a free, no-obligation quote for your residential electrical connection.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90 transition-colors shadow-lg"
            >
              Request a Quote
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