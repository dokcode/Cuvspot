"use client";
/*
 * Documentation:
 * Default Page Layout — https://app.subframe.com/library?component=Default+Page+Layout_a57b1c43-310a-493f-b807-8cc88e2452cf
 * Sidebar — https://app.subframe.com/library?component=Sidebar_1651a160-3525-494a-b02c-03db4e8516b1
 */

import React from "react";
import * as SubframeUtils from "../utils";
import { Sidebar } from "../components/Sidebar";

interface DefaultPageLayoutRootProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  className?: string;
}

const DefaultPageLayoutRoot = React.forwardRef<
  HTMLElement,
  DefaultPageLayoutRootProps
>(function DefaultPageLayoutRoot(
  { children, className, ...otherProps }: DefaultPageLayoutRootProps,
  ref
) {
  return (
    <div
      className={SubframeUtils.twClassNames(
        "flex h-screen w-full items-center px-2 py-2",
        className
      )}
      ref={ref as any}
      {...otherProps}
    >
      <Sidebar logoImage="https://res.cloudinary.com/subframe/image/upload/v1711417507/shared/y2rsnhq3mex4auk54aye.png">
        <Sidebar.Item selected={true}>Home</Sidebar.Item>
        <Sidebar.Item icon="FeatherStar">Favorites</Sidebar.Item>
        <Sidebar.Item icon="FeatherSparkles">What&#39;s new</Sidebar.Item>
        <Sidebar.Item icon="FeatherGlobe">Trending</Sidebar.Item>
        <Sidebar.Item icon="FeatherMedal">My wins</Sidebar.Item>
        <Sidebar.Item icon="FeatherMap">Experiences</Sidebar.Item>
        <Sidebar.Item icon="FeatherSearch">Discover Brands</Sidebar.Item>
        <Sidebar.Item icon="FeatherSettings">Settings</Sidebar.Item>
      </Sidebar>
      {children ? (
        <div className="flex grow shrink-0 basis-0 flex-col items-start gap-4 self-stretch overflow-y-auto">
          {children}
        </div>
      ) : null}
    </div>
  );
});

export const DefaultPageLayout = DefaultPageLayoutRoot;
