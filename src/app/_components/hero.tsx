import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-blue-600">Desenvolvedor</span> Full Stack
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Criando soluções web modernas e eficientes com as melhores
            tecnologias do mercado. Especializado em React, Next.js, Node.js e
            arquiteturas escaláveis.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/portfolio"
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium flex items-center"
            >
              Ver projetos
            </Link>
            <Link
              href="/contact"
              className="bg-gray-100 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-200 transition-colors font-medium"
            >
              Contato
            </Link>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-600">
            <Image
              src="/assets/blog/authors/soaresdev.png"
              alt="Foto de perfil"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
