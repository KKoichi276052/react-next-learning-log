import TopicList from '@/components/common/TopicList';
import PostList from '@/components/posts/post-list';
import TopicCreateForm from '@/components/topics/TopicCreateForm';
import { fetchTopPosts } from '@/db/queries/posts';
import { Divider } from '@nextui-org/react';

export default async function Home() {
  return (
    <>
      <div className="grid grid-cols-4 gap-4 p-4">
        <div className="col-span-3">
          <h1 className="text-xl m-2">Top Posts</h1>
          <PostList fetchData={fetchTopPosts} />
        </div>
        <div className="border py-3 px-2">
          <TopicCreateForm />
          <Divider className="my-4" />
          <h3 className="text-lg mb-3">Topics</h3>
          <TopicList />
        </div>
      </div>
    </>
  );
}
