import React from 'react';

export function ChartTooltipContent({ active, payload, label }: any) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#2A2A2A] p-2 shadow-md rounded border border-[#333333]">
        <p className="text-[#CCCCCC] text-sm">{`${label}`}</p>
        <p className="text-[#4CAF50] font-bold">${(payload[0].value / 1000000).toFixed(2)}M</p>
      </div>
    );
  }

  return null;
}