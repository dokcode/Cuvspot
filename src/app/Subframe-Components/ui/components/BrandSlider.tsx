'use client';
import React from 'react';
import { InfiniteSlider } from './InfiniteSlider';

export function BrandSlider() {
  const luxuryBrands = [
    { name: 'Chanel', logo: '/brands/chanel.svg', color: '#000000' },
    { name: 'Louis Vuitton', logo: '/brands/louis-vuitton.svg', color: '#964B00' },
    { name: 'Gucci', logo: '/brands/gucci.svg', color: '#006400' },
    { name: 'Prada', logo: '/brands/prada.svg', color: '#000000' },
    { name: 'Dior', logo: '/brands/dior.svg', color: '#000000' },
    { name: 'Hermès', logo: '/brands/hermes.svg', color: '#FFA500' },
    { name: 'Balenciaga', logo: '/brands/balenciaga.svg', color: '#000000' },
    { name: 'Versace', logo: '/brands/versace.svg', color: '#FFD700' },
    { name: 'Burberry', logo: '/brands/burberry.svg', color: '#964B00' },
    { name: 'Fendi', logo: '/brands/fendi.svg', color: '#000000' },
  ];

  return (
    <div className="w-full py-8">
      <InfiniteSlider 
        gap={40} 
        duration={30} 
        durationOnHover={60} 
        className="py-4"
      >
        {luxuryBrands.map((brand, index) => (
          <div 
            key={index} 
            className="flex flex-col items-center justify-center h-[100px] px-8 rounded-lg bg-white shadow-sm"
            style={{ 
              minWidth: '220px',
              border: '1px solid #f0f0f0'
            }}
          >
            <div className="font-['Inter'] text-xl font-semibold" style={{ color: brand.color }}>
              {brand.name}
            </div>
            <div className="text-sm text-gray-500 mt-2">Luxury Partner</div>
          </div>
        ))}
      </InfiniteSlider>
    </div>
  );
}
