"use client";

import React from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

interface LottieAnimationProps {
  src: string;
  loop?: boolean;
  autoplay?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const LottieAnimation: React.FC<LottieAnimationProps> = ({
  src,
  loop = true,
  autoplay = true,
  className = '',
  style = {},
}) => {
  return (
    <div className={`lottie-container ${className}`}>
      <DotLottieReact
        src={src}
        loop={loop}
        autoplay={autoplay}
        style={{
          width: '100%',
          height: '100%',
          ...style,
        }}
      />
    </div>
  );
};
