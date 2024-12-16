import React from 'react';

interface TechIconProps {
  name: string;
  imageUrl: string;
}

export function TechIcon({ name, imageUrl }: TechIconProps) {
  return (
    <div className="flex items-center gap-2">
      <img 
        src={imageUrl} 
        alt="" 
        className="w-5 h-5 object-contain"
        loading="lazy"
      />
      <span>{name}</span>
    </div>
  );
}