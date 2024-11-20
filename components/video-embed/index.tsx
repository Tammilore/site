import { FC, ReactNode } from 'react';

type PostVideoProps = {
  title: string;
  footer: ReactNode;
  videoUrl: string;
};

export const PostVideo: FC<PostVideoProps> = ({ title, footer, videoUrl }) => {
  const isLoomUrl = videoUrl.includes('loom.com');

  if (isLoomUrl) {
    // Extract the video ID from the Loom URL
    const loomVideoId = videoUrl.split('/').pop();

    return (
      <div>
        <h2>{title}</h2>
        <iframe
          src={`https://www.loom.com/embed/${loomVideoId}`}
          allowFullScreen
          style={{ border: 'none', width: '100%', height: '100%' }}
        ></iframe>
        <p>{footer}</p>
      </div>
    );
  }

  // Handle other types of videos (e.g., YouTube) here
};
