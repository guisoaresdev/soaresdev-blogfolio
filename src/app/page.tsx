import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Hero } from "./_components/hero";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts, getAllProjects } from "@/lib/api";
import { MoreProjects } from "@/app/_components/more-projects";
import { CallAction } from "@/app/_components/call-action";

export default function Index() {
  const allPosts = getAllPosts();
  const allProjects = getAllProjects();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <Hero />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && (
          <MoreStories posts={morePosts} title="Últimas publicações" />
        )}
        <MoreProjects
          projects={allProjects}
          title="Projetos em Destaque"
          all={true}
        />
      </Container>
      <CallAction />
    </main>
  );
}
