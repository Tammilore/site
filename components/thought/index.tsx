import { formatter } from "@/lib/formatter";
import { getThought } from "@/lib/mdx";

import { Link as NextViewTransition } from "next-view-transitions";
import React from "react";

interface PostProps {
  category: string;
}

export const Thought = ({ category }: PostProps) => {
  const thoughts = getThought(category).sort((a, b) => {
    return new Date(b.time.created).getTime() - new Date(a.time.created).getTime();
  });

  const Seperator = () => <div className="border-border border-t" />;

  if (thoughts.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-col">
      <NextViewTransition href={`/${category}`} className="flex justify-between">
        <h2 className="py-2 text-muted capitalize">
          {category} {thoughts.length > 0 && `(${thoughts.length})`}
        </h2>
      </NextViewTransition>

      {thoughts.map((thought) => {
        return (
          <React.Fragment key={thought.slug}>
            <Seperator />
            <NextViewTransition href={`/${category}/${thought.slug}`} className="flex w-full justify-between py-2">
              <p>{thought.title}</p>
            </NextViewTransition>
          </React.Fragment>
        );
      })}
    </div>
  );
};
