import { NextResponse } from 'next/server';
// Temporarily removing nodemailer for the build
// import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    
    // Check honeypot field for spam
    if (formData.website) {
      // This is likely a bot if the hidden website field is filled
      console.log('Spam submission detected');
      // Return success to avoid spam bots knowing their submission was rejected
      return NextResponse.json({ 
        success: true, 
        message: 'Thank you for your submission.' 
      });
    }
    
    // Temporarily disabled email sending functionality
    // Log the form data to console instead
    console.log('Form submission received:', {
      customerType: formData.customerType || 'Not specified',
      connectionsRequired: formData.connectionsRequired || 'Not specified',
      location: formData.location || 'Not specified',
      requirements: formData.requirements,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      privacyConsent: formData.privacyConsent ? 'Yes' : 'No',
      submittedOn: new Date().toLocaleString('en-GB')
    });
    
    // Return success response without actually sending an email
    return NextResponse.json({ 
      success: true, 
      message: 'Enquiry submitted successfully (Email sending temporarily disabled)' 
    });
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit enquiry' },
      { status: 500 }
    );
  }
} 