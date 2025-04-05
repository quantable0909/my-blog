import { useLoaderData } from 'react-router';
import PostCard from '../common/components/PostCard';
import { allPosts } from '../common/data/posts';
import { filterPostsByCategory } from '../common/utils/filters';
import type { Post } from '../common/types';

export async function loader() {
  const lifestylePosts = filterPostsByCategory(allPosts, 'LIFESTYLE');
  return {
    posts: lifestylePosts,
  };
}

export default function LifestylePage() {
  const { posts } = useLoaderData() as { posts: Post[] };

  return (
    <div className="category-page lifestyle-page">
      <div className="container">
        <div className="page-header">
          <h1>Lifestyle</h1>
          <p>
            Explore wellness, mental health, and balanced living for travelers.
          </p>
        </div>

        <div className="posts-grid">
          {posts.map((post: Post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
