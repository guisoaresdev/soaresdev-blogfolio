export function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
        SoaresDev Blog/Portfolio.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        <a className="underline hover:text-blue-600 duration-200 transition-colors">
          Eu sou Guilherme Soares, um desenvolvedor full stack e esse é meu blog
          e portfolio.
        </a>
      </h4>
    </section>
  );
}
