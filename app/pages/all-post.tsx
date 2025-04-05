import { useLoaderData } from 'react-router';
import PostCard from '../common/components/PostCard';
import { allPosts } from '../common/data/posts';
import type { Post } from '../common/types';

export async function loader() {
  return {
    posts: allPosts,
  };
}

export default function AllPostsPage() {
  const { posts } = useLoaderData() as { posts: Post[] };

  return (
    <div className="all-posts-page">
      <div className="container">
        <div className="page-header">
          <h1>All Posts</h1>
        </div>

        <div className="posts-grid large-grid">
          {posts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
