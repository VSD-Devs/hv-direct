"use client";

import React from "react";
import Link from "next/link";

export default function HighRiseResidential() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/new-connections" 
              className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#1a1a1a]">
              High-Rise Residential Connections
            </h1>
            <div className="h-1 w-24 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 mb-8">
              Reliable and efficient electrical infrastructure for residential tower blocks and apartment complexes
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&q=80&w=1600" 
                alt="High Rise Residential Building" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
                Powering Modern Vertical Communities
              </h2>
              <div className="h-1 w-16 bg-[#137DC5] mb-6"></div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
              Our Process
            </h2>
            <div className="h-1 w-16 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-gray-600">
              We manage your electrical connection project from initial planning to final commissioning, ensuring a smooth process throughout.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Consultation</h3>
              <p className="text-gray-600">
                We analyse your requirements and building specifications to develop an optimal approach.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Design</h3>
              <p className="text-gray-600">
                Our engineers create detailed electrical layouts and distribution plans for your building.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Installation</h3>
              <p className="text-gray-600">
                Our qualified teams install all electrical infrastructure and connection points.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Commissioning</h3>
              <p className="text-gray-600">
                We test and certify all installations to ensure safety and compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
              Benefits of Our High-Rise Solutions
            </h2>
            <div className="h-1 w-16 bg-[#137DC5] mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Reliable Power</h3>
              <p className="text-gray-600">
                Our systems are designed for maximum uptime and resilience, with minimal risk of outages.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Enhanced Safety</h3>
              <p className="text-gray-600">
                All installations meet or exceed regulatory requirements, ensuring resident safety.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Cost Efficiency</h3>
              <p className="text-gray-600">
                Our designs optimise energy distribution, reducing operational costs over the building's lifetime.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Minimised Disruption</h3>
              <p className="text-gray-600">
                Our efficient installation processes keep disruption to a minimum during construction.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Future-proofed</h3>
              <p className="text-gray-600">
                Our infrastructure is designed to accommodate future technologies and increased power demands.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Quality Assurance</h3>
              <p className="text-gray-600">
                Each installation comes with comprehensive documentation and warranty coverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#137DC5]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Ready to discuss your high-rise residential connection?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team has extensive experience with residential tower blocks throughout the UK. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md text-sm font-medium bg-white text-[#137DC5] hover:bg-gray-100"
              >
                Contact Us
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md text-sm font-medium border border-white text-white hover:bg-white/10"
              >
                Download Brochure
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-16 bg-[#137DC5] mx-auto mb-6"></div>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">How long does a typical high-rise connection take?</h3>
                <p className="text-gray-600">
                  The timeline varies based on the building size and complexity, but typically ranges from 8-16 weeks for the installation phase. We provide a detailed timeline during the consultation process.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Can you work with existing building designs?</h3>
                <p className="text-gray-600">
                  Yes, we regularly work with architects and builders to integrate our electrical solutions into existing plans. We can also provide recommendations for optimisations if needed.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Do you handle ongoing maintenance?</h3>
                <p className="text-gray-600">
                  We offer comprehensive maintenance packages to ensure your electrical infrastructure remains in optimal condition throughout its lifespan, with emergency response services available.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">How do you ensure compliance with regulations?</h3>
                <p className="text-gray-600">
                  Our team stays current with all relevant regulations and standards. We provide full documentation and certification for all work completed, ensuring your building meets or exceeds requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
              Related Services
            </h2>
            <div className="h-1 w-16 bg-[#137DC5] mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 bg-[#137DC5]/10 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80" 
                  alt="New Build Housing" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">New Build Housing</h3>
                <p className="text-gray-600 mb-4">
                  Electrical connections for new housing developments.
                </p>
                <Link
                  href="/new-connections/new-build-housing"
                  className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 bg-[#137DC5]/10 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1471445281654-62a97bae59c6?auto=format&fit=crop&q=80" 
                  alt="Substation Installation" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Substation Installation</h3>
                <p className="text-gray-600 mb-4">
                  Design and construction of high-voltage substations.
                </p>
                <Link
                  href="/new-connections/substation-installation"
                  className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="h-48 bg-[#137DC5]/10 relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558389186-a9d8c5d4f9be?auto=format&fit=crop&q=80" 
                  alt="EV Charging Networks" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">EV Charging Networks</h3>
                <p className="text-gray-600 mb-4">
                  Infrastructure for electric vehicle charging stations.
                </p>
                <Link
                  href="/new-connections/ev-charging-networks"
                  className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 