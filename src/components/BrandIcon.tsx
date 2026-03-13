import React from 'react';

export function BrandIcon({ className = "w-8 h-8", ...props }: any) {
  return (
    <img 
      src="/logo.png" 
      alt="VerifySMS Logo" 
      className={`object-contain drop-shadow-sm ${className}`}
      {...props}
    />
  );
}
