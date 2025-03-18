import Link from "next/link";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import TwitterIcon from "@mui/icons-material/Twitter";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navSections = [
    {
      title: "Conteúdo",
      links: [
        { label: "Blog", href: "/blog" },
        { label: "Portfolio", href: "/portfolio" },
        { label: "Sobre", href: "/about" },
        { label: "Contato", href: "/contact" },
      ],
    },
    {
      title: "Serviços",
      links: [
        { label: "Desenvolvimento Web", href: "/services/web-development" },
        {
          label: "Arquitetura de Software",
          href: "/services/software-architecture",
        },
        { label: "Consultoria", href: "/services/consulting" },
        { label: "Mentoria", href: "/services/mentoring" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Termos de Uso", href: "/terms" },
        { label: "Política de Privacidade", href: "/privacy" },
        { label: "Cookies", href: "/cookies" },
      ],
    },
  ];

  const socialLinks = [
    {
      icon: <GitHubIcon />,
      href: "https://github.com/guisoaresdev",
      label: "GitHub",
      ariaLabel: "Perfil no GitHub",
    },
    {
      icon: <LinkedInIcon />,
      href: "https://linkedin.com/in/soaresguidev",
      label: "LinkedIn",
      ariaLabel: "Perfil no LinkedIn",
    },
    {
      icon: <TwitterIcon />,
      href: "https://twitter.com/soaresdev",
      label: "Twitter",
      ariaLabel: "Perfil no Twitter",
    },
    {
      icon: <MailIcon />,
      href: "mailto:soaresgui.dev@gmail.com",
      label: "Email",
      ariaLabel: "Enviar email",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Top section with links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About column */}
          <div>
            <Link href="/" className="font-bold text-xl flex items-center mb-4">
              <span className="text-blue-400">Soares</span>
              <span className="font-mono">Dev</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Desenvolvedor full stack focado em criar soluções elegantes para
              problemas complexos, utilizando tecnologias modernas e seguindo as
              melhores práticas de desenvolvimento.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                  aria-label={link.ariaLabel}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {navSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-lg mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter subscription */}
        <div className="border-t border-gray-800 pt-8 pb-6">
          <div className="max-w-xl mx-auto text-center mb-8">
            <h3 className="font-bold text-lg mb-3">
              Inscreva-se na newsletter
            </h3>
            <p className="text-gray-300 mb-4">
              Receba dicas, tutoriais e novidades sobre desenvolvimento
              diretamente no seu email.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Seu email"
                className="px-4 py-2 rounded-md bg-gray-800 text-white flex-grow focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400 text-sm">
          <p>© {currentYear} SoaresDev. Todos os direitos reservados.</p>
          <p className="mt-2">
            Desenvolvido com <span className="text-red-500">♥</span> usando
            Next.js e TypeScript.
          </p>
        </div>
      </div>
    </footer>
  );
}
