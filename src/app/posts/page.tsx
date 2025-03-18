import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";

export default async function Post() {
  const posts = getAllPosts();

  if (!posts) {
    return notFound();
  }

  return (
    <main>
      <Container>
        <MoreStories posts={posts} title="Blog" />
      </Container>
    </main>
  );
}
