"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from 'embla-carousel-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

export default function Home() {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    customerType: "",
    connectionsRequired: "",
    location: "",
    requirements: "",
    name: "",
    email: "",
    phone: "",
    privacyConsent: false,
    website: ""
  });
  const [activeServiceFilter, setActiveServiceFilter] = useState("all");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  
  // Add API state for the carousel
  const [carouselApi, setCarouselApi] = useState<any>(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  // Set up autoplay functionality
  const startAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
    }
    
    autoplayRef.current = setInterval(() => {
      if (carouselApi) {
        if (carouselApi.canScrollNext()) {
          carouselApi.scrollNext();
        } else {
          // Reset to first slide for continuous looping
          carouselApi.scrollTo(0);
        }
      }
    }, 3000); // Scroll every 2 seconds
  }, [carouselApi]);
  
  // Pause autoplay on hover
  const pauseAutoplay = useCallback(() => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  }, []);
  
  // Start autoplay when component mounts and when carouselApi changes
  useEffect(() => {
    if (carouselApi) {
      startAutoplay();
    }
    
    // Clean up interval when component unmounts
    return () => {
      if (autoplayRef.current) {
        clearInterval(autoplayRef.current);
      }
    };
  }, [carouselApi, startAutoplay]);
  
  // Filter changes should reset the carousel position
  useEffect(() => {
    if (carouselApi) {
      // Reset to first slide when filter changes
      carouselApi.scrollTo(0);
    }
  }, [activeServiceFilter, carouselApi]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const nextStep = () => {
    // Validate current step before proceeding
    if (formStep === 1 && !formData.customerType) {
      return; // Don't proceed if customer type is not selected
    }
    
    if (formStep === 2 && !formData.connectionsRequired) {
      return; // Don't proceed if connections required is not selected
    }
    
    if (formStep === 3 && !formData.requirements) {
      return; // Don't proceed if requirements are not filled
    }
    
    setFormStep(prev => prev + 1);
  };

  const prevStep = () => {
    setFormStep(prev => prev - 1);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: 'Your enquiry has been submitted successfully. We will contact you soon.'
        });
        // Reset form after successful submission
        setFormStep(1);
        setFormData({
          customerType: "",
          connectionsRequired: "",
          location: "",
          requirements: "",
          name: "",
          email: "",
          phone: "",
          privacyConsent: false,
          website: ""
        });
      } else {
        setSubmitStatus({
          success: false,
          message: data.message || 'Failed to submit the enquiry. Please try again later.'
        });
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'An unexpected error occurred. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .text-shadow-lg {
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
        }
        .text-shadow-md {
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
        }
      `}</style>
      
      {/* Hero Section with Form */}
      <div 
        className="relative md:h-[600px] py-12 md:py-0 flex items-center justify-center text-white"
      >
        {/* Video Background */}
        <div className="absolute inset-0 overflow-hidden">
          <video 
            className="absolute min-w-full min-h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="/videos/hero-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F5F96]/80 to-[#0F5F96]/80" />
        </div>
        <div className="container relative z-10 mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Hero Text */}
            <div className="lg:w-1/2">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-lg text-white">
                Powering our future with high-quality, reliable electrical connections
            </h1>
              <p className="text-lg md:text-xl mb-8 text-shadow-md text-white">
                HV Direct is an Independent Connection Provider (ICP) specialising in delivering electrical connections to residential, commercial and industrial and EV Charging networks.
            </p>
            <div className="flex gap-4">
                <a 
                  href="/services"
                  className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white text-[#0f5f96] hover:bg-white/90 shadow-md transition-all border-2 border-white"
                >
                  Our Services
                </a>
                <a 
                  href="/about"
                  className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-white/20 hover:bg-white/30 text-white border-2 border-white shadow-md transition-all backdrop-blur-sm"
              >
                Learn More
                </a>
              </div>
            </div>

            {/* Enquiry Form */}
            <div className="lg:w-5/12 w-full mt-10 lg:mt-0">
              <div className="bg-white rounded-lg p-6 shadow-lg relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#137DC5] text-white py-1 px-6 rounded-full text-sm font-medium">
                  Get a Free Quote
                </div>
                <form onSubmit={handleSubmit}>
                  {/* Honeypot field for spam protection */}
                  <div style={{ display: 'none' }}>
                    <label htmlFor="website">Website (Leave this empty)</label>
                    <input
                      type="text"
                      id="website"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="flex justify-between mb-6 pt-3">
                    {[1, 2, 3, 4].map((step) => (
                      <div key={step} className="flex flex-col items-center">
                        <div 
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                            formStep >= step 
                              ? 'bg-[#137DC5] text-white' 
                              : 'bg-gray-200 text-gray-500'
                          }`}
                        >
                          {step}
                        </div>
                        <div className={`h-1 w-12 ${step === 4 ? 'hidden' : 'block'} ${formStep > step ? 'bg-[#137DC5]' : 'bg-gray-200'} mt-3`}></div>
                      </div>
                    ))}
                  </div>

                  {/* Step 1: Customer Type */}
                  {formStep === 1 && (
                    <div className="animate-fade-in">
                      <h3 className="text-[#1a1a1a] text-xl font-semibold mb-4">What type of customer are you?</h3>
                      <div className="space-y-3">
                        {["Commercial", "Residential", "Industrial", "Mixed Use"].map((type) => (
                          <label 
                            key={type}
                            className={`block p-4 border rounded-md cursor-pointer transition-all
                              ${formData.customerType === type 
                                ? 'border-[#137DC5] bg-[#137DC5]/5 text-[#137DC5]' 
                                : 'border-gray-200 hover:border-[#137DC5]/50'
                              }`}
                          >
                            <div className="flex items-center">
                              <input
                                type="radio"
                                name="customerType"
                                value={type}
                                checked={formData.customerType === type}
                                onChange={handleInputChange}
                                className="hidden"
                              />
                              <div className={`w-5 h-5 rounded-full border flex-shrink-0 mr-3 flex items-center justify-center ${formData.customerType === type ? 'border-[#137DC5]' : 'border-gray-400'}`}>
                                {formData.customerType === type && (
                                  <div className="w-3 h-3 rounded-full bg-[#137DC5]"></div>
                                )}
                              </div>
                              <span className="text-[#1a1a1a] font-medium">{type}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                      <div className="mt-6 flex justify-end">
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!formData.customerType}
                          className={`inline-flex items-center justify-center px-6 py-2 rounded-md font-medium ${
                            formData.customerType 
                              ? 'bg-[#137DC5] text-white hover:bg-[#0f5f96]' 
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Connections Required */}
                  {formStep === 2 && (
                    <div className="animate-fade-in">
                      <h3 className="text-[#1a1a1a] text-xl font-semibold mb-4">How many electrical or utility connections do you require?</h3>
                      <div className="space-y-3">
                        {["1-5", "6-10", "11-20", "21-50", "50+"].map((range) => (
                          <label 
                            key={range}
                            className={`block p-4 border rounded-md cursor-pointer transition-all
                              ${formData.connectionsRequired === range 
                                ? 'border-[#137DC5] bg-[#137DC5]/5 text-[#137DC5]' 
                                : 'border-gray-200 hover:border-[#137DC5]/50'
                              }`}
                          >
                            <div className="flex items-center">
                              <input
                                type="radio"
                                name="connectionsRequired"
                                value={range}
                                checked={formData.connectionsRequired === range}
                                onChange={handleInputChange}
                                className="hidden"
                              />
                              <div className={`w-5 h-5 rounded-full border flex-shrink-0 mr-3 flex items-center justify-center ${formData.connectionsRequired === range ? 'border-[#137DC5]' : 'border-gray-400'}`}>
                                {formData.connectionsRequired === range && (
                                  <div className="w-3 h-3 rounded-full bg-[#137DC5]"></div>
                                )}
                              </div>
                              <span className="text-[#1a1a1a] font-medium">{range}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                      <div className="mt-6 flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="inline-flex items-center justify-center px-6 py-2 rounded-md border border-gray-300 text-[#1a1a1a] font-medium hover:bg-gray-50"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!formData.connectionsRequired}
                          className={`inline-flex items-center justify-center px-6 py-2 rounded-md font-medium ${
                            formData.connectionsRequired 
                              ? 'bg-[#137DC5] text-white hover:bg-[#0f5f96]' 
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Location and Requirements */}
                  {formStep === 3 && (
                    <div className="animate-fade-in">
                      <h3 className="text-[#1a1a1a] text-xl font-semibold mb-4">Project Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Where is the location of the site? (Optional)
                          </label>
                          <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleInputChange}
                            placeholder="e.g. London, Birmingham, Manchester"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tell us about your requirements
                          </label>
                          <textarea
                            name="requirements"
                            value={formData.requirements}
                            onChange={handleInputChange}
                            rows={4}
                            placeholder="Please provide brief details about your project requirements"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                          />
                        </div>
                      </div>
                      <div className="mt-6 flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="inline-flex items-center justify-center px-6 py-2 rounded-md border border-gray-300 text-[#1a1a1a] font-medium hover:bg-gray-50"
                        >
                          Back
                        </button>
                        <button
                          type="button"
                          onClick={nextStep}
                          disabled={!formData.requirements}
                          className={`inline-flex items-center justify-center px-6 py-2 rounded-md font-medium ${
                            formData.requirements 
                              ? 'bg-[#137DC5] text-white hover:bg-[#0f5f96]' 
                              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          }`}
                        >
                          Next
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Contact Details */}
                  {formStep === 4 && (
                    <div className="animate-fade-in">
                      <h3 className="text-[#1a1a1a] text-xl font-semibold mb-4">Your Contact Details</h3>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name*
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address*
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="you@example.com"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number*
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="Your phone number"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#137DC5] focus:border-[#137DC5] outline-none transition"
                          />
                        </div>
                        
                        <div>
                          <label className="flex items-start text-sm mb-1">
                            <input
                              type="checkbox"
                              name="privacyConsent"
                              checked={formData.privacyConsent}
                              onChange={handleInputChange}
                              required
                              className="mt-1 mr-2"
                            />
                            <span className="text-gray-700">
                              I consent to HV Direct processing my data in accordance with the <a href="/privacy-policy" target="_blank" className="text-[#137DC5] hover:underline">Privacy Policy</a>.*
                            </span>
                          </label>
                        </div>
                        
                        {/* Form Status Message */}
                        {submitStatus && (
                          <div className={`p-3 rounded-md ${submitStatus.success ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
                            {submitStatus.message}
                          </div>
                        )}
                      </div>
                      <div className="mt-6 flex justify-between">
                        <button
                          type="button"
                          onClick={prevStep}
                          className="inline-flex items-center justify-center px-6 py-2 rounded-md border border-gray-300 text-[#1a1a1a] font-medium hover:bg-gray-50"
                          disabled={isSubmitting}
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          disabled={isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.privacyConsent}
                          className={`inline-flex items-center justify-center px-6 py-2 rounded-md ${
                            isSubmitting || !formData.name || !formData.email || !formData.phone || !formData.privacyConsent
                              ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                              : 'bg-[#137DC5] text-white hover:bg-[#0f5f96]'
                          }`}
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Submitting...
                            </>
                          ) : (
                            'Submit Enquiry'
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Key Benefits Section - Clean Redesign */}
      <section className="py-14 relative">
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-[#0f5f96]/90 to-[#2199ea]/80 h-[48.3%] w-full"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-dark-blue">
              Why Choose HV Direct?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mt-6">
              Our approach combines technical expertise with outstanding customer service, delivering electrical connections that exceed expectations.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Residential Category */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="h-48 bg-[#137DC5]/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f5f96]/40 group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute top-4 left-4 bg-[#0f5f96] text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                  Residential
                </div>
                <img 
                  src="/images/new-builds.jpg" 
                  alt="Residential Electrical Connections" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Residential Solutions</h3>
                <p className="text-base md:text-lg text-gray-600 mb-4">
                  From new build housing to high-rise developments, we deliver reliable and efficient electrical connections for all types of residential projects.
                </p>
                <a 
                  href="/new-connections/new-build-housing" 
                  className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Commercial Category */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="h-48 bg-[#137DC5]/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f5f96]/40 group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute top-4 left-4 bg-[#0f5f96] text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                  Commercial
                </div>
                <img 
                  src="/images/high-rise-residential.jpg" 
                  alt="Commercial Electrical Connections" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Commercial Solutions</h3>
                <p className="text-base md:text-lg text-gray-600 mb-4">
                  We provide tailored electrical infrastructure for office buildings, retail parks, and business premises, ensuring minimal disruption to your operations.
                </p>
                <a 
                  href="/new-connections" 
                  className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Industrial Category */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
              <div className="h-48 bg-[#137DC5]/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0f5f96]/40 group-hover:opacity-0 transition-opacity"></div>
                <div className="absolute top-4 left-4 bg-[#0f5f96] text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                  Industrial
                </div>
                <img 
                  src="/images/substation.jpg" 
                  alt="Industrial Electrical Connections" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Industrial Solutions</h3>
                <p className="text-base md:text-lg text-gray-600 mb-4">
                  From manufacturing facilities to warehouses, we design and implement robust electrical systems that power your industrial operations.
                </p>
                <a 
                  href="/new-connections" 
                  className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <a 
              href="/about" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#0f5f96] text-white font-medium rounded-md hover:bg-[#094879] transition-colors"
            >
              Learn More About Our Approach
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 bg-[#f5f5f5]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-6 text-brand-dark-blue">
            Our Services
          </h2>
          <p className="text-base md:text-lg text-center text-gray-600 max-w-3xl mx-auto mb-10">
            HV Direct offers comprehensive electrical connection services designed to meet the unique needs of various sectors.
          </p>
          
          {/* Service Categories Tabs */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-white rounded-full p-1 shadow-sm">
              <button 
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeServiceFilter === "all" 
                    ? "bg-[#137DC5] text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveServiceFilter("all")}
              >
                All Services
              </button>
              <button 
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeServiceFilter === "low-voltage" 
                    ? "bg-[#137DC5] text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveServiceFilter("low-voltage")}
              >
                Low Voltage
              </button>
              <button 
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  activeServiceFilter === "high-voltage" 
                    ? "bg-[#137DC5] text-white" 
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                onClick={() => setActiveServiceFilter("high-voltage")}
              >
                High Voltage
              </button>
            </div>
          </div>

          {/* Services Carousel with Embla */}
          <div className="relative px-8 md:px-12">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              setApi={setCarouselApi}
              className="w-full"
              onMouseEnter={pauseAutoplay}
              onMouseLeave={startAutoplay}
              onTouchStart={pauseAutoplay}
              onTouchEnd={startAutoplay}
            >
              <CarouselContent>
                {/* High Rise Residential */}
                <CarouselItem className={`md:basis-1/3 lg:basis-1/4 ${
                  activeServiceFilter !== "all" && activeServiceFilter !== "low-voltage" ? "hidden" : ""
                }`}>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow h-full">
                    <div className="h-48 bg-[#137DC5]/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#137DC5]/20 group-hover:opacity-0 transition-opacity"></div>
                      <div className="absolute top-4 left-4 bg-[#137DC5] text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                        Low Voltage
                      </div>
                      <img 
                        src="/images/high-rise-residential.jpg" 
                        alt="High Rise Residential" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">High Rise Residential</h3>
                      <p className="text-base md:text-lg text-gray-600 mb-4 line-clamp-3">
                        HV Direct designs and constructs electrical infrastructure for high-rise residential buildings, ensuring reliable power distribution throughout the development.
                      </p>
                      <a 
                        href="/new-connections/high-rise-residential" 
                        className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors"
                      >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </CarouselItem>

                {/* New Build Housing */}
                <CarouselItem className={`md:basis-1/3 lg:basis-1/4 ${
                  activeServiceFilter !== "all" && activeServiceFilter !== "low-voltage" ? "hidden" : ""
                }`}>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow h-full">
                    <div className="h-48 bg-[#137DC5]/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#137DC5]/20 group-hover:opacity-0 transition-opacity"></div>
                      <div className="absolute top-4 left-4 bg-[#137DC5] text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                        Low Voltage
                      </div>
                      <img 
                        src="/images/new-builds.jpg" 
                        alt="New Build Housing" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">New Build Housing</h3>
                      <p className="text-base md:text-lg text-gray-600 mb-4 line-clamp-3">
                        The company provides electrical connections for new housing developments, from design to construction, ensuring efficient and cost-effective solutions.
                      </p>
                      <a 
                        href="/new-connections/new-build-housing" 
                        className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors"
                      >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </CarouselItem>

                {/* EV Charging Networks */}
                <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow h-full">
                    <div className="h-48 bg-[#137DC5]/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#137DC5]/20 group-hover:opacity-0 transition-opacity"></div>
                      <div className="absolute top-4 left-4 flex space-x-2 z-10">
                        <div className="bg-[#137DC5] text-white text-xs font-medium px-3 py-1 rounded-full">
                          Low Voltage
                        </div>
                        <div className="bg-[#0f5f96] text-white text-xs font-medium px-3 py-1 rounded-full">
                          High Voltage
                        </div>
                      </div>
                      <img 
                        src="/images/ev-charging.jpeg" 
                        alt="EV Charging Networks" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">EV Charging Networks</h3>
                      <p className="text-base md:text-lg text-gray-600 mb-4 line-clamp-3">
                        HV Direct designs and installs EV charging infrastructure for residential settings to large-scale commercial fleets and transport hubs.
                      </p>
                      <a 
                        href="/new-connections/ev-charging-networks" 
                        className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors"
                      >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </CarouselItem>

                {/* Diversions and Reinforcements */}
                <CarouselItem className="md:basis-1/3 lg:basis-1/4">
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow h-full">
                    <div className="h-48 bg-[#137DC5]/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#137DC5]/20 group-hover:opacity-0 transition-opacity"></div>
                      <div className="absolute top-4 left-4 flex space-x-2 z-10">
                        <div className="bg-[#137DC5] text-white text-xs font-medium px-3 py-1 rounded-full">
                          Low Voltage
                        </div>
                        <div className="bg-[#0f5f96] text-white text-xs font-medium px-3 py-1 rounded-full">
                          High Voltage
                        </div>
                      </div>
                      <img 
                        src="/images/diversions-reinforcement.webp" 
                        alt="Diversions and Reinforcements" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Diversions and Reinforcements</h3>
                      <p className="text-base md:text-lg text-gray-600 mb-4 line-clamp-3">
                        The company handles diversions and reinforcements at both low and high voltage, ensuring electrical infrastructure can accommodate new developments.
                      </p>
                      <a 
                        href="/new-connections/diversions" 
                        className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors"
                      >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </CarouselItem>

                {/* Substation Installation */}
                <CarouselItem className={`md:basis-1/3 lg:basis-1/4 ${
                  activeServiceFilter !== "all" && activeServiceFilter !== "high-voltage" ? "hidden" : ""
                }`}>
                  <div className="bg-white rounded-lg shadow-sm overflow-hidden group hover:shadow-md transition-shadow h-full">
                    <div className="h-48 bg-[#137DC5]/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#137DC5]/20 group-hover:opacity-0 transition-opacity"></div>
                      <div className="absolute top-4 left-4 bg-[#0f5f96] text-white text-xs font-medium px-3 py-1 rounded-full z-10">
                        High Voltage
                      </div>
                      <img 
                        src="/images/substation.jpg" 
                        alt="Substation Installation" 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 text-[#1a1a1a]">Substation Installation</h3>
                      <p className="text-base md:text-lg text-gray-600 mb-4 line-clamp-3">
                        HV Direct designs and constructs high-voltage substations (up to 11kV), ensuring they meet all regulatory and safety standards for optimal performance.
                      </p>
                      <a 
                        href="/new-connections/substation-installation" 
                        className="inline-flex items-center text-[#137DC5] font-medium hover:text-[#0f5f96] transition-colors"
                      >
                        Learn More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>
              
              <div className="hidden sm:block">
                <CarouselPrevious className="lg:-left-5 -left-2" />
                <CarouselNext className="lg:-right-5 -right-2" />
              </div>
            </Carousel>
          </div>

          <div className="text-center mt-8">
            <a 
              href="/new-connections"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#137DC5] text-white font-medium rounded-md hover:bg-[#0f5f96] transition-colors"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-14 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-brand-dark-blue">About HV Direct</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                HV Direct is committed to delivering high-quality, reliable, and efficient electrical infrastructure solutions for residential, commercial, industrial, and EV charging markets.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-4">
                We aim to be the UK's leading Independent Connection Provider, offering superior customer service, innovative designs, and cost-effective solutions that exceed our clients' expectations while promoting sustainable energy practices.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6">
                As a new ICP, we provide an alternative to traditional DNOs, focusing on customer needs with personalised, flexible solutions and utilising extensive industry experience, innovation, and a commitment to sustainability.
              </p>
              <button className="inline-flex items-center justify-center h-11 rounded-md px-8 text-sm font-medium bg-[#137DC5] hover:bg-[#0f5f96] text-white">
                Learn More About Us
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/images/about-hv.png"
                  alt="HV Direct engineers working on site"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-semibold text-gray-800 uppercase tracking-wider mb-6">
              Accredited by
            </h2>
            <div className="flex justify-center">
              <div className="inline-block p-1 bg-gray-200 rounded shadow-md">
                <div className="bg-white p-2 rounded">
                  <img 
                    src="/images/LRQA.jpg" 
                    alt="LRQA NERS Accreditation - National Electricity Registration Scheme" 
                    className="h-auto w-72"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 bg-gradient-to-r from-[#0f5f96] to-[#2199ea] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Ready to Get Connected?</h2>
          <p className="text-base md:text-xl mb-8 max-w-2xl mx-auto text-white">
            Contact our team today for a free consultation and quote. We're here to find the most efficient and cost-effective solution for your project.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="inline-flex items-center justify-center h-11 rounded-md px-8 text-sm font-medium bg-white text-[#137DC5] hover:bg-white/90">
              Request a Quote
            </button>
            <button className="inline-flex items-center justify-center h-11 rounded-md px-8 text-sm font-medium bg-transparent border border-white text-white hover:bg-white/10">
              Contact Us
            </button>
          </div>
          <div className="flex justify-center gap-8 mt-10">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-white rounded-full"></div>
              <span>0800 123 4567</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 bg-white rounded-full"></div>
              <span>info@hvdirect.co.uk</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}