import { formatter } from "@/lib/formatter";
import { getWork } from "@/lib/mdx";

import { Link as NextViewTransition } from "next-view-transitions";
import React from "react";

interface PostProps {
  category: string;
}

export const Work = ({ category }: PostProps) => {
  const works = getWork(category).sort((a, b) => {
    return new Date(b.time.created).getTime() - new Date(a.time.created).getTime();
  });

  const Seperator = () => <div className="border-border border-t" />;

  if (works.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-col">
      <NextViewTransition href={`/${category}`} className="flex justify-between">
        <h2 className="py-2 text-muted capitalize">
          {category} {works.length > 0 && `(${works.length})`}
        </h2>
      </NextViewTransition>

      {works.map((work) => {
        return (
          <React.Fragment key={work.slug}>
            <Seperator />
            <NextViewTransition href={`/${category}/${work.slug}`} className="flex w-full justify-between py-2">
              <p>{work.title}</p>
            </NextViewTransition>
          </React.Fragment>
        );
      })}
    </div>
  );
};
