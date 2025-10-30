import React from 'react';

interface AppIconProps {
  name: string;
  label: string;
  bgColor: string;
  textColor?: string;
}

export const AppIcon: React.FC<AppIconProps> = ({ 
  name, 
  label, 
  bgColor,
  textColor = 'text-white' 
}) => {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className={`${bgColor} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg hover:scale-105 transition-transform`}>
        <span className={`${textColor} font-bold text-2xl`}>{name}</span>
      </div>
      <span className="text-gray-900 text-sm font-medium">{label}</span>
    </div>
  );
};