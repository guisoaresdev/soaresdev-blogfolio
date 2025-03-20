"use client";
import Link from "next/link";
export function CallAction() {
  return (
    <section className="py-16 accent-3 bg-blue-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl text-white font-bold mb-4">
          Vamos trabalhar juntos?
        </h2>
        <p className="text-xl text-white accent-7 mb-8 max-w-2xl mx-auto">
          Estou disponível para projetos freelance e oportunidades de
          colaboração.
        </p>
        <Link
          href="/contact"
          className="bg-white text-xl text-black px-8 py-3 rounded-md hover:bg-gray-200 transition-colors font-medium"
        >
          Entre em contato
        </Link>
      </div>
    </section>
  );
}
