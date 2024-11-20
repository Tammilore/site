import * as FadeIn from "@/components/motion/staggers/fade";
import { Work } from "@/components/work";
import { OpenGraph } from "@/lib/og";

import React from "react";

const category = "projects";

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
        <Work category={category} />
      </FadeIn.Item>
    </React.Fragment>
  );
}
