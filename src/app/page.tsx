"use client";

import React from "react";
import { ModernNavbar, FashionGamesSlideshow, LottieAnimation, BrandSlider, WaitlistSignup } from "./Subframe-Components/ui";
import { Button } from "./Subframe-Components/ui/components/Button";
import { BoldFooter } from "./Subframe-Components/ui/components/BoldFooter";
import { Squares } from "./Subframe-Components/ui/components/squares-background";

function ModernAboutPage() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background">
      <div className="sticky top-0 z-50 flex w-full flex-col items-center justify-center px-6 py-2 bg-white shadow-sm transition-all duration-300">
        <ModernNavbar className="mobile:hidden" />
        <ModernNavbar className="hidden mobile:flex" />
      </div>
      <div className="relative flex w-full flex-col items-center justify-center gap-24 px-6 py-24">
        <div className="absolute inset-0 z-0">
          <Squares 
            direction="diagonal"
            speed={0.5}
            squareSize={40}
            borderColor="#333" 
            hoverFillColor="#222"
          />
        </div>
        <div className="relative z-10">
          <span className="max-w-[576px] whitespace-pre-wrap font-['Inter'] text-[56px] font-[600] leading-[62px] text-white text-center -tracking-[0.04em]">
            {"Daily fashion games you can shop"}
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-24 bg-gradient-to-b from-transparent via-neutral-100 to-transparent">
        <div className="flex w-full max-w-[1024px] flex-wrap items-start justify-between gap-12">
          <div className="min-w-[320px] max-w-[450px] flex flex-col gap-4">
            <span className="whitespace-pre-wrap font-['Inter'] text-[40px] font-[600] leading-[44px] text-default-font -tracking-[0.03em]">
              {"Choose from different daily fashion games"}
            </span>
            <p className="whitespace-pre-wrap font-['Inter'] text-[17px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
              {"Dive into our curated collection of interactive fashion games that blend style, entertainment, and commerce. From matching outfits to hunting trends, each game offers a unique way to discover and shop the latest fashion. Play daily to unlock exclusive discounts and personalized recommendations tailored to your taste."}
            </p>
          </div>
          <div className="min-w-[320px] flex-shrink-0">
            <FashionGamesSlideshow />
          </div>
        </div>
        <div className="w-full max-w-[1024px] mt-8">
          <div className="w-full mb-4">
            <span className="font-['Inter'] text-[17px] font-[600] leading-[24px] text-default-font -tracking-[0.01em]">
              {"Featured Luxury Partners"}
            </span>
          </div>
          <BrandSlider />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-24 bg-gradient-to-b from-transparent via-neutral-100 to-transparent">
        <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-6 border-b border-solid border-neutral-border py-2">
            <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-subtext-color -tracking-[0.01em]">
              Shop The Look
            </span>
          </div>
          <div className="flex w-full flex-wrap items-start gap-6">
            <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col flex-wrap items-start gap-6">
              <div className="flex w-full max-w-[448px] flex-col items-start gap-6">
                <span className="w-full whitespace-pre-wrap font-['Inter'] text-[40px] font-[600] leading-[44px] text-default-font -tracking-[0.03em]">
                  {"From gameplay to shopping cart in seconds"}
                </span>
                <span className="w-full whitespace-pre-wrap font-['Inter'] text-[17px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                  {
                    "When you finish a game, instantly shop the exact looks you've just interacted with. Our seamless ecommerce integration connects you directly with featured brands, allowing you to purchase your favorite styles with just a few clicks. Discover new designers, explore limited-edition collections, and build your wardrobe with pieces you've already fallen in love with through gameplay."
                  }
                </span>
              </div>
              <Button
                variant="brand-secondary"
                iconRight="FeatherChevronRight"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Shop Now
              </Button>
            </div>
            <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-2">
              <div className="h-64 w-full rounded-lg overflow-hidden bg-neutral-100 flex items-center justify-center shadow-md">
                <LottieAnimation 
                  src="https://assets5.lottiefiles.com/dotlotties/dlf10_l5nfwcai.lottie" 
                  loop 
                  autoplay 
                  style={{ width: '100%', height: '100%' }} 
                />
              </div>
              <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color -tracking-[0.01em]">
                Seamless transition from game completion to shopping experience
              </span>
            </div>
          </div>
        </div>
      </div>
      <WaitlistSignup />
      <BoldFooter />
    </div>
  );
}

export default ModernAboutPage;
