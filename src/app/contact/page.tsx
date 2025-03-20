import Container from "../_components/container";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function ContactPage() {
  return (
    <section className="min-h-screen flex items-center justify-center pb-16">
      <div className="max-w-3xl w-full mx-auto text-center">
        {/* Título */}
        <h1 className="text-5xl md:text-6xl text-blue-600 font-bold tracking-tight mb-6 animate-fade-in">
          Entre em Contato
        </h1>
        <p className="text-xl accent-1 mb-12 max-w-2xl mx-auto">
          Vamos construir algo incrível juntos! Me envie uma mensagem ou me
          encontre nas redes.
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-12">
          <a
            href="https://linkedin.com/in/soaresguidev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
          >
            <LinkedInIcon className="text-3xl" />
            <span className="text-lg font-medium">LinkedIn</span>
          </a>
          <a
            href="https://github.com/guisoaresdev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 accent-1 hover:text-black transition-colors"
          >
            <GitHubIcon className="text-3xl" />
            <span className="text-lg font-medium">GitHub</span>
          </a>
          <a
            href="https://youtube.com/@5oaresDev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-red-600 hover:text-red-800 transition-colors"
          >
            <YouTubeIcon className="text-3xl" />
            <span className="text-lg font-medium">YouTube</span>
          </a>
          <a
            href="mailto:soaresgui.dev@gmail.com"
            className="flex items-center gap-2 accent-1 hover:text-blue-800 transition-colors"
          >
            <EmailIcon className="text-3xl" />
            <span className="text-lg font-medium">Email</span>
          </a>
        </div>

        <p className="accent-1 mt-8">
          Respondo em até 24h. Vamos transformar sua ideia em realidade!
        </p>
      </div>
    </section>
  );
}
