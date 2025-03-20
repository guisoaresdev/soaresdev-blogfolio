import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

interface Props {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export async function ProjectPreview({
  slug,
  title,
  description,
  imageUrl,
  tags,
  githubUrl,
  liveUrl,
  featured,
}: Props) {
  return (
    <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow tracking-tighter leading-tight">
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="accent-1">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-100 text-gray-800 px-2 py-1 text-sm rounded"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4 pt-2">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="accent-1 hover:text-blue-600 flex items-center"
            >
              <GitHubIcon className="h-5 w-5 mr-1" /> Código
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600 flex items-center"
            >
              <LaunchIcon className="h-5 w-5 mr-1" /> Demo
            </a>
          )}
        </div>
        <Link
          href={`/portfolio/${slug}`}
          className="block mt-4 text-blue-600 hover:text-blue-800 font-medium"
        >
          Ver detalhes
        </Link>
      </div>
    </div>
  );
}
