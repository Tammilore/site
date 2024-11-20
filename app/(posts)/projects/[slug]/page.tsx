import type { Work } from "@/types";

import { Layout } from "@/components/screens/works";
import { getWork } from "@/lib/mdx";
import { OpenGraph } from "@/lib/og";

import { notFound } from "next/navigation";

const route = "projects";

const Works = getWork(route);

interface PageProps {
  params: Work;
}

export async function generateStaticParams() {
  return Works.map((work) => ({
    slug: `${work.slug}`,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const work = Works.find((work: { slug: string }) => work.slug === params.slug);
  const title = work ? work.title : "";
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(title)}`;

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
  const work = Works.find((work: { slug: string }) => work.slug === params.slug);

  if (!work) {
    notFound();
  }

  return <Layout work={work} route={route} />;
}
