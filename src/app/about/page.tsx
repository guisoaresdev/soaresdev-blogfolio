// src/app/about/page.tsx
import Container from "../_components/container";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SchoolIcon from "@mui/icons-material/School";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import { Hero } from "../_components/hero";
import FunFactCard from "../_components/fun-fact-card";
import PrideCard from "../_components/pride-card";
import { Section } from "../_components/section";
import { Timeline } from "../_components/timeline";
import { RoadmapItem } from "../_components/roadmap-item";

export default async function AboutPage() {
  return (
    <Container>
      <Hero />
      <section className="container py-12 mx-auto">
        {/* Fun Facts */}
        <Section title="Coisas Legais Sobre Mim">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <PrideCard
              icon={<FavoriteIcon />}
              title="Membro da Comunidade LGBTQIA+"
              lines={["Orientação Sexual: Pansexual", "Pronomes: Ele/Dele"]}
            />
            <FunFactCard
              icon={<EmojiEventsIcon />}
              title="Música no Sangue"
              description="Canto e toco violão desde pequeno, herança da minha mãe. Animei luais em Mococa, bares e até tive uma banda, a Loquaz."
            />
            <FunFactCard
              icon={<EmojiEventsIcon />}
              title="Raiz Mineiro-Paulista"
              description="Nasci em Mococa, na divisa MG-SP, com sotaque misturado e tudo. Amo queijo, café e se eu ouvir um modão faz até a boiada passar pela alma."
            />
            <FunFactCard
              icon={<EmojiEventsIcon />}
              title="Aprendiz Contínuo"
              description="Eu vivo aprendendo coisas novas, tecnologias novas, estudando, lendo livros técnicos, fazendo um novo curso. Ansioso? Sim. Evoluindo? Sempre."
            />
            <FunFactCard
              icon={<EmojiEventsIcon />}
              title="Nerdola dos Games"
              description="Cresci com PS1 e PS2, joguei de GTA San Andreas a Tibia. Hoje, Steam é minha casa: Path of Exile 1 e 2, Dota 2, Team Fortress 2."
            />
            <FunFactCard
              icon={<EmojiEventsIcon />}
              title="Filho do Campo"
              description="Sou do interior SP/MG e recarrego no campo — cachoeira, sítio, rancho, chácara ou pescando. É meu escape pra acalmar a ansiedade e deixar a correria pra trás."
            />
          </div>
        </Section>

        {/* Princípios */}
        <Section title="Princípios" className="py-12 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <FunFactCard
              icon={<FavoriteIcon />}
              title="Paixão em Tudo"
              description="Acredito que o amor tem um poder de transformação absurdo, vivo por encontrar novas paixões e caminhos."
              className="bg-white"
            />
            <FunFactCard
              icon={<SchoolIcon />}
              title="Crescer Todo Dia"
              description="Aprender é meu combustível — da linguagem ao próximo produto/serviço que eu vou vender."
              className="bg-white"
            />
            <FunFactCard
              icon={<Diversity3Icon />}
              title="Respeito Acima de Tudo"
              description="Diversidade e empatia são minha base, dentro e fora do teclado."
              className="bg-white"
            />
          </div>
        </Section>

        {/* Roadmap */}
        <Timeline>
          <RoadmapItem
            year="2020"
            title="O Começo"
            description="Iniciei minha graduação em Engenharia de Software e criei meu GitHub, plantando as sementes da minha carreira tech."
            isLeft
          />
          <RoadmapItem
            year="2021"
            title="Primeira Missão"
            description="Estagiei como Full Stack na Inside The Box, entregando soluções web e mobile com Node.js, React & React Native."
          />
          <RoadmapItem
            year="2022"
            title="Criando do Zero"
            description="Desenvolvi meu primeiro projeto web com HTML, CSS e JS, depois refatorado com Node.js e React pra viabilizar manutenção."
            isLeft
          />
          <RoadmapItem
            year="2023"
            title="Mãos na Massa"
            description="Explorei novos horizontes com projetos pessoais: microserviços em Spring Boot, apps mobile em React Native pra construção de um portfólio afiado."
          />
          <RoadmapItem
            year="2024/1"
            title="Freelancer"
            description="Iniciei no Fluig (TOTVS), criando processos, datasets, widgets, e realizando integrações com APIs para gigantes como Grupo Décio e ENGPAC."
            isLeft
          />
          <RoadmapItem
            year="2024/1"
            title="Impacto na Saúde"
            description="Participei da construção de um chatbot integrado ao WhatsApp como Full Stack para o CIEVS-CG, melhorando o controle epidemiológico."
          />
          <RoadmapItem
            year="2024/2"
            title="Liderança em Ação"
            description="Liderei o desenvolvimento e manutenção de um sistema de gestão de pacientes pro SEP da UFMS, aumentando escalabilidade e observabilidade."
            isLeft
          />
          <RoadmapItem
            year="2025"
            title="Bacharel em Engenharia de Software"
            description="Formado em Engenharia de Software pela UFMS, talvez um dos melhores cursos do país, alinhado ao SWEBOK. Uma jornada que me moldou como profissional de elite."
            highlight
            icon={<EmojiEventsIcon />}
          />
          <RoadmapItem
            year="2025"
            title="Pró-Reforma"
            description="Desenvolvedor backend no Pró-Reforma, uma REST API em Node.js para cálculo e precificação no setor moveleiro e imobiliário, com modelo Whitelabel para customização. Gerenciamento via Azure DevOps, com deploy automatizado e análise de código no SonarQube."
            isLeft
          />
          <RoadmapItem
            year="2025"
            title="Matemática pra IA"
            description="Colaborei com a Outlier refinando modelos de IA pra resolver problemas matemáticos. Usei cálculo avançado — limites, derivadas, integrais — contribuindo para modelos mais inteligentes e confiáveis."
          />
        </Timeline>
      </section>
    </Container>
  );
}
