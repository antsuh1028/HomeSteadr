import React, { ReactNode } from 'react';

interface ChartConfig {
  [key: string]: {
    label: string;
    color: string;
  };
}

interface ChartContainerProps {
  children: ReactNode;
  config: ChartConfig;
  className?: string;
}

const ChartContainer = ({ config, className, children }: ChartContainerProps) => {
  return (
    <div className={className}>
      <h2 style={{ color: config.value.color }}>{config.value.label}</h2>
      {children}
    </div>
  );
};

export default ChartContainer;