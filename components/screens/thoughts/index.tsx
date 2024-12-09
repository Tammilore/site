import type { Thought } from "@/types";

import { TableOfContents } from "@/components/on-this-page";
import { PostNavigation } from "@/components/post-navigation";
import { formatter } from "@/lib/formatter";
import { getThought } from "@/lib/mdx";
import { MDX } from "@/mdx-components";

import React from "react";
//import { readingTime } from "reading-time-estimator";

interface Props {
  thought: Thought;
  route: string;
}

export const Layout = ({ thought, route }: Props) => {
  const thoughts = getThought(route);

//   const Seperator = () => {
//     return <div>⋅</div>;
//   };

  const PublishedTime = () => {
    return <div>Published {formatter.date(new Date(thought.time.created))}</div>;
  };
//   const UpdateTime = () => {
//     return <div>Updated {formatter.date(new Date(work.time.updated))}</div>;
//   };

//   const ReadingTime = () => {
//     return <div>{readingTime(work.content).minutes} minutes read</div>;
//   };

//   const AudienceViews = () => {
//     return <div>{thought.audience?.views} views</div>;
//   };

  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div>
          <h1>{thought.title}</h1>
        </div>
        <div className="mt-1 flex gap-2 text-muted text-small">
          <PublishedTime />
          {/* <Seperator />
          <AudienceViews /> */}
        </div>
        <div>
          <h2 className="mt-2 text-small text-muted">{thought.summary}</h2>
        </div>
      </div>

      <MDX source={thought.content} />
      <PostNavigation posts={thoughts} />
      <TableOfContents />
    </React.Fragment>
  );
};
