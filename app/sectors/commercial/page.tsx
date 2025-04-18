"use client";

import React from "react";
import Link from "next/link";

export default function CommercialPage() {
  // Services specific to commercial connections
  const services = [
    {
      title: "Retail & Office Space",
      description: "Complete electrical infrastructure for retail parks, office buildings, and mixed-use commercial developments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      link: "/contact"
    },
    {
      title: "EV Charging Networks",
      description: "Commercial EV charging infrastructure for employee parking, customer use, or dedicated charging hubs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      link: "/new-connections/ev-charging-networks"
    },
    {
      title: "Substation Installation",
      description: "Design and installation of dedicated substations for commercial premises with high power requirements.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      link: "/new-connections/substation-installation"
    },
    {
      title: "Load Assessments & Upgrades",
      description: "Evaluate your existing electrical capacity and design upgrades to support business expansion or new equipment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
        </svg>
      ),
      link: "/contact"
    }
  ];

  // Case studies
  const caseStudies = [
    {
      title: "Retail Park Development",
      description: "Installation of a 3MVA supply for a new retail park including dedicated EV charging infrastructure for 50 vehicles.",
      category: "Retail",
      image: "/images/retail-park.jpg",
      link: "/case-studies"
    },
    {
      title: "Office Complex Upgrade",
      description: "Upgrade of an existing office complex with increased capacity to support modern workspace requirements and EV charging.",
      category: "Office",
      image: "/images/office-complex.jpg",
      link: "/case-studies"
    },
    {
      title: "Hotel & Leisure Development",
      description: "Supply and installation of a new connection for a luxury hotel and leisure complex, including backup generation facilities.",
      category: "Hospitality",
      image: "/images/hotel-development.jpg",
      link: "/case-studies"
    }
  ];

  // Frequently asked questions
  const faqs = [
    {
      question: "What is the typical lead time for commercial connections?",
      answer: "Commercial connection lead times vary based on scale and complexity. Smaller projects may take 6-8 weeks, while larger developments typically require 12-16 weeks. Factors like DNO response times and any necessary substation work will affect the overall timeline."
    },
    {
      question: "Can you work around our business operations during upgrades?",
      answer: "Yes, we specialise in minimising disruption to your business operations. For upgrades to existing premises, we can schedule work outside peak hours, utilise temporary supplies, and implement phased approaches to ensure business continuity throughout the project."
    },
    {
      question: "Do you provide energy efficiency recommendations for commercial sites?",
      answer: "Absolutely. Our design process includes energy efficiency considerations, and we can advise on the most efficient electrical infrastructure configuration for your specific commercial needs. This includes recommendations for low-energy equipment, smart building technologies, and renewable energy integration."
    },
    {
      question: "Can you handle multiple sites for chain businesses?",
      answer: "Yes, we have extensive experience working with businesses that operate across multiple locations. We can implement standardised electrical designs for consistency across your estate, manage concurrent projects, and coordinate with different regional DNOs as required."
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 bg-cover bg-center text-white" style={{ 
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
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90 transition-colors shadow-lg"
              >
                Discuss Your Project
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

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-6 text-brand-dark-blue">Commercial Electrical Infrastructure</h2>
                <div className="h-1 w-16 bg-[#137DC5] mb-8"></div>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  Commercial developments require reliable, high-capacity electrical connections to power operations efficiently and support future growth. 
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  At HV Direct, we understand the unique challenges of commercial electrical connections and deliver tailor-made solutions that meet the specific needs of retail, office, hospitality, and mixed-use developments.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  Our team of experienced engineers will work with you from initial concept to final energisation, ensuring your commercial project has the electrical capacity it needs, when it needs it.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Retail Parks</span>
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Office Developments</span>
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Hotels</span>
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Leisure Facilities</span>
                  <span className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium">Mixed-Use Sites</span>
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
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our Commercial Services
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Tailored electrical connection solutions for commercial developments of all types and sizes.
            </p>
          </div>

          {services.map((service, index) => (
            <div 
              key={index}
              className={`flex flex-col md:flex-row items-center gap-12 py-12 ${index !== 0 ? 'border-t border-gray-200' : ''}`}
            >
              <div className={`md:w-1/2 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <div className="relative h-64 md:h-80 rounded-xl overflow-hidden shadow-md">
                  <img
                    src={`/images/commercial-service-${index + 1}.jpg`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f5f96]/30 to-transparent"></div>
                </div>
              </div>
              <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-base md:text-lg text-gray-600 mb-6">{service.description}</p>
                <Link 
                  href={service.link}
                  className="inline-flex items-center px-5 py-2.5 rounded-md bg-[#137DC5] text-white font-medium hover:bg-[#0f5f96] transition-colors"
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Case Studies
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Examples of our commercial electrical infrastructure projects across various sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Link 
                href={study.link}
                key={index}
                className="group"
              >
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="h-56 overflow-hidden">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 bg-[#137DC5]/10 text-[#137DC5] rounded-md text-sm font-medium mb-4">
                      {study.category}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{study.title}</h3>
                    <p className="text-base md:text-lg text-gray-600 mb-4">{study.description}</p>
                    <span className="text-[#137DC5] font-medium flex items-center">
                      View case study
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

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Why Choose HV Direct for Commercial Projects
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive approach ensures your commercial development has the power it needs, delivered on time and within budget.
            </p>
          </div>

          <div className="relative">
            <div className="md:absolute md:inset-0 md:left-1/2 md:transform md:-translate-x-1/2 h-96 md:h-auto overflow-hidden z-0 mb-8 md:mb-0">
              <img 
                src="/images/commercial-benefits.jpg" 
                alt="Commercial electrical infrastructure" 
                className="w-full h-full object-cover rounded-xl md:rounded-none"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
            </div>
            
            <div className="md:grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative z-10">
              <div className="space-y-8">
                <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-md md:shadow-none">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#137DC5] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">High Capacity Solutions</h3>
                      <p className="text-base md:text-lg text-gray-600">
                        We design and deliver high-capacity electrical connections to meet the demanding power requirements of modern commercial developments.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-md md:shadow-none">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#137DC5] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Minimised Downtime</h3>
                      <p className="text-base md:text-lg text-gray-600">
                        Our efficient installation processes and careful planning minimise disruption to existing operations during upgrades or new connections.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8 mt-8 md:mt-0">
                <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-md md:shadow-none">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#137DC5] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                      <p className="text-base md:text-lg text-gray-600">
                        All our work is carried out to the highest standards, ensuring long-term reliability and reduced maintenance requirements.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white md:bg-transparent p-6 md:p-0 rounded-xl md:rounded-none shadow-md md:shadow-none">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#137DC5] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
                      <p className="text-base md:text-lg text-gray-600">
                        Our team has extensive experience in complex commercial electrical projects, providing expert advice at every stage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Answers to common questions about commercial electrical connections.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-6 bg-[#f9f9f9] rounded-xl p-6">
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
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Power Your Commercial Project?</h2>
          <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto text-white">
            Contact our team today to discuss your commercial electrical connection requirements and receive expert advice for your project.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90 transition-colors shadow-lg"
            >
              Discuss Your Project
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