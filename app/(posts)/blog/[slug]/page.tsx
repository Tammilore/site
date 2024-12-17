import type { Post } from "@/types";

import { Layout } from "@/components/screens/posts";
import { getPosts } from "@/lib/mdx";
import { OpenGraph } from "@/lib/og";

import { notFound } from "next/navigation";

const route = "blog";

const Posts = getPosts(route);

interface PageProps {
  params: Post;
}

export async function generateStaticParams() {
  return Posts.map((post) => ({
    slug: `${post.slug}`,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const post = Posts.find((post: { slug: string }) => post.slug === params.slug);
  const title = post ? post.title : "";
  const imagePath = post && post.media?.image ? post.media.image : `api/og?title=${encodeURIComponent(title)}`;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL?.endsWith('/') ? process.env.NEXT_PUBLIC_SITE_URL : `${process.env.NEXT_PUBLIC_SITE_URL}/`;
  const image = `${siteUrl}${imagePath}`;

  return {
    ...OpenGraph,
    title,
    openGraph: {
      title,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}

export default function Page({ params }: PageProps) {
  const post = Posts.find((post: { slug: string }) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <Layout post={post} route={route} />;
}
