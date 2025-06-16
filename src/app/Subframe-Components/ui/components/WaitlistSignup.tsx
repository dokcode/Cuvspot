'use client';

import React, { useState } from 'react';
import { Button } from './Button';

export function WaitlistSignup() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, you would send this to your API
    console.log('Email submitted:', email);
    setSubmitted(true);
    setEmail('');
    
    // Reset the submitted state after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="w-full bg-gradient-to-r from-neutral-50 to-neutral-100 py-16">
      <div className="max-w-[1024px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col max-w-[550px]">
            <span className="font-['Inter'] text-[13px] font-[500] leading-[19px] text-subtext-color -tracking-[0.01em] mb-2">
              Join Our Community
            </span>
            <h2 className="whitespace-pre-wrap font-['Inter'] text-[32px] md:text-[40px] font-[600] leading-[44px] text-default-font -tracking-[0.03em] mb-4">
              Be the first to experience fashion gaming
            </h2>
            <p className="whitespace-pre-wrap font-['Inter'] text-[17px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
              Join our exclusive waitlist and be among the first to experience the future of fashion gaming. Get early access to limited-edition virtual collections, exclusive styling opportunities, and special rewards only available to our founding members.
            </p>
          </div>
          
          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full md:min-w-[320px]">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full h-12 px-4 rounded-md border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-neutral-400 font-['Inter'] text-[15px]"
                />
              </div>
              <Button 
                variant="brand-primary" 
                type="submit"
                className="w-full"
              >
                {submitted ? 'Thank you!' : 'Join Waitlist'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
