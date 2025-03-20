import Link from "next/link";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { ProjectPreview } from "./project-preview";
import { Project } from "@/interfaces/project";

type Props = {
  projects: Project[];
  title: string;
  all: Boolean;
};

export function MoreProjects({ projects, title, all }: Props) {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="mb-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            {title}
          </h2>
          {all && (
            <Link
              href="/portfolio"
              className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
            >
              Ver todos <ArrowRightAltIcon className="ml-1 h-4 w-4" />
            </Link>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 tracking-lighter leading-tight">
          {projects.map((project) => (
            <ProjectPreview
              key={project.slug}
              slug={project.slug}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
