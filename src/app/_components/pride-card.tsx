import { ReactNode } from "react";

interface PrideCardProps {
  icon: ReactNode;
  title: string;
  lines: string[]; // Array pra linhas separadas
  className?: string;
}

export default function PrideCard({
  icon,
  title,
  lines,
  className = "",
}: PrideCardProps) {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg bg-gradient-to-r from-red-400 via-yellow-400 via-green-400 to-blue-400 text-white transform hover:scale-105 transition-all duration-300 ${className}`}
    >
      <div className="flex items-center space-x-4">
        <div className="text-4xl animate-pulse">{icon}</div>
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <ul className="mt-2 space-y-1">
            {lines.map((line, index) => (
              <li key={index} className="text-lg">
                {line}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
