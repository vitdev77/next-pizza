'use client';

import * as React from 'react';
import Image from 'next/image';
import { Button, Container, Skeleton } from '@/shared/components';
import { Api } from '@/shared/services/api-client';
import { IStory } from '@/shared/services/stories';
import { cn } from '@/shared/lib';
import { X } from 'lucide-react';
import ReactStories from 'react-insta-stories';

interface Props {
  className?: string;
}

export const Stories: React.FC<Props> = ({ className }) => {
  const [stories, setStories] = React.useState<IStory[]>([]);
  const [open, setOpen] = React.useState(false);
  const [selectedStory, setSelectedStory] = React.useState<IStory>();

  React.useEffect(() => {
    async function fetchStories() {
      const data = await Api.stories.getAll();
      setStories(data);
    }

    fetchStories();
  }, []);

  const onClickStory = (story: IStory) => {
    setSelectedStory(story);

    if (story.items.length > 0) {
      setOpen(true);
    }
  };

  return (
    <>
      <Container
        className={cn(
          'flex items-center justify-between gap-2 my-10',
          className
        )}
      >
        {stories.length === 0 &&
          [...Array(6)].map((_, index) => (
            <Skeleton key={index} className="w-[200px] h-[250px]" />
          ))}

        {stories.map((story) => (
          <Image
            key={story.id}
            src={story.previewImageUrl}
            height={250}
            width={200}
            alt=""
            className="rounded-md cursor-pointer"
            onClick={() => onClickStory(story)}
          />
        ))}

        {open && (
          <div className="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed top-0 left-0 size-full bg-black/50 flex items-center justify-center z-30">
            <div className="relative" style={{ width: 520 }}>
              <Button
                variant={'link'}
                className="absolute -right-8 top-0 z-30 size-8 rounded-full"
                onClick={() => setOpen(false)}
              >
                <X className="size-8 text-white" />
              </Button>

              <ReactStories
                onAllStoriesEnd={() => setOpen(false)}
                stories={
                  selectedStory?.items.map((item) => ({
                    url: item.sourceUrl,
                  })) || []
                }
                defaultInterval={5000}
                width={520}
                height={800}
              />
            </div>
          </div>
        )}
      </Container>
    </>
  );
};
