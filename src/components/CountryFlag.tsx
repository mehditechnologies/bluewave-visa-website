import React from 'react';

interface CountryFlagProps {
  code: string;
  name: string;
  className?: string;
}

export const CountryFlag: React.FC<CountryFlagProps> = ({ code, name, className = 'w-5 h-3.5' }) => {
  const cCode = code.toLowerCase().trim();
  
  return (
    <img
      src={`https://flagcdn.com/w80/${cCode}.png`}
      alt={`${name} flag`}
      className={`${className} object-cover rounded-xs border border-slate-200/80 shadow-2xs inline-block flex-shrink-0`}
      loading="lazy"
      onError={(e) => {
        // Fallback to local flag file
        (e.currentTarget as HTMLImageElement).src = `/flags/${cCode}.png`;
      }}
    />
  );
};
