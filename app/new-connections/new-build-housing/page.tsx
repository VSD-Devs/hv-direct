"use client";

import React from "react";
import Link from "next/link";

export default function NewBuildHousing() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-cover bg-center" 
        style={{
          backgroundImage: `url('/images/new-builds.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f5f96]/80 to-[#137DC5]/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/new-connections" 
              className="inline-flex items-center text-white font-medium hover:text-white/80 mb-4 no-underline"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              New Build Housing Connections
            </h1>
            <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive electrical infrastructure for residential developers and housebuilders
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
                src="/images/new-home--electrical-services.jpg" 
                alt="New Build Housing Development" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
                Powering New Communities
              </h2>
              <div className="h-1 w-16 bg-[#137DC5] mb-6"></div>
              <p className="text-gray-600 mb-6">
                HV Direct specialises in designing, installing and connecting electrical infrastructure for new housing developments throughout the UK. From small plots to major residential schemes, we deliver reliable power solutions that meet the needs of modern homes.
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
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
              Our New Build Services
            </h2>
            <div className="h-1 w-16 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-gray-600">
              We offer a full range of electrical connection services for new housing developments.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Single House Connections</h3>
              <p className="text-gray-600">
                Complete connections for individual properties including service connections, meter boxes and internal distribution.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Housing Estate Infrastructure</h3>
              <p className="text-gray-600">
                Complete electrical infrastructure for housing estates, including distribution substations, underground cabling and service connections.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Temporary Builder's Supply</h3>
              <p className="text-gray-600">
                Temporary electrical connections to power your construction activities before permanent connections are established.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Substation Installation</h3>
              <p className="text-gray-600">
                Design and installation of distribution substations for larger housing developments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Design & Planning</h3>
              <p className="text-gray-600">
                Comprehensive electrical infrastructure design services tailored to your development's needs and future requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Disconnections & Diversions</h3>
              <p className="text-gray-600">
                Management of existing electrical infrastructure that needs to be removed or relocated to accommodate your development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
              Our Process
            </h2>
            <div className="h-1 w-16 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-gray-600">
              We follow a structured approach to ensure your new build electrical connections are delivered efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Initial Consultation</h3>
              <p className="text-gray-600">
                We meet with you to understand your development's requirements, constraints and programme.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Design & Quotation</h3>
              <p className="text-gray-600">
                We design your electrical infrastructure and provide a comprehensive quotation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Installation</h3>
              <p className="text-gray-600">
                Our qualified teams install all electrical infrastructure in coordination with your build programme.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Connection & Handover</h3>
              <p className="text-gray-600">
                We coordinate with DNOs for final connections and provide all necessary documentation and certification.
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
              Ready to power your housing development?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact our team today to discuss your project needs and receive a competitive quotation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md text-sm font-medium bg-white text-[#137DC5] hover:bg-gray-100 no-underline"
              >
                Request a Quote
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-[#0f5f96]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-16 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-gray-600 mb-8">
              Everything you need to know about our new build housing connection services
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gradient-to-r from-[#137DC5] to-[#0f5f96] rounded-t-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">How long does a typical new build housing connection take?</h3>
                <p className="text-white/90">
                  The timeline varies based on the size and complexity of your development. Single property connections typically take 4-6 weeks, while larger housing estates may take 8-12 weeks or more. We'll provide a detailed timeline during our initial consultation.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-[#137DC5]">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#137DC5]">What is the process for connecting a new housing development?</h3>
                <p className="text-gray-700">
                  Our process follows four key stages: Initial consultation to understand your requirements, design and quotation, installation of electrical infrastructure, and finally connection and handover. Throughout each stage, we maintain clear communication and coordinate with all relevant parties.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-[#137DC5]">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#137DC5]">Can you install both temporary and permanent connections?</h3>
                <p className="text-gray-700">
                  Yes, we provide both temporary builder's supplies to power your construction activities and permanent electrical connections for the completed properties. This ensures you have reliable power at every stage of your development.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-[#137DC5]">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#137DC5]">Do you coordinate with other utility providers?</h3>
                <p className="text-gray-700">
                  Absolutely. We work closely with other utility providers (water, gas, telecommunications) to minimise disruption and avoid costly conflicts. Our experienced project managers handle this coordination to ensure efficient installation of all services.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-l-4 border-[#137DC5]">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#137DC5]">Are your electrical installations future-proofed for EV charging?</h3>
                <p className="text-gray-700">
                  Yes, all our new housing electrical infrastructure designs account for the growing demand for EV charging points. We ensure sufficient capacity and appropriate infrastructure is in place to accommodate future installation of domestic EV charging points.
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
                  src="https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&q=80" 
                  alt="High Rise Residential" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">High Rise Residential</h3>
                <p className="text-gray-600 mb-4">
                  Electrical connections for high-rise residential buildings.
                </p>
                <Link
                  href="/new-connections/high-rise-residential"
                  className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors no-underline"
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
                  className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors no-underline"
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
                  className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors no-underline"
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