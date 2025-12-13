import { NextResponse } from 'next/server';
import { siteConfig } from '@/data/config';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Add metadata
    const payload = {
      ...data,
      source: 'website',
      submittedAt: new Date().toISOString(),
      companyName: siteConfig.company.name,
    };
    
    // Forward to GHL webhook if configured
    if (siteConfig.ghl.webhookUrl) {
      const response = await fetch(siteConfig.ghl.webhookUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      
      if (!response.ok) {
        console.error('GHL webhook error:', response.statusText);
        return NextResponse.json(
          { success: false, error: 'Failed to submit to CRM' },
          { status: 500 }
        );
      }
    } else {
      // Log to console if no webhook configured (for development)
      console.log('Form submission (no webhook configured):', payload);
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}
