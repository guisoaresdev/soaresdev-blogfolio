// src/components/fun-fact-card.tsx
import { ReactNode } from "react";

interface FunFactCardProps {
  icon: ReactNode; // Para passar o Material Icon
  title: string;
  description: string;
  className?: string; // Pra customizar o estilo, como o arco-íris
}

export default function FunFactCard({
  icon,
  title,
  description,
  className = "",
}: FunFactCardProps) {
  return (
    <div
      className={`p-6 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 animate-fade-in ${className}`}
    >
      <div className="flex items-center space-x-4">
        <div className="text-3xl">{icon}</div>
        <div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
}
