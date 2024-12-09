import * as FadeIn from "@/components/motion/staggers/fade";
import { Thought } from "@/components/thought";
import { OpenGraph } from "@/lib/og";

import React from "react";

const category = "thoughts";

export function generateMetadata() {
  const image = `${process.env.NEXT_PUBLIC_SITE_URL}api/og?title=${encodeURIComponent(category)}`;

  return {
    ...OpenGraph,
    category,
    openGraph: {
      category,
      images: [image],
    },
    twitter: {
      images: [image],
    },
  };
}

export default function Page() {
  return (
    <React.Fragment>
      <FadeIn.Item>
        <Thought category={category} />
      </FadeIn.Item>
    </React.Fragment>
  );
}
