import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`max-w-6xl mx-auto px-4 md:py-6 relative z-10 ${className}`}>
      {children}
    </div>
  );
};
