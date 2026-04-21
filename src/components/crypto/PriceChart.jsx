import React from 'react';

const PriceChart = ({ data, isPositive }) => {
  // Simple SVG line chart for demonstration
  const width = 300;
  const height = 100;
  const points = data || [30, 40, 35, 50, 49, 60, 70, 65, 80, 85];
  
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = max - min;
  
  // Create SVG path
  const pathData = points
    .map((point, index) => {
      const x = (index / (points.length - 1)) * width;
      const y = height - ((point - min) / range) * height;
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    })
    .join(' ');

  return (
    <div className="w-full">
      <svg
        width="100%"
        height="100"
        viewBox={`0 0 ${width} ${height}`}
        className="overflow-visible"
      >
        <path
          d={pathData}
          fill="none"
          stroke={isPositive ? '#10b981' : '#ef4444'}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default PriceChart;
