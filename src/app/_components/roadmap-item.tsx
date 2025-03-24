import { ReactNode } from "react";

interface RoadmapItemProps {
  year: string;
  title: string;
  description: string;
  isLeft?: boolean; // Define se o texto vai à esquerda ou direita
  highlight?: boolean; // Pra itens especiais (ex.: graduação)
  icon?: ReactNode; // Ícone opcional
}

export function RoadmapItem({
  year,
  title,
  description,
  isLeft = false,
  highlight = false,
  icon,
}: RoadmapItemProps) {
  return (
    <div className="relative mb-16 flex items-center justify-between group">
      {isLeft ? (
        <div className="w-5/12 text-right pr-8 transition-all group-hover:scale-105">
          <h3 className="text-2xl font-bold accent-1">
            {year} - {icon} {title}
          </h3>
          <p className="accent-1 mt-2">{description}</p>
        </div>
      ) : (
        <div className="w-5/12"></div>
      )}
      <div className="w-2/12 flex justify-center">
        <span
          className={`w-6 h-6 ${
            highlight
              ? "bg-blue-800 w-8 h-8 border-blue-200 animate-pulse"
              : "bg-blue-600"
          } rounded-full z-10 border-4 border-white shadow-lg`}
        ></span>
      </div>
      {!isLeft ? (
        <div
          className={`w-5/12 pl-8 transition-all group-hover:scale-105 ${
            highlight ? "bg-blue-50 p-4 rounded-lg shadow-md" : ""
          }`}
        >
          <h3
            className={`text-2xl font-bold ${highlight ? "text-blue-800" : "accent-1"}`}
          >
            {year} - {icon} {title}
          </h3>
          <p className={highlight ? "text-black mt-2" : "accent-1 mt-2"}>
            {description}
          </p>
        </div>
      ) : (
        <div className="w-5/12"></div>
      )}
    </div>
  );
}
