import { ReactNode } from "react";
import { Section } from "./section";

interface TimelineProps {
  children: ReactNode;
}

export function Timeline({ children }: TimelineProps) {
  return (
    <Section title="Minha Jornada" className="mt-40">
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute inset-0 w-2 bg-gradient-to-b from-blue-200 to-blue-600 mx-auto rounded-full"></div>
        {children}
      </div>
    </Section>
  );
}
