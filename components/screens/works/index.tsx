import type { Work } from "@/types";

import { TableOfContents } from "@/components/on-this-page";
import { PostNavigation } from "@/components/post-navigation";
import { formatter } from "@/lib/formatter";
import { getWork } from "@/lib/mdx";
import { MDX } from "@/mdx-components";

import React from "react";
//import { readingTime } from "reading-time-estimator";

interface Props {
  work: Work;
  route: string;
}

export const Layout = ({ work, route }: Props) => {
  const works = getWork(route);

  const Seperator = () => {
    return <div>⋅</div>;
  };

  const PublishedTime = () => {
    return <div>Published {formatter.date(new Date(work.time.created))}</div>;
  };
//   const UpdateTime = () => {
//     return <div>Updated {formatter.date(new Date(work.time.updated))}</div>;
//   };

//   const ReadingTime = () => {
//     return <div>{readingTime(work.content).minutes} minutes read</div>;
//   };

  const AudienceViews = () => {
    return <div>{work.audience?.views} views</div>;
  };

  const ProjectType = () => {
    return <div>{work.project?.type}</div>;
  };

  const ProjectStatus = () => {
    return <div>{work.project?.status}</div>;
  };

  return (
    <React.Fragment>
      <div className="flex flex-col">
        <div>
          <h1>{work.title}</h1>
        </div>
        <div className="mt-1 flex gap-2 text-muted text-small">
          <PublishedTime />
          <Seperator />
          <ProjectType />
          <Seperator />
          <ProjectStatus />
          <Seperator />
          <AudienceViews />
        </div>
        <div>
          <h2 className="mt-2 text-small text-muted">{work.summary}</h2>
        </div>
      </div>

      <MDX source={work.content} />
      <PostNavigation posts={works} />
      <TableOfContents />
    </React.Fragment>
  );
};
