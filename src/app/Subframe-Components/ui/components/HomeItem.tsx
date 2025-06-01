"use client";
/*
 * Documentation:
 * Home Item — https://app.subframe.com/library?component=Home+Item_1ed16b47-ad7e-47df-a08c-44c13aee7cb7
 * Icon with background — https://app.subframe.com/library?component=Icon+with+background_c5d68c0e-4c0c-4cff-8d8c-6ff334859b3a
 * Dropdown Menu — https://app.subframe.com/library?component=Dropdown+Menu_99951515-459b-4286-919e-a89e7549b43b
 * Icon Button — https://app.subframe.com/library?component=Icon+Button_af9405b1-8c54-4e01-9786-5aad308224f6
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";
import { DropdownMenu } from "./DropdownMenu";

interface HomeItemRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  icon?: React.ReactNode;
  title?: React.ReactNode;
  metadata?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

const HomeItemRoot = React.forwardRef<HTMLElement, HomeItemRootProps>(
  function HomeItemRoot(
    {
      icon,
      title,
      metadata,
      actions,
      className,
      ...otherProps
    }: HomeItemRootProps,
    ref
  ) {
    return (
      <div
        className={SubframeUtils.twClassNames(
          "group/1ed16b47 flex w-full cursor-pointer gap-6 rounded-md px-3 py-4 flex-row flex-wrap items-start justify-start hover:bg-neutral-50",
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {icon ? <div className="flex items-center gap-6">{icon}</div> : null}
        <div className="flex grow shrink-0 basis-0 flex-wrap items-start gap-6">
          {title ? (
            <div className="flex min-w-[192px] grow shrink-0 basis-0 flex-col items-start gap-1">
              {title}
            </div>
          ) : null}
          {metadata ? (
            <div className="flex grow shrink-0 basis-0 items-center gap-2">
              {metadata}
            </div>
          ) : null}
        </div>
        {actions ? (
          <div className="flex items-center justify-end gap-2">{actions}</div>
        ) : null}
      </div>
    );
  }
);

export const HomeItem = HomeItemRoot;
