"use client";

import React, { useState, useEffect } from "react";
import * as SubframeUtils from "../utils";
import { Button } from "./Button";
import { FeatherMenu, FeatherX } from "@subframe/core";

interface NavItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const NavItem = React.forwardRef<HTMLElement, NavItemProps>(function NavItem(
  { children, className, ...otherProps }: NavItemProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "group/1f118f11 flex h-12 cursor-pointer flex-col items-center justify-center gap-4 px-4",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      {children ? (
        <span className="text-body-bold font-body-bold text-subtext-color group-hover/1f118f11:text-default-font">
          {children}
        </span>
      ) : null}
    </div>
  );
});

interface ModernNavbarRootProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const ModernNavbarRoot = React.forwardRef<HTMLElement, ModernNavbarRootProps>(
  function ModernNavbarRoot(
    { className, ...otherProps }: ModernNavbarRootProps,
    ref
  ) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [windowWidth, setWindowWidth] = useState<number>(0);

    // Handle window resize
    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
        if (window.innerWidth >= 768) {
          setIsMenuOpen(false);
        }
      };

      // Set initial width
      setWindowWidth(window.innerWidth);
      
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };

    return (
      <>
        <div
          className={SubframeUtils.twClassNames(
            "flex w-full max-w-[1024px] flex-wrap items-center justify-between gap-4 rounded-md border border-solid border-neutral-border bg-transparent",
            className
          )}
          ref={ref as any}
          {...otherProps}
        >
          {/* Logo */}
          <div className="flex h-12 flex-col items-start justify-center gap-2 px-4">
            <img
              className="h-6 flex-none object-cover"
              src="https://res.cloudinary.com/subframe/image/upload/v1748700118/uploads/3429/zdmg02on3l2ahtv4wuho.png"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex grow flex-wrap items-center gap-6">
            <NavItem>Games</NavItem>
            <NavItem>Trending</NavItem>
            <NavItem>Blog</NavItem>
            <NavItem>About</NavItem>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-2 px-2">
            <Button variant="neutral-secondary">Log in</Button>
            <Button variant="neutral-primary" className="bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-900"><span className="text-white">Sign up</span></Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center px-4">
            <button
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="p-2 text-neutral-700 hover:text-neutral-900 focus:outline-none"
            >
              {isMenuOpen ? <FeatherX className="w-6 h-6" /> : <FeatherMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden w-full max-w-[1024px] mt-2 rounded-md border border-solid border-neutral-border bg-white shadow-md">
            <div className="flex flex-col py-2">
              <NavItem className="w-full">Games</NavItem>
              <NavItem className="w-full">Features</NavItem>
              <NavItem className="w-full">Pricing</NavItem>
              <NavItem className="w-full">About</NavItem>
              <NavItem className="w-full">Contact</NavItem>
              <div className="flex flex-col items-center gap-2 p-4">
                <Button variant="neutral-secondary" className="w-full">Log in</Button>
                <Button variant="neutral-primary" className="w-full bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-900"><span className="text-white">Sign up</span></Button>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
);

export const ModernNavbar = Object.assign(ModernNavbarRoot, {
  NavItem,
});