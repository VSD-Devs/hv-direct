"use client";

import React from "react";
import Link from "next/link";

export default function HVDiversions() {
  return (
    <main className="min-h-screen">
      {/* Hero Banner */}
      <section className="relative py-20 bg-cover bg-center" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1609945071105-23de5f12df0a?auto=format&fit=crop&q=80&w=1600')`,
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
              HV Diversions & Reinforcements
            </h1>
            <div className="h-1 w-24 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-white/90 mb-8">
              Professional management of high voltage electrical infrastructure modifications and upgrades
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
                src="https://images.unsplash.com/photo-1609945071105-23de5f12df0a?auto=format&fit=crop&q=80&w=1600" 
                alt="High Voltage Electrical Infrastructure" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-4 text-[#1a1a1a]">
                Expert High Voltage Modifications
              </h2>
              <div className="h-1 w-16 bg-[#137DC5] mb-6"></div>
              <p className="text-gray-600 mb-6">
                HV Direct provides comprehensive high voltage diversion and reinforcement services for projects that require modifications to existing electrical infrastructure. Our solutions ensure minimal disruption whilst maintaining safety and compliance with all relevant standards.
              </p>
              <p className="text-gray-600 mb-6">
                Whether your development requires the relocation of high voltage cables, transformers or switchgear, or if you need to upgrade your electrical capacity to accommodate increased power demands, our team has the expertise to deliver efficient and reliable solutions.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Comprehensive high voltage infrastructure modifications up to 33kV</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Minimal disruption to existing operations during implementation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-[#137DC5] flex items-center justify-center text-white mt-0.5 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-gray-600">Full compliance with DNO and regulatory requirements</span>
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
              Our HV Diversion & Reinforcement Services
            </h2>
            <div className="h-1 w-16 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-gray-600">
              We provide a comprehensive range of high voltage modification services for various sectors.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Cable Diversions</h3>
              <p className="text-gray-600">
                Relocation of high voltage underground cables to accommodate new developments, infrastructure projects or site modifications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Substation Relocations</h3>
              <p className="text-gray-600">
                Complete decommissioning, relocation and recommissioning of high voltage substations to meet changing site requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Capacity Upgrades</h3>
              <p className="text-gray-600">
                Enhancement of existing high voltage infrastructure to increase capacity for growing power demands or additional connections.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Equipment Replacement</h3>
              <p className="text-gray-600">
                Upgrade or replacement of aging high voltage switchgear, transformers and other components with modern, efficient alternatives.
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
                Expert design services for high voltage diversions and reinforcements, including detailed planning and regulatory approval processes.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-14 w-14 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Network Reconfiguration</h3>
              <p className="text-gray-600">
                Strategic reconfiguration of high voltage networks to improve reliability, efficiency or to accommodate new connections.
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
              We follow a structured approach to ensure your high voltage diversion or reinforcement project is delivered safely and efficiently.
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Initial Assessment</h3>
              <p className="text-gray-600">
                We evaluate your existing infrastructure and requirements to determine the optimal approach.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Design & Planning</h3>
              <p className="text-gray-600">
                Our engineers create detailed designs and implementation plans for your project.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Regulatory Approval</h3>
              <p className="text-gray-600">
                We manage all necessary approvals from DNOs and regulatory authorities.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Implementation</h3>
              <p className="text-gray-600">
                Our skilled teams carry out the diversion or reinforcement works to the highest standards.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="h-16 w-16 bg-[#137DC5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-[#137DC5] text-2xl font-bold">5</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Commissioning</h3>
              <p className="text-gray-600">
                We test and certify all modifications, ensuring safety and compliance.
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
              Benefits of Our HV Diversion Services
            </h2>
            <div className="h-1 w-16 bg-[#137DC5] mx-auto mb-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Minimal Disruption</h3>
              <p className="text-gray-600">
                Our carefully planned approaches minimise disruption to your site operations and the existing electrical network.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Enhanced Safety</h3>
              <p className="text-gray-600">
                Safety is our top priority; all work is conducted to the highest safety standards by qualified professionals.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Cost Efficiency</h3>
              <p className="text-gray-600">
                Our solutions are designed to be cost-effective, providing value for money without compromising on quality.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Regulatory Compliance</h3>
              <p className="text-gray-600">
                We ensure all work meets or exceeds regulatory requirements and industry standards.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Transparency</h3>
              <p className="text-gray-600">
                We provide clear communication throughout your project, with detailed documentation and regular updates.
              </p>
            </div>
            
            <div className="p-6 border border-gray-200 rounded-lg bg-white">
              <div className="h-12 w-12 bg-[#137DC5]/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Future-proofed Solutions</h3>
              <p className="text-gray-600">
                Our designs consider future needs, ensuring your electrical infrastructure can accommodate expansion and technological advancements.
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
              Ready to discuss your HV diversion or reinforcement project?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our team of specialists is ready to help you plan and implement your high voltage infrastructure modifications. Contact us today for a consultation.
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