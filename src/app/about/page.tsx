import Container from "../_components/container";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Hero } from "../_components/hero";

export default async function AboutPage() {
  return (
    <Container>
      <Hero />
      <section className="container py-12 mx-auto">
        <h1 className="text-6xl text-blue-600 font-bold tracking-tight mb-6">
          Sobre Mim
        </h1>
        <div className="prose max-w-none accent-1 mb-20">
          <p>
            Eu sou <b className="text-blue-600">Guilherme Soares</b>, um
            desenvolvedor fullstack que transforma ideias em soluções digitais
            modernas, eficientes e impactantes.
          </p>
          <p>
            Experiência em diversas frentes de tecnologia — de SaaS, BPM, ERPs,
            a aplicações web e mobile pra orgãos estaduais, chatbots e mais.
          </p>
        </div>

        {/* Seção do Roadmap */}
        <div className="mt-40">
          <h2 className="text-4xl text-blue-600 font-bold mb-12 text-center animate-fade-in">
            Minha Jornada
          </h2>
          <div className="relative max-w-4xl mx-auto">
            {/* Linha central estilizada */}
            <div className="absolute inset-0 w-2 bg-gradient-to-b from-blue-200 to-blue-600 mx-auto rounded-full"></div>

            {/* Item do Roadmap */}
            <div className="relative mb-16 flex items-center justify-between group">
              <div className="w-5/12 text-right pr-8 transition-all group-hover:scale-105">
                <h3 className="text-2xl font-bold accent-1">2020 - O Começo</h3>
                <p className="accent-1 mt-2">
                  Iniciei minha graduação em Engenharia de Software e criei meu
                  GitHub, plantando as sementes da minha carreira tech.
                </p>
              </div>
              <div className="w-2/12 flex justify-center">
                <span className="w-6 h-6 bg-blue-600 rounded-full z-10 border-4 border-white shadow-lg"></span>
              </div>
              <div className="w-5/12"></div>
            </div>

            <div className="relative mb-16 flex items-center justify-between group">
              <div className="w-5/12"></div>
              <div className="w-2/12 flex justify-center">
                <span className="w-6 h-6 bg-blue-600 rounded-full z-10 border-4 border-white shadow-lg"></span>
              </div>
              <div className="w-5/12 pl-8 transition-all group-hover:scale-105">
                <h3 className="text-2xl font-bold accent-1">
                  2021 - Primeira Missão
                </h3>
                <p className="accent-1 mt-2">
                  Estagiei como Full Stack na Inside The Box, entregando
                  soluções web e mobile com Node.js, React & React Native.
                </p>
              </div>
            </div>

            <div className="relative mb-16 flex items-center justify-between group">
              <div className="w-5/12 text-right pr-8 transition-all group-hover:scale-105">
                <h3 className="text-2xl font-bold accent-1">
                  2022 - Criando do Zero
                </h3>
                <p className="accent-1 mt-2">
                  Desenvolvi meu primeiro projeto web com HTML, CSS e JS, depois
                  refatorado com Node.js e React pra viabilizar manutenção.
                </p>
              </div>
              <div className="w-2/12 flex justify-center">
                <span className="w-6 h-6 bg-blue-600 rounded-full z-10 border-4 border-white shadow-lg"></span>
              </div>
              <div className="w-5/12"></div>
            </div>

            <div className="relative mb-16 flex items-center justify-between group">
              <div className="w-5/12"></div>
              <div className="w-2/12 flex justify-center">
                <span className="w-6 h-6 bg-blue-600 rounded-full z-10 border-4 border-white shadow-lg"></span>
              </div>
              <div className="w-5/12 pl-8 transition-all group-hover:scale-105">
                <h3 className="text-2xl font-bold accent-1">
                  2023 - Mãos na Massa
                </h3>
                <p className="accent-1 mt-2">
                  Explorei novos horizontes com projetos pessoais: microserviços
                  em Spring Boot, apps mobile em React Native pra construção de
                  um portfólio afiado.
                </p>
              </div>
            </div>

            <div className="relative mb-16 flex items-center justify-between group">
              <div className="w-5/12 text-right pr-8 transition-all group-hover:scale-105">
                <h3 className="text-2xl font-bold accent-1">
                  2024/1 - Freelancer
                </h3>
                <p className="accent-1 mt-2">
                  Iniciei no Fluig (TOTVS), criando processos, datasets,
                  widgets, e realizando integrações com APIs para gigantes como
                  Grupo Décio e ENGPAC.
                </p>
              </div>
              <div className="w-2/12 flex justify-center">
                <span className="w-6 h-6 bg-blue-600 rounded-full z-10 border-4 border-white shadow-lg"></span>
              </div>
              <div className="w-5/12"></div>
            </div>

            <div className="relative mb-16 flex items-center justify-between group">
              <div className="w-5/12"></div>
              <div className="w-2/12 flex justify-center">
                <span className="w-6 h-6 bg-blue-600 rounded-full z-10 border-4 border-white shadow-lg"></span>
              </div>
              <div className="w-5/12 pl-8 transition-all group-hover:scale-105">
                <h3 className="text-2xl font-bold accent-1">
                  2024/1 - Impacto na Saúde
                </h3>
                <p className="accent-1 mt-2">
                  Participei da construção de um chatbot integrado ao WhatsApp
                  como Full Stack para o CIEVS-CG, melhorando o controle
                  epidemiológico.
                </p>
              </div>
            </div>

            <div className="relative mb-16 flex items-center justify-between group">
              <div className="w-5/12 text-right pr-8 transition-all group-hover:scale-105">
                <h3 className="text-2xl font-bold accent-1">
                  2024/2 - Liderança em Ação
                </h3>
                <p className="accent-1 mt-2">
                  Liderei o desenvolvimento e manutenção de um sistema de gestão
                  de pacientes pro SEP da UFMS, aumentando escalabilidade e
                  observabilidade.
                </p>
              </div>
              <div className="w-2/12 flex justify-center">
                <span className="w-6 h-6 bg-blue-600 rounded-full z-10 border-4 border-white shadow-lg"></span>
              </div>
              <div className="w-5/12"></div>
            </div>

            <div className="relative mb-16 flex items-center justify-between group">
              <div className="w-5/12"></div>
              <div className="w-2/12 flex justify-center">
                <span className="w-8 h-8 bg-blue-800 rounded-full z-10 border-4 border-blue-200 shadow-xl animate-pulse"></span>
              </div>
              <div className="w-5/12 pl-8 transition-all group-hover:scale-105 bg-blue-50 p-4 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold text-blue-800">
                  2025 - <EmojiEventsIcon /> Bacharel em Engenharia de Software
                </h3>
                <p className="text-black mt-2">
                  Formado em Engenharia de Software pela UFMS, talvez um dos
                  melhores cursos do país, alinhado ao SWEBOK. Uma jornada que
                  me moldou como profissional de elite.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}
