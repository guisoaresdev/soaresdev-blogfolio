import { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function Section({ title, children, className = "" }: SectionProps) {
  return (
    <div className={`mb-20 ${className}`}>
      <h2 className="text-6xl text-blue-600 font-bold mb-8 text-center">
        {title}
      </h2>
      {children}
    </div>
  );
}
