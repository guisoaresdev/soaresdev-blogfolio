import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllProjects } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { MoreProjects } from "@/app/_components/more-projects";

export default async function Post() {
  const projects = getAllProjects();

  if (!projects) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <MoreProjects projects={projects} title="Portfolio" all={false} />
      </Container>
    </main>
  );
}
