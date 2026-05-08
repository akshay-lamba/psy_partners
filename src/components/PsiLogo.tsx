import React from 'react';

export default function PsiLogo({ className = "w-8 h-8", strokeWidth = 1.5 }: { className?: string, strokeWidth?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square" strokeLinejoin="miter" className={className}>
      <path d="M12 22V2M4 4v9h16V4" />
    </svg>
  );
}
