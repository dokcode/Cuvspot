"use client";

import React from "react";
import * as SubframeUtils from "../utils";
import { LinkButton } from "./LinkButton";
import { IconButton } from "./IconButton";


interface BoldFooterRootProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const BoldFooterRoot = React.forwardRef<HTMLElement, BoldFooterRootProps>(
  function BoldFooterRoot(
    { className, ...otherProps }: BoldFooterRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "flex w-full flex-col items-center justify-center gap-6 border-t border-solid border-neutral-100 px-6 py-24",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-12">
          <div className="flex w-full flex-wrap items-start gap-6">
            <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-6">
              <span className="w-full font-['Montserrat'] text-[14px] font-[600] leading-[20px] text-default-font -tracking-[0.01em]">
                Cuvspot Games
              </span>
              <div className="flex flex-col items-start gap-4">
                <LinkButton>All Games</LinkButton>
                <LinkButton>Business</LinkButton>
                <LinkButton>FAQs</LinkButton>
                <LinkButton>Contact Us</LinkButton>
              </div>
            </div>
            <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-6">
              <span className="w-full font-['Montserrat'] text-[14px] font-[600] leading-[20px] text-default-font -tracking-[0.01em]">
                Company
              </span>
              <div className="flex flex-col items-start gap-4">
                <LinkButton>Team</LinkButton>
                <LinkButton>Press</LinkButton>
                <LinkButton>Careers</LinkButton>
              </div>
            </div>
            <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-6">
              <span className="w-full font-['Montserrat'] text-[14px] font-[600] leading-[20px] text-default-font -tracking-[0.01em]">
                Resources
              </span>
              <div className="flex flex-col items-start gap-4">
                <LinkButton>News</LinkButton>
                <LinkButton>Blog</LinkButton>
                <LinkButton>Help Center</LinkButton>
              </div>
            </div>
            <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch">
              <span className="w-full font-['Montserrat'] text-[14px] font-[600] leading-[20px] text-default-font -tracking-[0.01em]">
                Follow us
              </span>
              <div className="flex w-full items-center gap-2">
                <IconButton icon="FeatherXTwitter" />
                <IconButton icon="FeatherInstagram" />
              </div>
            </div>
          </div>
          <div className="flex h-px w-full flex-none flex-col items-center gap-2 bg-neutral-200" />
          <div className="flex w-full flex-wrap items-start gap-6">
            <div className="flex min-w-[144px] grow shrink-0 basis-0 items-start gap-2">
              <img
                className="h-11 flex-none object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1748828267/uploads/3429/q32yn2epctsdirzk9nvw.svg"
              />
            </div>
            <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <LinkButton>Legal</LinkButton>
              <LinkButton>Give Feedback</LinkButton>
            </div>
            <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <LinkButton>Privacy Policy</LinkButton>
              <LinkButton>Terms of Service</LinkButton>
            </div>
            <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <LinkButton>Cookie Policy</LinkButton>
              <LinkButton>Site Map</LinkButton>
            </div>
          </div>
          <div className="flex w-full max-w-[768px] flex-col items-center gap-4">
            <span className="font-['Montserrat'] text-[14px] font-[500] leading-[20px] text-subtext-color text-center">
              © Cuvspot 2025
            </span>
            <span className="font-['Montserrat'] text-[14px] font-[500] leading-[20px] text-subtext-color text-center">
              Since its founding in 2025, Cuvspot has delighted users with
              interactive daily fashion games that inspire creativity and style.
              Our platform blends fun, learning, and shopping. Join Cuvspot to
              unleash your fashion flair with irresistible games designed for
              everyone, every day.
            </span>
          </div>
        </div>
      </div>
    );
  }
);

export const BoldFooter = BoldFooterRoot;