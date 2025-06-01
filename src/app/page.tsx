"use client";

import React from "react";
import { ModernNavbar } from "./Subframe-Components/ui";
import { Button } from "./Subframe-Components/ui/components/Button";
import { FeatherChevronRight } from "@subframe/core";
import { IconButton } from "./Subframe-Components/ui/components/IconButton";
import { FeatherTwitter } from "@subframe/core";
import { FeatherGithub } from "@subframe/core";
import { FeatherSlack } from "@subframe/core";
import { FeatherYoutube } from "@subframe/core";

function ModernAboutPage() {
  return (
    <div className="flex h-full w-full flex-col items-center bg-default-background">
      <div className="sticky top-0 z-50 flex w-full flex-col items-center justify-center px-6 py-2 bg-white shadow-sm transition-all duration-300">
        <ModernNavbar className="mobile:hidden" />
        <ModernNavbar className="hidden mobile:flex" />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-24 px-6 py-24">
        <span className="max-w-[576px] whitespace-pre-wrap font-['Inter'] text-[56px] font-[600] leading-[62px] text-default-font text-center -tracking-[0.04em]">
          {"Daily fashion games you can shop"}
        </span>
        <img
          className="h-112 w-full max-w-[768px] flex-none object-cover"
          src="https://res.cloudinary.com/subframe/image/upload/v1724705711/uploads/302/txrjvclpsjkgrwkdaz6x.png"
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-24 bg-gradient-to-b from-transparent via-neutral-100 to-transparent">
        <div className="flex w-full max-w-[1024px] flex-wrap items-start gap-12">
          <span className="min-w-[320px] grow shrink-0 basis-0 whitespace-pre-wrap font-['Inter'] text-[40px] font-[600] leading-[44px] text-default-font -tracking-[0.03em]">
            {"Pioneering the future of software development with AI and ML"}
          </span>
          <span className="min-w-[320px] grow shrink-0 basis-0 whitespace-pre-wrap font-['Inter'] text-[17px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
            {
              "The promise of AI has long captivated the tech world, but its true potential in software development remained largely untapped. Until now. We've harnessed the power of cutting-edge AI and machine learning to create a revolutionary development ecosystem that brings the magic back to coding.\n\nOur journey began with a vision to transform how software is built. We developed sophisticated AI agents capable of understanding complex codebases, predicting potential issues, and suggesting optimizations in real-time. These agents, powered by advanced neural networks, learn and adapt to each team's unique development patterns, continuously improving their capabilities.\n\nWe're not just improving software development; we're reimagining it. Join us in shaping a future where AI and human creativity combine to produce software experiences that are truly magical."
            }
          </span>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-24 bg-gradient-to-b from-transparent via-neutral-100 to-transparent">
        <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-6 border-b border-solid border-neutral-border py-2">
            <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-subtext-color -tracking-[0.01em]">
              AI Pioneers
            </span>
          </div>
          <div className="flex w-full flex-wrap items-start gap-6">
            <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col flex-wrap items-start gap-6">
              <div className="flex w-full max-w-[448px] flex-col items-start gap-6">
                <span className="w-full whitespace-pre-wrap font-['Inter'] text-[40px] font-[600] leading-[44px] text-default-font -tracking-[0.03em]">
                  {"Pushing the boundaries of AI development"}
                </span>
                <span className="w-full whitespace-pre-wrap font-['Inter'] text-[17px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                  {
                    "Our team of AI researchers and software engineers is distributed across global AI hubs. We're united by our passion for advancing the field of artificial intelligence in software development. Our expertise spans neural networks, machine learning, and AI agent design. We're committed to creating AI models that not only assist in coding but fundamentally transform the development process."
                  }
                </span>
              </div>
              <Button
                variant="brand-secondary"
                iconRight="FeatherChevronRight"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Join us
              </Button>
            </div>
            <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col items-start gap-2">
              <img
                className="h-64 w-full flex-none object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1724690142/uploads/302/fbkapcq4o1zsq98df0t6.png"
              />
              <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color -tracking-[0.01em]">
                Our AI research team discussing next-generation neural network
                architectures for code synthesis.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 px-6 py-24 bg-gradient-to-b from-transparent via-neutral-100 to-transparent">
        <div className="flex w-full max-w-[1024px] flex-col items-center justify-center gap-12">
          <div className="flex w-full flex-col items-center justify-center gap-6 border-b border-solid border-neutral-border py-2">
            <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-subtext-color -tracking-[0.01em]">
              AI Visionaries &amp; Backers
            </span>
          </div>
          <div className="flex w-full flex-wrap items-start gap-6">
            <div className="flex min-w-[320px] grow shrink-0 basis-0 flex-col flex-wrap items-start gap-6">
              <div className="flex w-full max-w-[448px] flex-col items-start gap-6">
                <span className="w-full whitespace-pre-wrap font-['Inter'] text-[40px] font-[600] leading-[44px] text-default-font -tracking-[0.03em]">
                  {"Started by pioneers Backed by visionaries"}
                </span>
                <span className="w-full whitespace-pre-wrap font-['Inter'] text-[17px] font-[400] leading-[24px] text-default-font -tracking-[0.01em]">
                  {
                    "We're privileged to be supported by leading AI researchers, machine learning experts, and technology innovators."
                  }
                </span>
              </div>
            </div>
            <div className="flex grow shrink-0 basis-0 flex-wrap items-start justify-end gap-6">
              <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <img
                  className="h-32 w-full flex-none rounded-[8px] object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1724690099/uploads/302/zxrsheptnqfesqupssbb.png"
                />
                <div className="flex w-full flex-col items-start gap-1">
                  <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                    Alicia Chen
                  </span>
                  <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                    Deep learning Pioneer
                  </span>
                </div>
              </div>
              <div className="flex min-w-[160px] grow shrink-0 basis-0 flex-col items-start gap-4">
                <img
                  className="h-32 w-full flex-none rounded-[8px] object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1724705524/uploads/302/l5oq75rpdkq2kowa2xkj.png"
                />
                <div className="flex w-full flex-col items-start gap-1">
                  <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                    Prof. Marcus Turing
                  </span>
                  <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                    Neural Network Pioneer
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col flex-wrap items-center justify-center gap-6">
            <div className="flex w-full flex-wrap items-start gap-6">
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                  Dr. Sarah Liang
                </span>
                <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  ML Ethics Board Chair
                </span>
              </div>
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                  Raj Patel
                </span>
                <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  Venture Capital
                </span>
              </div>
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                  Dr. Elena Volkov
                </span>
                <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  Quantum Computing Expert
                </span>
              </div>
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                  Tom Zhang
                </span>
                <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  Founder
                </span>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-start gap-6">
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                  Alex Kwon
                </span>
                <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  Robotics Director
                </span>
              </div>
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                  Dr. Fabian Mueller
                </span>
                <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  AI Ethics Researcher
                </span>
              </div>
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                  Miles Clements
                </span>
                <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  Partner
                </span>
              </div>
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                  Priya Narayan
                </span>
                <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  CEO
                </span>
              </div>
            </div>
            <div className="flex w-full flex-wrap items-start gap-6">
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                  Dr. James Lee
                </span>
                <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  Professor of Computing
                </span>
              </div>
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                  Sofia Bergman
                </span>
                <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  AI Policy Advisor
                </span>
              </div>
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                  Dr. Carlos Mendoza
                </span>
                <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  Advisor
                </span>
              </div>
              <div className="flex min-w-[128px] grow shrink-0 basis-0 flex-col items-start gap-1">
                <span className="w-full font-['Inter'] text-[13px] font-[500] leading-[19px] text-default-font -tracking-[0.01em]">
                  Yuki Tanaka
                </span>
                <span className="w-full font-['Inter'] text-[13px] font-[400] leading-[19px] text-subtext-color">
                  AI Chip Architect
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-6 border-t border-solid border-neutral-100 px-6 py-12">
        <div className="flex w-full max-w-[1024px] flex-wrap items-start gap-6">
          <div className="flex min-w-[320px] flex-col items-start gap-6 self-stretch">
            <div className="flex w-full min-w-[320px] grow shrink-0 basis-0 items-start gap-4">
              <img
                className="h-5 w-5 flex-none object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png"
              />
              <span className="grow shrink-0 basis-0 font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Subframe
              </span>
            </div>
            <div className="flex w-full items-center gap-2">
              <IconButton
                icon="FeatherTwitter"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <IconButton
                icon="FeatherGithub"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <IconButton
                icon="FeatherSlack"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
              <IconButton
                icon="FeatherYoutube"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              />
            </div>
          </div>
          <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-4 self-stretch">
            <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Product
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Features
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Integrations
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Pricing
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Docs
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Download
              </span>
            </div>
            <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Company
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                About us
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Blog
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Careers
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Customers
              </span>
            </div>
            <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Resources
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Community
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Contact
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Privacy Policy
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Terms of Service
              </span>
            </div>
            <div className="flex min-w-[144px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <span className="w-full font-['Inter'] text-[14px] font-[500] leading-[20px] text-default-font -tracking-[0.01em]">
                Developers
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                API
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Status
              </span>
              <span className="font-['Inter'] text-[14px] font-[400] leading-[20px] text-subtext-color -tracking-[0.01em]">
                Github
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModernAboutPage;
