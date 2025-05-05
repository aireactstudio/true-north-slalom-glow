import React from 'react';

interface SectionDividerProps {
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  className = ''
}) => {
  return (
    <div className={`flex w-full h-[2px] ${className}`}>
      <div className="w-1/5 bg-purple-900"></div>
      <div className="w-1/5 bg-indigo-700"></div>
      <div className="w-1/5 bg-amber-600"></div>
      <div className="w-1/5 bg-red-800"></div>
      <div className="w-1/5 bg-blue-900"></div>
    </div>
  );
};

export default SectionDivider;
