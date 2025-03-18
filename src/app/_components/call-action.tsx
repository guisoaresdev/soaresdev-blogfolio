import Link from "next/link";
export function CallAction() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Vamos trabalhar juntos?</h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Estou disponível para projetos freelance e oportunidades de
          colaboração.
        </p>
        <Link
          href="/contact"
          className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition-colors font-medium"
        >
          Entre em contato
        </Link>
      </div>
    </section>
  );
}
