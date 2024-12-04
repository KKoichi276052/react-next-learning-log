import paths from '@/app/paths';
import { db } from '@/lib/db';
import { Chip } from '@nextui-org/chip';
import Link from 'next/link';

const TopicList = async () => {
  const topics = await db.topic.findMany();

  const renderedTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link key={topic.id} href={paths.topicShow(topic.slug)}>
          <Chip color="warning" variant="flat">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    );
  });

  return <div className="flex flex-row flex-wrap gap-2">{renderedTopics}</div>;
};

export default TopicList;
