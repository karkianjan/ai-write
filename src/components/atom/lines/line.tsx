import React from 'react';

interface LineProps {
  width?: string;
  height?: string;
  gap?: string;
  borderColor?: string;
  opacity?: number;
}

const Line: React.FC<LineProps> = ({
  width = '329px',
  height = '1px',
  gap = '1px',
  borderColor = '#E1E4ED',
  opacity = 0,
}) => {
  return (
    <div
      className={`w-[${width}] h-1 border-t border-solid`}
      style={{
        borderColor,
        opacity,
        transform: 'rotate(-180deg)',
        gap,

      }}
    />
  );
};

export default Line;
