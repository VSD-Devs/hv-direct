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

  // History timeline
  const timeline = [
    {
      year: "2019",
      title: "Company Foundation",
      description: "HV Direct was established to provide a superior alternative to traditional DNOs, with a focus on customer service and technical excellence."
    },
    {
      year: "2020",
      title: "NERS Accreditation",
      description: "Achieved full National Electricity Registration Scheme accreditation, allowing us to provide end-to-end electrical connection services."
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Expanded our technical team and capabilities to serve a wider range of commercial and residential projects throughout the UK."
    },
    {
      year: "2022",
      title: "ISO 9001 Certification",
      description: "Received ISO 9001 certification, demonstrating our commitment to quality management and continuous improvement."
    },
    {
      year: "2023",
      title: "EV Charging Specialisation",
      description: "Developed specialised expertise in EV charging infrastructure to support the growing demand for electric vehicle solutions."
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
      description: "We ensure all installations meet relevant regulations and standards, handling necessary approvals and documentation on your behalf.",
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
      <section className="relative py-20 md:py-28 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(rgba(23, 63, 90, 0.85), rgba(16, 59, 88, 0.75)), url('/images/about-us-bg.png')"
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <div className="max-w-xl">
                <h2 className="text-3xl font-bold mb-6 text-brand-dark-blue">Our Mission</h2>
                <div className="h-1 w-16 bg-[#137DC5] mb-8"></div>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  At HV Direct, our mission is to transform the electrical connections industry by combining exceptional technical expertise with outstanding customer service.
                </p>
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  We aim to be the UK's leading Independent Connection Provider, offering superior service, innovative designs, and cost-effective solutions that exceed our clients' expectations while promoting sustainable energy practices.
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

      {/* Our Values */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our Core Values
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide our approach to every project and client relationship, ensuring we deliver the highest quality service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-base md:text-lg text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our Experience
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              With over 10 years of collective industry experience, our team brings extensive expertise to every electrical connection project.
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

      {/* History Timeline */}
      <section className="py-20 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our Journey
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              The story of HV Direct's growth and development as a leading Independent Connection Provider.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#137DC5]/20 z-0"></div>
            
            {/* Timeline items */}
            {timeline.map((item, index) => (
              <div key={index} className={`relative z-10 flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                <div className="w-1/2 pr-8 md:pr-16 flex justify-end">
                  <div className={`text-right ${index % 2 !== 0 ? 'order-2 pl-8 md:pl-16 pr-0 text-left' : ''}`}>
                    <div className="inline-block px-4 py-2 bg-[#137DC5] text-white text-xl font-semibold rounded-md mb-3">
                      {item.year}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-[#1a1a1a]">{item.title}</h3>
                    <p className="text-base md:text-lg text-gray-600">{item.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#137DC5] rounded-full border-4 border-white shadow-sm"></div>
                
                <div className={`w-1/2 pl-8 md:pl-16 ${index % 2 !== 0 ? 'order-1 pr-8 md:pr-16 pl-0 text-right' : ''}`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 text-brand-dark-blue">
              Our Accreditations
            </h2>
            <div className="h-1 w-20 bg-[#137DC5] mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              We maintain the highest industry standards through these recognised accreditations and certifications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            <div className="w-[220px] h-[120px] bg-[#f5f5f5] rounded-xl flex items-center justify-center p-6 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#137DC5] mb-1">NERS</div>
                <div className="text-sm text-gray-600">National Electricity Registration Scheme</div>
              </div>
            </div>
            <div className="w-[220px] h-[120px] bg-[#f5f5f5] rounded-xl flex items-center justify-center p-6 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#137DC5] mb-1">ICP</div>
                <div className="text-sm text-gray-600">Independent Connection Provider</div>
              </div>
            </div>
            <div className="w-[220px] h-[120px] bg-[#f5f5f5] rounded-xl flex items-center justify-center p-6 hover:shadow-md transition-shadow">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#137DC5] mb-1">ISO 9001</div>
                <div className="text-sm text-gray-600">Quality Management System</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f5f96] to-[#2199ea] text-white">
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