import type { Thought } from "@/types";

import { Layout } from "@/components/screens/thoughts";
import { getThought } from "@/lib/mdx";
import { OpenGraph } from "@/lib/og";

import { notFound } from "next/navigation";

const route = "thoughts";

const Thoughts = getThought(route);

interface PageProps {
  params: Thought;
}

export async function generateStaticParams() {
  return Thoughts.map((thought) => ({
    slug: `${thought.slug}`,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const thought = Thoughts.find((thought: { slug: string }) => thought.slug === params.slug);
  const title = thought ? thought.title : "";
  const imagePath = thought && thought.media?.image ? thought.media.image : `/api/og?title=${encodeURIComponent(title)}`;
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}${imagePath}`;

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
  const thought = Thoughts.find((thought: { slug: string }) => thought.slug === params.slug);

  if (!thought) {
    notFound();
  }

  return <Layout thought={thought} route={route} />;
}
