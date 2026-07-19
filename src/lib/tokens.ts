/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// Design Tokens for القائد - الإدارة المالية المتكاملة عن بعد للمنشآت
// All values are aligned with Saudi SME financial consultation context (Modern SaaS look, Clean, Minimal, Professional)

export const COLORS = {
  primary: {
    DEFAULT: '#0F172A', // Deep Slate - representing authority and precision
    light: '#1E293B',
    dark: '#020617',
  },
  secondary: {
    DEFAULT: '#059669', // Emerald/Mint Green - representing wealth, growth, and numbers
    light: '#10B981',
    dark: '#047857',
  },
  background: {
    DEFAULT: '#F8FAFC', // Soft off-white
    dark: '#0F172A',
  },
  surface: {
    DEFAULT: '#FFFFFF', // High contrast white card surface
    subtle: '#F1F5F9',  // Light grey surface
  },
  border: {
    DEFAULT: '#E2E8F0', // Slate 200
    dark: '#334155',    // Slate 700
  },
  text: {
    primary: '#0F172A',   // Slate 900
    secondary: '#475569', // Slate 600
    muted: '#94A3B8',     // Slate 400
  },
  feedback: {
    success: '#10B981',   // Emerald 500
    warning: '#F59E0B',   // Amber 500
    danger: '#EF4444',    // Red 500
  }
};

export const TYPOGRAPHY = {
  display: {
    xl: 'text-xl sm:text-2xl md:text-3xl font-bold tracking-tight font-arabic leading-tight',
    l: 'text-lg sm:text-xl md:text-2xl font-bold tracking-tight font-arabic leading-tight',
  },
  heading: {
    h1: 'text-lg md:text-xl font-semibold font-arabic leading-snug',
    h2: 'text-base md:text-lg font-semibold font-arabic leading-snug',
    h3: 'text-sm md:text-base font-medium font-arabic leading-normal',
  },
  body: {
    large: 'text-sm font-normal leading-relaxed text-text-secondary font-arabic',
    normal: 'text-xs font-normal leading-relaxed text-text-secondary font-arabic',
    small: 'text-[10px] font-normal leading-normal text-text-muted font-arabic',
  },
  caption: 'text-[8px] font-medium tracking-wider text-text-muted font-arabic uppercase',
};

export const RADIUS = {
  small: 'rounded-sm',     // 2px / 4px
  medium: 'rounded-md',    // 6px / 8px
  large: 'rounded-lg',     // 12px
  xl: 'rounded-2xl',       // 16px
  full: 'rounded-full',     // pills/circles
};

export const SHADOWS = {
  small: 'shadow-sm',
  medium: 'shadow-md',
  large: 'shadow-lg',
};

export const SPACING = {
  4: 'p-1 m-1 gap-1',
  8: 'p-2 m-2 gap-2',
  12: 'p-3 m-3 gap-3',
  16: 'p-4 m-4 gap-4',
  20: 'p-5 m-5 gap-5',
  24: 'p-6 m-6 gap-6',
  32: 'p-8 m-8 gap-8',
  40: 'p-10 m-10 gap-10',
  48: 'p-12 m-12 gap-12',
  64: 'p-16 m-16 gap-16',
  80: 'p-20 m-20 gap-20',
  96: 'p-24 m-24 gap-24',
  120: 'p-30 m-30 gap-30',
};

export const BREAKPOINTS = {
  mobile: 'max-w-screen-sm',     // up to 640px
  tablet: 'max-w-screen-md',     // 768px
  laptop: 'max-w-screen-lg',     // 1024px
  desktop: 'max-w-screen-xl',    // 1280px
  largeDesktop: 'max-w-screen-2xl', // 1536px
};

export const CONTAINER = {
  width: 'max-w-7xl',
  padding: 'px-4 sm:px-6 lg:px-8',
  mx: 'mx-auto',
};

export const TRANSITIONS = {
  fast: 'transition-all duration-150 ease-in-out',
  normal: 'transition-all duration-300 ease-in-out',
  slow: 'transition-all duration-500 ease-in-out',
};

export const BORDER_WIDTH = {
  thin: 'border',
  normal: 'border-2',
};

export const Z_INDEX = {
  base: 'z-0',
  sticky: 'z-20',
  floating: 'z-40',
  overlay: 'z-50',
  modal: 'z-50',
};
