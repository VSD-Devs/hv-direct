"use client";

import React from "react";
import Link from "next/link";

export default function AboutPage() {
  // Company values
  const values = [
    {
      title: "Excellence",
      description: "We strive for technical excellence in every project, ensuring all work exceeds industry standards and client expectations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "We embrace new technologies and approaches to deliver cutting-edge electrical infrastructure solutions for our clients.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Reliability",
      description: "We deliver on our promises, with transparent communication and reliable service throughout every project phase.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Sustainability",
      description: "We design our electrical infrastructure with a focus on energy efficiency and long-term environmental sustainability.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // History timeline - replacing this with process steps
  const approachSteps = [
    {
      number: "01",
      title: "Consultation",
      description: "We begin by understanding your specific requirements, site conditions, and objectives through thorough consultation."
    },
    {
      number: "02",
      title: "Technical Assessment",
      description: "Our engineers conduct detailed technical assessments to determine the optimal solution for your project."
    },
    {
      number: "03",
      title: "Bespoke Design",
      description: "We create customised designs that balance technical excellence, cost-efficiency, and future expansion potential."
    },
    {
      number: "04",
      title: "Implementation",
      description: "Our skilled teams deliver the installation with precision, adhering to all regulatory standards and safety protocols."
    },
    {
      number: "05",
      title: "Ongoing Support",
      description: "The project will be handed over as the network is assessed and adopted by the network operator."
    }
  ];

  // Expertise areas
  const expertiseAreas = [
    {
      title: "Electrical Design",
      description: "Our experts provide comprehensive electrical system design for a wide range of applications, from residential developments to large commercial installations.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    },
    {
      title: "Project Management",
      description: "We manage the entire connection process from planning to completion, ensuring every project is delivered on time and within budget.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: "Technical Consultancy",
      description: "Our team provides expert advice on network design, capacity requirements, and optimal solutions for your electrical infrastructure needs.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: "Regulatory Compliance",
      description: "We ensure all installations meet all DNO & IDNO standards, handling necessary approvals and documentation on your behalf.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    }
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-14 md:py-20 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(to right, rgba(15, 95, 150, 0.8), rgba(15, 95, 150, 0.8)), url('/images/about-us-bg.png')"
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About HV Direct
            </h1>
            <p className="text-base md:text-xl mb-8">
              We are an Independent Connection Provider committed to delivering high-quality, reliable electrical infrastructure solutions across the UK.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-6 text-brand-dark-blue">Our Mission</h2>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  At HV Direct, our mission is to transform the electrical connections industry by combining exceptional technical expertise with outstanding customer service.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  We aim to be the UK's leading Independent Connection Provider, offering superior service, innovative designs, and cost-effective solutions that exceed our clients' expectations while delivering to the highest safety and industry standards.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  Our team is dedicated to delivering every project on time, within budget, and to the highest technical standards, ensuring that our clients receive efficient, reliable, and future-proof electrical infrastructure.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/meet-the-team.png"
                  alt="HV Direct team"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f5f96]/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

     
      {/* Experience Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our Expertise
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Our team combines diverse industry knowledge with fresh perspectives to deliver innovative electrical connection solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="bg-[#f5f5f5] p-8 rounded-xl hover:shadow-md transition-shadow h-full">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                  {area.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{area.title}</h3>
                <p className="text-base md:text-lg text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-14 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our Approach
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              How we deliver exceptional electrical infrastructure solutions through our client-focused methodology.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {approachSteps.map((step, index) => (
              <div key={index} className="flex mb-12 relative">
                <div className="mr-8 flex-shrink-0">
                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#137DC5] text-white text-xl font-bold">
                    {step.number}
                  </div>
                  {index < approachSteps.length - 1 && (
                    <div className="absolute left-8 top-16 w-0.5 h-12 bg-[#137DC5]/20"></div>
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="text-2xl font-semibold mb-3 text-[#1a1a1a]">{step.title}</h3>
                  <p className="text-base md:text-lg text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-gradient-to-r from-[#0f5f96] to-[#2199ea] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Work With Us?</h2>
          <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto text-white">
            Contact our team today to discuss your electrical connection requirements and see how we can help with your next project.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <Link 
              href="/new-connections"
              className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 