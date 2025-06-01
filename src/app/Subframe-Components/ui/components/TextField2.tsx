"use client";
/*
 * Documentation:
 * Text Field2 — https://app.subframe.com/library?component=Text+Field2_c902d2a2-f6e5-4de8-b257-3b4125298b9b
 */

import React from "react";
import * as SubframeUtils from "../utils";
import * as SubframeCore from "@subframe/core";

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "placeholder"> {
  placeholder?: React.ReactNode;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input = React.forwardRef<HTMLElement, InputProps>(function Input(
  { placeholder, className, ...otherProps }: InputProps,
  ref
) {
  return (
    <input
      className={SubframeUtils.twClassNames(
        "h-full w-full border-none bg-transparent text-body font-body text-default-font outline-none placeholder:text-neutral-400",
        className
      )}
      placeholder={placeholder as string}
      ref={ref as any}
      {...otherProps}
    />
  );
});

interface TextField2RootProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {
  disabled?: boolean;
  error?: boolean;
  variant?: "outline" | "filled";
  label?: React.ReactNode;
  helpText?: React.ReactNode;
  icon?: SubframeCore.IconName;
  iconRight?: SubframeCore.IconName;
  children?: React.ReactNode;
  className?: string;
}

const TextField2Root = React.forwardRef<HTMLElement, TextField2RootProps>(
  function TextField2Root(
    {
      disabled = false,
      error = false,
      variant = "outline",
      label,
      helpText,
      icon = null,
      iconRight = null,
      children,
      className,
      ...otherProps
    }: TextField2RootProps,
    ref
  ) {
    return (
      <label
        className={SubframeUtils.twClassNames(
          "group/c902d2a2 flex flex-col items-start gap-1",
          { "flex-col flex-nowrap gap-1": error },
          className
        )}
        ref={ref as any}
        {...otherProps}
      >
        {label ? (
          <span className="text-caption-bold font-caption-bold text-default-font">
            {label}
          </span>
        ) : null}
        <div
          className={SubframeUtils.twClassNames(
            "flex h-8 w-full flex-none items-center gap-1 rounded-md border border-solid border-neutral-border bg-default-background px-2 group-focus-within/c902d2a2:border group-focus-within/c902d2a2:border-solid group-focus-within/c902d2a2:border-brand-primary",
            {
              "border border-solid border-neutral-100 bg-neutral-100 group-hover/c902d2a2:border group-hover/c902d2a2:border-solid group-hover/c902d2a2:border-neutral-border group-focus-within/c902d2a2:bg-default-background":
                variant === "filled",
              "border border-solid border-error-600": error,
              "border border-solid border-neutral-200 bg-neutral-200": disabled,
            }
          )}
        >
          <SubframeCore.Icon
            className="text-body font-body text-subtext-color"
            name={icon}
          />
          {children ? (
            <div className="flex grow shrink-0 basis-0 flex-col items-start self-stretch px-1">
              {children}
            </div>
          ) : null}
          <SubframeCore.Icon
            className={SubframeUtils.twClassNames(
              "text-body font-body text-subtext-color",
              { "text-error-500": error }
            )}
            name={iconRight}
          />
        </div>
        {helpText ? (
          <span
            className={SubframeUtils.twClassNames(
              "text-caption font-caption text-subtext-color",
              { "text-error-700": error }
            )}
          >
            {helpText}
          </span>
        ) : null}
      </label>
    );
  }
);

export const TextField2 = Object.assign(TextField2Root, {
  Input,
});
