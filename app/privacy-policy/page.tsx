"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-14 md:py-16 bg-cover bg-center text-white" style={{ 
        backgroundImage: "linear-gradient(to right, rgba(15, 95, 150, 0.9), rgba(15, 95, 150, 0.8))"
      }}>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              Privacy Policy
            </h1>
            <p className="text-base md:text-xl mb-3">
              How we collect, use, and protect your personal information
            </p>
            <p className="text-sm md:text-base text-white/80">
              Last updated: {new Date().toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'})}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Introduction</h2>
              <p className="mb-6 text-gray-700">
                At HV Direct, we respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
              </p>
              
              <div className="bg-[#f5f5f5] p-6 rounded-lg mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">Key Information</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#137DC5]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">HV Direct is the data controller responsible for your personal data.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#137DC5]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">We collect data you provide directly and data collected automatically when you use our site.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-[#137DC5]/10 flex items-center justify-center mt-0.5 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-[#137DC5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <span className="text-gray-700">You have rights regarding your personal data under data protection laws.</span>
                  </li>
                </ul>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Information We Collect</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">Personal Information You Provide</h3>
                <p className="mb-4 text-gray-700">
                  We may collect personal information that you voluntarily provide when using our website, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>Contact details (name, email, phone number, address)</li>
                  <li>Business information if you represent a company</li>
                  <li>Project specifications and requirements</li>
                  <li>Account information if you create an account</li>
                  <li>Communication records when you contact us</li>
                </ul>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-3">Information Collected Automatically</h3>
                <p className="mb-4 text-gray-700">
                  When you visit our website, we may automatically collect certain information about your device and usage, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our website</li>
                  <li>Referral sources and user interaction data</li>
                  <li>Location information based on IP address</li>
                </ul>
                <p className="text-gray-700">
                  For more information about cookies and similar technologies, please see our <Link href="/cookies" className="text-[#137DC5] hover:underline">Cookie Policy</Link>.
                </p>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">How We Use Your Information</h2>
              <p className="mb-4 text-gray-700">
                We use the information we collect for the following purposes:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-[#1a1a1a] mb-2">Providing Our Services</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Process your enquiries and requests</li>
                    <li>Manage your account if you create one</li>
                    <li>Deliver the services you have requested</li>
                    <li>Send service-related communications</li>
                  </ul>
                </div>

                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-[#1a1a1a] mb-2">Improving Our Website</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Analyse usage to improve functionality</li>
                    <li>Troubleshoot problems and debug issues</li>
                    <li>Understand user preferences</li>
                    <li>Test new features and content</li>
                  </ul>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-[#1a1a1a] mb-2">Marketing and Communication</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Send relevant information and updates</li>
                    <li>Provide news about our services</li>
                    <li>Contact you about offers and promotions</li>
                    <li>Collect feedback about our services</li>
                  </ul>
                </div>

                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#137DC5]/10 text-[#137DC5] mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-[#1a1a1a] mb-2">Legal and Security</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>Protect our website and services</li>
                    <li>Detect and prevent fraudulent activities</li>
                    <li>Comply with legal obligations</li>
                    <li>Enforce our terms and policies</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Sharing Your Information</h2>
              <p className="mb-6 text-gray-700">
                We may share your personal information with the following categories of recipients:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-gray-700 mb-8">
                <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as website hosting, data analysis, and payment processing.</li>
                <li><strong>Business Partners:</strong> Companies we work with to provide our services, such as contractors and network operators.</li>
                <li><strong>Legal Requirements:</strong> When required by law, regulation, or legal process, or to protect our rights and property.</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or part of our business.</li>
              </ul>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Data Security</h2>
              <p className="mb-6 text-gray-700">
                We implement appropriate technical and organisational measures to protect your personal information against unauthorised or unlawful processing, accidental loss, destruction, or damage. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Your Rights</h2>
              <p className="mb-4 text-gray-700">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">Access and Information</h4>
                  <p className="text-gray-700">
                    You can request information about what personal data we hold about you and how it's being processed.
                  </p>
                </div>

                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">Correction</h4>
                  <p className="text-gray-700">
                    You can request that we correct any inaccurate or incomplete personal information we hold about you.
                  </p>
                </div>

                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">Deletion</h4>
                  <p className="text-gray-700">
                    You can request that we delete your personal information in certain circumstances.
                  </p>
                </div>

                <div className="bg-[#f5f5f5] p-6 rounded-lg">
                  <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">Restriction</h4>
                  <p className="text-gray-700">
                    You can request that we restrict processing of your personal information in certain circumstances.
                  </p>
                </div>
              </div>

              <p className="text-gray-700 mb-8">
                To exercise any of these rights, please contact us at <a href="mailto:privacy@hvdirect.co.uk" className="text-[#137DC5] hover:underline">privacy@hvdirect.co.uk</a>. We may need to verify your identity before responding to your request.
              </p>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Retention Period</h2>
              <p className="mb-6 text-gray-700">
                We retain your personal information for as long as necessary to fulfil the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements. To determine the appropriate retention period, we consider the amount, nature, and sensitivity of the personal data, the potential risk of harm from unauthorised use or disclosure, and applicable legal requirements.
              </p>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Third-Party Links</h2>
              <p className="mb-6 text-gray-700">
                Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. We encourage you to read the privacy policy of every website you visit.
              </p>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Children's Privacy</h2>
              <p className="mb-6 text-gray-700">
                Our website is not intended for children under 16 years of age, and we do not knowingly collect personal information from children. If you are a parent or guardian and believe we may have collected information about a child, please contact us immediately.
              </p>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-6 text-gray-700">
                We may update this privacy policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We will post the updated policy on our website with the last revised date. Your continued use of our website after we make changes indicates your acceptance of those changes.
              </p>

              <h2 className="text-2xl font-semibold text-[#1a1a1a] mb-4">Contact Us</h2>
              <p className="mb-6 text-gray-700">
                If you have any questions or concerns about this privacy policy or our data practices, please contact us at:
              </p>
              <div className="bg-[#f5f5f5] p-6 rounded-lg mb-8">
                <h4 className="text-lg font-medium text-[#1a1a1a] mb-3">HV Direct Ltd</h4>
                <p className="text-gray-700 mb-2">123 Business Park, London, SW1A 1AA</p>
                <p className="text-gray-700 mb-2">Email: <a href="mailto:privacy@hvdirect.co.uk" className="text-[#137DC5] hover:underline">privacy@hvdirect.co.uk</a></p>
                <p className="text-gray-700">Phone: 0800 123 4567</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6 text-[#1a1a1a]">Have Questions About Your Data?</h2>
          <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto text-gray-700">
            Our team is here to answer any questions you may have about our privacy practices.
          </p>
          <Link 
            href="/contact"
            className="inline-flex items-center justify-center h-12 rounded-md px-8 text-sm font-medium bg-[#137DC5] text-white hover:bg-[#0f5f96] transition-colors shadow-sm"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
} 