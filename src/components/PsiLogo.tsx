import React from 'react';

export default function PsiLogo({ className = "w-8 h-8" }: { className?: string; strokeWidth?: number }) {
  return (
    <img 
      src="/logo.png" 
      alt="Psy Partners Logo" 
      onError={(e) => {
        // Fallback to CDN if needed
        (e.currentTarget as HTMLImageElement).src = "https://static.wixstatic.com/media/b20068_95a6d49567064891ac4c729dab9acc8e~mv2.jpeg";
      }}
      className={`${className} object-contain mix-blend-lighten`}
    />
  );
}
