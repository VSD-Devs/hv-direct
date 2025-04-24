"use client";

import React from "react";
import Link from "next/link";

export default function SubstationInstallation() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-cover bg-center" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1471445281654-62a97bae59c6?auto=format&fit=crop&q=80&w=1600')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f5f96]/80 to-[#137DC5]/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Link 
              href="/new-connections" 
              className="inline-flex items-center text-white font-medium hover:text-white/80 mb-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to All Services
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Substation Installation
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive design and installation of electrical substations up to 11kV
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
                src="https://images.unsplash.com/photo-1471445281654-62a97bae59c6?auto=format&fit=crop&q=80&w=1600" 
                alt="Electrical Substation" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
                Powering Your Infrastructure
              </h2>
              <p className="text-gray-600 mb-6">
                HV Direct specialises in the design and installation of electrical substations for a wide range of applications. Our team of qualified engineers and technicians has extensive experience in delivering substation projects up to 11kV, ensuring reliable and efficient power distribution for your development.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you require a new substation for a housing development, commercial property, or industrial facility, we provide end-to-end solutions tailored to your specific requirements and site constraints.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Comprehensive service from initial design to final commissioning</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Fully compliant with DNO specifications and regulatory requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Substations designed for reliability, longevity and ease of maintenance</span>
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
              Our Substation Services
            </h2>
            <p className="text-gray-600">
              We provide a comprehensive range of substation services for residential, commercial and industrial applications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Package Substations</h3>
              <p className="text-gray-600">
                Design and installation of pre-fabricated compact substations for residential and light commercial applications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Indoor Substations</h3>
              <p className="text-gray-600">
                Custom-designed indoor substations for commercial buildings and developments with specific space constraints.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Outdoor/Standalone Substations</h3>
              <p className="text-gray-600">
                Design and construction of standalone outdoor substations for industrial applications and larger developments.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">HV Switchgear Installation</h3>
              <p className="text-gray-600">
                Supply and installation of high-voltage switchgear up to 11kV, including ring main units and circuit breakers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Transformer Installation</h3>
              <p className="text-gray-600">
                Specialist installation of distribution transformers ranging from 50kVA to 2MVA for various applications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Substation Design</h3>
              <p className="text-gray-600">
                Expert design services for all types of substations, including electrical layout, civil works and safety features.
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
            <p className="text-gray-600">
              We follow a structured approach to ensure your substation installation is delivered safely, efficiently and to the highest standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-6 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Consultation</h3>
              <p className="text-gray-600">
                We assess your requirements, site conditions and power needs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Design</h3>
              <p className="text-gray-600">
                Our engineers create detailed designs for your substation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">DNO Approval</h3>
              <p className="text-gray-600">
                We obtain necessary approvals from Distribution Network Operators.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Civil Works</h3>
              <p className="text-gray-600">
                We prepare the site and complete all necessary groundworks.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Installation</h3>
              <p className="text-gray-600">
                Our teams install all electrical equipment to the highest standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">6</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Commissioning</h3>
              <p className="text-gray-600">
                We test, verify and energise your new substation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
              Benefits of Our Substation Solutions
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Reliability</h3>
              <p className="text-gray-600">
                Our substations are designed and built to provide reliable power for decades, with minimal maintenance requirements.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Safety</h3>
              <p className="text-gray-600">
                Every installation meets or exceeds safety standards, with comprehensive risk assessments and protective measures.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Efficiency</h3>
              <p className="text-gray-600">
                Our modern substation designs incorporate energy-efficient technologies to reduce losses and operational costs.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Scalability</h3>
              <p className="text-gray-600">
                We design with future expansion in mind, allowing your electrical infrastructure to grow with your needs.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Timely Delivery</h3>
              <p className="text-gray-600">
                We understand project timelines and work efficiently to deliver your substation on schedule and within budget.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Compliance</h3>
              <p className="text-gray-600">
                All our installations comply with the latest regulations and DNO requirements, ensuring hassle-free adoption.
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
              Ready to discuss your substation requirements?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team of specialists is ready to help you plan and implement your high-quality substation solution. Contact us today for a consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center h-12 px-8 rounded-md text-sm font-medium bg-white text-[#137DC5] hover:bg-gray-100"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 